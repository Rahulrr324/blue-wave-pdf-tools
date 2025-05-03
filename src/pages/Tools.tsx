
import React from 'react';
import Layout from '../components/Layout';
import ToolCard from '../components/ToolCard';

// Import all tool icons
import {
  MergePdfIcon,
  CompressPdfIcon,
  ConvertToPdfIcon,
  PdfToWordIcon,
  SplitPdfIcon,
  ProtectPdfIcon,
  UnlockPdfIcon,
  RotatePdfIcon,
  EditPdfIcon,
  ReorderPagesIcon,
  AddPageNumbersIcon,
  AddWatermarkIcon,
  PdfToImageIcon,
  ImageToPdfIcon,
  PdfMetadataIcon
} from '../components/ToolIcons';

const Tools = () => {
  const allTools = [
    {
      title: 'Merge PDF',
      description: 'Combine multiple PDFs into one document',
      icon: <MergePdfIcon />,
      to: '/merge-pdf',
      buttonText: 'Merge',
      category: 'Basic'
    },
    {
      title: 'Compress PDF',
      description: 'Reduce PDF file size without losing quality',
      icon: <CompressPdfIcon />,
      to: '/compress-pdf',
      buttonText: 'Compress',
      category: 'Basic'
    },
    {
      title: 'Convert to PDF',
      description: 'Convert Word, Excel, PPT or images to PDF',
      icon: <ConvertToPdfIcon />,
      to: '/convert-to-pdf',
      buttonText: 'Convert',
      category: 'Convert'
    },
    {
      title: 'PDF to Word',
      description: 'Convert PDF documents to editable Word files',
      icon: <PdfToWordIcon />,
      to: '/pdf-to-word',
      buttonText: 'Convert',
      category: 'Convert'
    },
    {
      title: 'Split PDF',
      description: 'Extract pages or split PDF into multiple files',
      icon: <SplitPdfIcon />,
      to: '/split-pdf',
      buttonText: 'Split',
      category: 'Basic'
    },
    {
      title: 'Protect PDF',
      description: 'Add password protection to your PDF files',
      icon: <ProtectPdfIcon />,
      to: '/protect-pdf',
      buttonText: 'Protect',
      category: 'Security'
    },
    {
      title: 'Unlock PDF',
      description: 'Remove password protection from PDF files',
      icon: <UnlockPdfIcon />,
      to: '/unlock-pdf',
      buttonText: 'Unlock',
      category: 'Security'
    },
    {
      title: 'Rotate PDF',
      description: 'Rotate PDF pages to the correct orientation',
      icon: <RotatePdfIcon />,
      to: '/rotate-pdf',
      buttonText: 'Rotate',
      category: 'Edit'
    },
    {
      title: 'Edit PDF',
      description: 'Add text, images and annotations to PDF files',
      icon: <EditPdfIcon />,
      to: '/edit-pdf',
      buttonText: 'Edit',
      category: 'Edit'
    },
    {
      title: 'Reorder Pages',
      description: 'Rearrange the order of pages in PDF files',
      icon: <ReorderPagesIcon />,
      to: '/reorder-pages',
      buttonText: 'Reorder',
      category: 'Edit'
    },
    {
      title: 'Add Page Numbers',
      description: 'Add customizable page numbers to PDF documents',
      icon: <AddPageNumbersIcon />,
      to: '/add-page-numbers',
      buttonText: 'Number',
      category: 'Edit'
    },
    {
      title: 'Add Watermark',
      description: 'Add text or image watermarks to PDF files',
      icon: <AddWatermarkIcon />,
      to: '/add-watermark',
      buttonText: 'Watermark',
      category: 'Edit'
    },
    {
      title: 'PDF to Image',
      description: 'Convert PDF pages to JPG, PNG or TIFF images',
      icon: <PdfToImageIcon />,
      to: '/pdf-to-image',
      buttonText: 'Convert',
      category: 'Convert'
    },
    {
      title: 'Image to PDF',
      description: 'Convert JPG, PNG or TIFF images to PDF',
      icon: <ImageToPdfIcon />,
      to: '/image-to-pdf',
      buttonText: 'Convert',
      category: 'Convert'
    },
    {
      title: 'PDF Metadata',
      description: 'View and edit PDF document properties',
      icon: <PdfMetadataIcon />,
      to: '/pdf-metadata',
      buttonText: 'Edit',
      category: 'Advanced'
    }
  ];

  const categories = ['All', 'Basic', 'Convert', 'Edit', 'Security', 'Advanced'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredTools = activeCategory === 'All'
    ? allTools
    : allTools.filter(tool => tool.category === activeCategory);

  return (
    <Layout>
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All PDF Tools</h1>
            <p className="text-lg text-gray-700">
              Our complete collection of PDF tools to help you work more efficiently with your documents.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category 
                    ? 'bg-primary-100 text-primary-800 border border-primary-200' 
                    : 'bg-gray-100 text-gray-700 border border-transparent hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                to={tool.to}
                buttonText={tool.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
