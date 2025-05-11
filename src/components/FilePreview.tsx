
import React from 'react';

interface FilePreviewProps {
  file: File;
  onRemove: (file: File) => void;
  previewUrl?: string;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, onRemove, previewUrl }) => {
  // Convert file size to human-readable format
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Generate preview for PDF files
  const isPdf = file.type === 'application/pdf';
  
  // Get file extension
  const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
  
  // Choose icon based on file type
  const renderFileIcon = () => {
    if (isPdf && previewUrl) {
      return <img src={previewUrl} alt={file.name} className="w-full h-full object-cover rounded" />;
    }
    
    // Different icons for different file types
    switch (fileExt) {
      case 'doc':
      case 'docx':
        return (
          <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18H17V16H7V18Z" fill="currentColor" />
            <path d="M17 14H7V12H17V14Z" fill="currentColor" />
            <path d="M7 10H11V8H7V10Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" />
          </svg>
        );
        
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'bmp':
      case 'tiff':
        return (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.58579L15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929L22 16.5858V6C22 5.44772 21.5523 5 21 5ZM21 19H10.4142L16.7071 12.7071C16.8946 12.5196 17.2067 12.5196 17.3942 12.7071L22 17.3129V18C22 18.5523 21.5523 19 21 19Z" fill="currentColor" />
          </svg>
        );
        
      case 'pdf':
        return (
          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18H17V16H7V18Z" fill="currentColor" />
            <path d="M17 14H7V12H17V14Z" fill="currentColor" />
            <path d="M7 10H11V8H7V10Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" />
          </svg>
        );
        
      default:
        return (
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18H17V16H7V18Z" fill="currentColor" />
            <path d="M17 14H7V12H17V14Z" fill="currentColor" />
            <path d="M7 10H11V8H7V10Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded bg-gray-50 mb-2 hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <div className="w-10 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center mr-3 rounded">
          {renderFileIcon()}
        </div>

        <div className="flex-grow min-w-0">
          <div className="text-sm font-medium text-gray-800 truncate">{file.name}</div>
          <div className="text-xs text-gray-500">{formatFileSize(file.size)}</div>
        </div>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file);
        }}
        className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded hover:bg-gray-200"
        aria-label="Remove file"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default FilePreview;
