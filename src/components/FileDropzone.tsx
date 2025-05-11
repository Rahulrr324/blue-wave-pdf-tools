
import React, { useState, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface FileDropzoneProps {
  onFilesAdded: (files: File[]) => void;
  maxFiles?: number;
  acceptedFileTypes?: string[];
  maxSizeInMB?: number;
  className?: string;
  children?: React.ReactNode;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  onFilesAdded,
  maxFiles = 10,
  acceptedFileTypes = ['.pdf'],
  maxSizeInMB = 50,
  className = '',
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const validateFiles = useCallback((files: File[]) => {
    if (files.length > maxFiles) {
      toast({
        title: "Too many files",
        description: `You can only upload up to ${maxFiles} files at once.`,
        variant: "destructive",
      });
      return false;
    }
    
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    
    const invalidFiles = files.filter(file => {
      // Check file size
      if (file.size > maxSizeInBytes) {
        toast({
          title: "File too large",
          description: `${file.name} is too large. Maximum size is ${maxSizeInMB}MB.`,
          variant: "destructive",
        });
        return true;
      }
      
      // Check file type if specified types exist
      if (acceptedFileTypes.length > 0 && acceptedFileTypes[0] !== '*') {
        const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
        
        // Special case for MIME types instead of extensions
        if (file.type && acceptedFileTypes.some(type => type.startsWith('.'))) {
          // Check if any accepted file extension matches this file's extension
          if (!acceptedFileTypes.includes(fileExtension)) {
            toast({
              title: "Invalid file type",
              description: `${file.name} has an unsupported file type. Accepted types: ${acceptedFileTypes.join(', ')}`,
              variant: "destructive",
            });
            return true;
          }
        }
      }
      
      return false;
    });
    
    return invalidFiles.length === 0;
  }, [maxFiles, maxSizeInMB, acceptedFileTypes, toast]);
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (validateFiles(droppedFiles)) {
      onFilesAdded(droppedFiles);
    }
  }, [onFilesAdded, validateFiles]);
  
  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (validateFiles(selectedFiles)) {
        onFilesAdded(selectedFiles);
        // Reset the input value to allow selecting the same file again
        e.target.value = '';
      }
    }
  }, [onFilesAdded, validateFiles]);
  
  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);
  
  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors
        ${isDragging ? 'bg-primary-50 border-primary-500' : 'border-gray-300 hover:border-primary-400'}
        ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={openFileDialog}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={maxFiles > 1}
        accept={acceptedFileTypes.join(',')}
        className="hidden"
        onChange={handleFileInputChange}
      />
      {children || (
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="mt-2 text-sm font-medium text-gray-700">
            Drag & drop files here, or click to select
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {acceptedFileTypes[0] === '*' 
              ? 'All file types supported' 
              : `Supports ${acceptedFileTypes.join(', ')}`}
            {` (max ${maxFiles} files, up to ${maxSizeInMB}MB each)`}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileDropzone;
