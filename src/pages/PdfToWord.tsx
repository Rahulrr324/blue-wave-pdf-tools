
import React from 'react';
import Layout from '../components/Layout';
import PdfToolTemplate from '../components/PdfToolTemplate';
import { PdfToWordIcon } from '../components/ToolIcons';
import { pdfToWord } from '../services/pdfService';

const PdfToWord = () => {
  const handleProcessFiles = async (files: File[]): Promise<Blob> => {
    if (files.length === 0) {
      throw new Error("No files selected");
    }
    return await pdfToWord(files[0]);
  };

  return (
    <Layout>
      <PdfToolTemplate
        title="PDF to Word"
        description="Convert PDF documents to editable Microsoft Word files."
        icon={<PdfToWordIcon />}
        processFiles={handleProcessFiles}
        acceptedFileTypes={['.pdf']}
        maxFiles={1}
      />
    </Layout>
  );
};

export default PdfToWord;
