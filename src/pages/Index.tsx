
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Faqs from '../components/Faqs';
import ToolCard from '../components/ToolCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Import tool icons
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

const Index = () => {
  const popularTools = [
    {
      title: 'Merge PDF',
      description: 'Combine multiple PDFs into one document',
      icon: <MergePdfIcon />,
      to: '/merge-pdf',
      buttonText: 'Merge'
    },
    {
      title: 'Compress PDF',
      description: 'Reduce PDF file size without losing quality',
      icon: <CompressPdfIcon />,
      to: '/compress-pdf',
      buttonText: 'Compress'
    },
    {
      title: 'Convert to PDF',
      description: 'Convert Word, Excel, PPT or images to PDF',
      icon: <ConvertToPdfIcon />,
      to: '/convert-to-pdf',
      buttonText: 'Convert'
    },
    {
      title: 'PDF to Word',
      description: 'Convert PDF documents to editable Word files',
      icon: <PdfToWordIcon />,
      to: '/pdf-to-word',
      buttonText: 'Convert'
    },
    {
      title: 'Split PDF',
      description: 'Extract pages or split PDF into multiple files',
      icon: <SplitPdfIcon />,
      to: '/split-pdf',
      buttonText: 'Split'
    },
    {
      title: 'Protect PDF',
      description: 'Add password protection to your PDF files',
      icon: <ProtectPdfIcon />,
      to: '/protect-pdf',
      buttonText: 'Protect'
    }
  ];

  const allTools = [
    ...popularTools,
    {
      title: 'Unlock PDF',
      description: 'Remove password protection from PDF files',
      icon: <UnlockPdfIcon />,
      to: '/unlock-pdf',
      buttonText: 'Unlock'
    },
    {
      title: 'Rotate PDF',
      description: 'Rotate PDF pages to the correct orientation',
      icon: <RotatePdfIcon />,
      to: '/rotate-pdf',
      buttonText: 'Rotate'
    },
    {
      title: 'Edit PDF',
      description: 'Add text, images and annotations to PDF files',
      icon: <EditPdfIcon />,
      to: '/edit-pdf',
      buttonText: 'Edit'
    },
    {
      title: 'Reorder Pages',
      description: 'Rearrange the order of pages in PDF files',
      icon: <ReorderPagesIcon />,
      to: '/reorder-pages',
      buttonText: 'Reorder'
    },
    {
      title: 'Add Page Numbers',
      description: 'Add customizable page numbers to PDF documents',
      icon: <AddPageNumbersIcon />,
      to: '/add-page-numbers',
      buttonText: 'Number'
    },
    {
      title: 'Add Watermark',
      description: 'Add text or image watermarks to PDF files',
      icon: <AddWatermarkIcon />,
      to: '/add-watermark',
      buttonText: 'Watermark'
    },
    {
      title: 'PDF to Image',
      description: 'Convert PDF pages to JPG, PNG or TIFF images',
      icon: <PdfToImageIcon />,
      to: '/pdf-to-image',
      buttonText: 'Convert'
    },
    {
      title: 'Image to PDF',
      description: 'Convert JPG, PNG or TIFF images to PDF',
      icon: <ImageToPdfIcon />,
      to: '/image-to-pdf',
      buttonText: 'Convert'
    },
    {
      title: 'PDF Metadata',
      description: 'View and edit PDF document properties',
      icon: <PdfMetadataIcon />,
      to: '/pdf-metadata',
      buttonText: 'Edit'
    }
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Popular Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Popular PDF Tools</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Our most frequently used tools to help you manage and manipulate your PDF files efficiently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => (
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
          <div className="text-center mt-10">
            <Link to="/tools">
              <Button variant="outline" size="lg">
                View All Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Features />
      <Faqs />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your PDF Workflow?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust All In One PDF Tool for their document needs.
          </p>
          <Link to="/tools">
            <Button size="lg" variant="secondary" className="bg-white text-primary-700 hover:bg-gray-100">
              Get Started — It's Free
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
