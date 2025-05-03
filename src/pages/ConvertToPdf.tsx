
import React from 'react';
import Layout from '../components/Layout';
import PdfToolTemplate from '../components/PdfToolTemplate';
import { ConvertToPdfIcon } from '../components/ToolIcons';
import { convertToPdf } from '../services/pdfService';

const ConvertToPdf = () => {
  const handleProcessFiles = async (files: File[]): Promise<Blob> => {
    if (files.length === 0) {
      throw new Error("No files selected");
    }
    return await convertToPdf(files[0]);
  };

  return (
    <Layout>
      <PdfToolTemplate
        title="Convert to PDF"
        description="Convert Word, Excel, PowerPoint or image files to PDF format."
        icon={<ConvertToPdfIcon />}
        processFiles={handleProcessFiles}
        acceptedFileTypes={[
          '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', 
          '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'
        ]}
        maxFiles={1}
      />
    </Layout>
  );
};

export default ConvertToPdf;
