
import React from 'react';
import Layout from '../components/Layout';
import PdfToolTemplate from '../components/PdfToolTemplate';
import { MergePdfIcon } from '../components/ToolIcons';
import { mergePdfs } from '../services/pdfService';

const MergePdf = () => {
  const handleProcessFiles = async (files: File[]): Promise<Blob> => {
    return await mergePdfs(files);
  };

  return (
    <Layout>
      <PdfToolTemplate
        title="Merge PDF"
        description="Combine multiple PDF files into a single document, in the order you want."
        icon={<MergePdfIcon />}
        processFiles={handleProcessFiles}
        acceptedFileTypes={['.pdf']}
        maxFiles={20}
      />
    </Layout>
  );
};

export default MergePdf;
