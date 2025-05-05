
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

  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded bg-gray-50 mb-2">
      <div className="flex items-center">
        <div className="w-10 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center mr-3 rounded">
          {isPdf && previewUrl ? (
            <img src={previewUrl} alt={file.name} className="w-full h-full object-cover rounded" />
          ) : (
            <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18H17V16H7V18Z" fill="currentColor" />
              <path d="M17 14H7V12H17V14Z" fill="currentColor" />
              <path d="M7 10H11V8H7V10Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" />
            </svg>
          )}
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
        className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
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
