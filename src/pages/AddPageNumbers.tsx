
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PdfToolTemplate from '../components/PdfToolTemplate';
import { addPageNumbers } from '../services/pdfService';
import { Select } from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Create a custom icon for page numbering
const AddPageNumbersIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  );
};

// Form schema
const pageNumbersSchema = z.object({
  position: z.string().min(1, "Please select a position"),
  startAt: z.coerce.number().int().min(1, "Must start at 1 or higher"),
});

type PageNumbersFormValues = z.infer<typeof pageNumbersSchema>;

const AddPageNumbers = () => {
  const [pageNumbersOptions, setPageNumbersOptions] = useState({
    position: "bottom-right",
    startAt: 1,
  });

  const form = useForm<PageNumbersFormValues>({
    resolver: zodResolver(pageNumbersSchema),
    defaultValues: {
      position: "bottom-right",
      startAt: 1,
    },
  });

  const handleProcessFiles = async (files: File[]): Promise<Blob> => {
    if (files.length === 0) {
      throw new Error("No files selected");
    }
    return await addPageNumbers(files[0], {
      position: pageNumbersOptions.position,
      startAt: pageNumbersOptions.startAt,
    });
  };

  // Additional component to render inside the tool template for page number options
  const PageNumbersOptions = () => {
    return (
      <div className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Page Numbering Options</h3>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setPageNumbersOptions(prev => ({...prev, position: e.target.value}));
                      }}
                    >
                      <option value="top-left">Top Left</option>
                      <option value="top-center">Top Center</option>
                      <option value="top-right">Top Right</option>
                      <option value="bottom-left">Bottom Left</option>
                      <option value="bottom-center">Bottom Center</option>
                      <option value="bottom-right">Bottom Right</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="startAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start numbering from</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      {...field} 
                      onChange={(e) => {
                        field.onChange(e);
                        setPageNumbersOptions(prev => ({...prev, startAt: parseInt(e.target.value) || 1}));
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </div>
    );
  };

  return (
    <Layout>
      <PdfToolTemplate
        title="Add Page Numbers"
        description="Add customizable page numbers to your PDF documents."
        icon={<AddPageNumbersIcon />}
        processFiles={handleProcessFiles}
        acceptedFileTypes={['.pdf']}
        maxFiles={1}
      >
        <PageNumbersOptions />
      </PdfToolTemplate>
    </Layout>
  );
};

export default AddPageNumbers;
