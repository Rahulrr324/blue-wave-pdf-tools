
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FileDropzone from './FileDropzone';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';
import { toast } from '@/components/ui/use-toast';

interface PdfToolTemplateProps {
  title: string;
  description: string;
  acceptedFileTypes?: string[];
  maxFiles?: number;
  icon: React.ReactNode;
  processFiles: (files: File[]) => Promise<Blob>;
  children?: React.ReactNode;
}

const PdfToolTemplate: React.FC<PdfToolTemplateProps> = ({
  title,
  description,
  acceptedFileTypes = ['.pdf'],
  maxFiles = 10,
  icon,
  processFiles,
  children,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
      // Clean up any object URLs to avoid memory leaks
      Object.values(previews).forEach(URL.revokeObjectURL);
    };
  }, [previews]);

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles(prevFiles => {
      // Avoid adding duplicates
      const existingNames = new Set(prevFiles.map(f => f.name));
      const uniqueNewFiles = newFiles.filter(file => !existingNames.has(file.name));
      
      // Check max files limit
      if (prevFiles.length + uniqueNewFiles.length > maxFiles) {
        toast({
          title: "Too many files",
          description: `You can only upload up to ${maxFiles} files at once.`,
          variant: "destructive",
        });
        return prevFiles;
      }
      
      return [...prevFiles, ...uniqueNewFiles];
    });
  };

  const handleRemoveFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
    
    // Clean up preview URL
    if (previews[fileToRemove.name]) {
      URL.revokeObjectURL(previews[fileToRemove.name]);
      setPreviews(prev => {
        const newPreviews = { ...prev };
        delete newPreviews[fileToRemove.name];
        return newPreviews;
      });
    }
  };

  const handleProcess = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please add at least one file to process.",
        variant: "destructive",
      });
      return;
    }

    try {
      setProcessing(true);
      setProgress(0);

      // Simulate progress
      const progressInterval = setInterval(() => {
        if (isMounted.current) {
          setProgress(prev => {
            const newProgress = prev + (Math.random() * 15);
            return newProgress >= 90 ? 90 : newProgress;
          });
        }
      }, 300);

      // Process files
      const resultBlob = await processFiles(files);
      
      // Clear interval and set final state
      clearInterval(progressInterval);
      
      if (isMounted.current) {
        setProgress(100);
        setResult(resultBlob);
      }
    } catch (error) {
      console.error('Error processing files:', error);
      toast({
        title: "Processing failed",
        description: "An error occurred while processing your files. Please try again.",
        variant: "destructive",
      });
    } finally {
      if (isMounted.current) {
        setProcessing(false);
      }
    }
  };

  const handleDownload = () => {
    if (!result) return;
    
    const url = URL.createObjectURL(result);
    const link = document.createElement('a');
    link.href = url;
    link.download = `processed_${new Date().toISOString().slice(0, 10)}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleStartOver = () => {
    setFiles([]);
    setProgress(0);
    setResult(null);
    
    // Clean up previews
    Object.values(previews).forEach(URL.revokeObjectURL);
    setPreviews({});
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
              {icon}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {!result ? (
              <>
                <FileDropzone
                  onFilesAdded={handleFilesAdded}
                  acceptedFileTypes={acceptedFileTypes}
                  maxFiles={maxFiles}
                  className="mb-6"
                />

                {files.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-md font-medium mb-3">
                      Selected Files ({files.length}/{maxFiles})
                    </h3>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <FilePreview
                          key={`${file.name}-${index}`}
                          file={file}
                          onRemove={handleRemoveFile}
                          previewUrl={previews[file.name]}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {children}

                <div className="mt-8">
                  <Button
                    onClick={handleProcess}
                    disabled={processing || files.length === 0}
                    className="w-full sm:w-auto"
                  >
                    {processing ? 'Processing...' : 'Process Files'}
                  </Button>
                </div>

                {processing && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Processing your files...
                    </p>
                    <ProgressBar progress={progress} />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-20 h-20 mx-auto mb-4 text-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Processing Complete!</h3>
                <p className="text-gray-600 mb-6">Your files have been successfully processed.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Button onClick={handleDownload} className="bg-primary-600 hover:bg-primary-700">
                    Download Result
                  </Button>
                  <Button variant="outline" onClick={handleStartOver}>
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfToolTemplate;
