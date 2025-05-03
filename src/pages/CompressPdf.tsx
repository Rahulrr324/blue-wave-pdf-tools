
import React from 'react';
import Layout from '../components/Layout';
import PdfToolTemplate from '../components/PdfToolTemplate';
import { CompressPdfIcon } from '../components/ToolIcons';
import { compressPdf } from '../services/pdfService';

const CompressPdf = () => {
  const handleProcessFiles = async (files: File[]): Promise<Blob> => {
    if (files.length === 0) {
      throw new Error("No files selected");
    }
    return await compressPdf(files[0]);
  };

  return (
    <Layout>
      <PdfToolTemplate
        title="Compress PDF"
        description="Reduce the size of your PDF files without losing quality."
        icon={<CompressPdfIcon />}
        processFiles={handleProcessFiles}
        acceptedFileTypes={['.pdf']}
        maxFiles={1}
      />
    </Layout>
  );
};

export default CompressPdf;
