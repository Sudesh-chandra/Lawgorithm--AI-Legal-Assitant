import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'date' | 'textarea' | 'select';
    options?: string[];
    required: boolean;
  }[];
  template: string;
}

const documentTemplates: DocumentTemplate[] = [
  {
    id: 'affidavit',
    title: 'General Affidavit',
    description: 'A general purpose affidavit for legal declarations.',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'age', label: 'Age', type: 'text', required: true },
      { name: 'address', label: 'Address', type: 'textarea', required: true },
      { name: 'declaration', label: 'Declaration Content', type: 'textarea', required: true },
      { name: 'date', label: 'Date', type: 'date', required: true },
    ],
    template: `
      <div class="affidavit">
        <div class="stamp">₹10</div>
        <h1>AFFIDAVIT</h1>
        <p>I, {{fullName}}, aged {{age}} years, residing at {{address}}, do hereby solemnly affirm and declare as follows:</p>
        <p>{{declaration}}</p>
        <p>I do hereby solemnly affirm that the above statements are true to the best of my knowledge, information and belief.</p>
        <div class="signature">
          <p>Date: {{date}}</p>
          <p>Signature: _____________________</p>
          <p>{{fullName}}</p>
        </div>
        <div class="verification">
          <p>Verified at _______________ on this {{date}} that the contents of the above affidavit are true and correct to the best of my knowledge and belief.</p>
          <p>Signature: _____________________</p>
        </div>
      </div>
    `,
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney',
    description: 'A document authorizing someone to act on your behalf.',
    fields: [
      { name: 'donorName', label: 'Donor Name (Your Name)', type: 'text', required: true },
      { name: 'donorAddress', label: 'Donor Address', type: 'textarea', required: true },
      { name: 'attorneyName', label: 'Attorney Name (Person you authorize)', type: 'text', required: true },
      { name: 'attorneyAddress', label: 'Attorney Address', type: 'textarea', required: true },
      { name: 'powers', label: 'Powers Granted', type: 'textarea', required: true },
      { name: 'date', label: 'Date', type: 'date', required: true },
    ],
    template: `
      <div class="power-of-attorney">
        <div class="stamp">₹10</div>
        <h1>POWER OF ATTORNEY</h1>
        <p>I, {{donorName}}, residing at {{donorAddress}}, do hereby appoint {{attorneyName}}, residing at {{attorneyAddress}}, as my true and lawful attorney to act for me and in my name, place and stead, and for my use and benefit with respect to the following:</p>
        <p>{{powers}}</p>
        <p>I hereby give and grant unto my said attorney full power and authority to do and perform all and every act and thing whatsoever requisite and necessary to be done in and about the premises, as fully to all intents and purposes as I might or could do if personally present, hereby ratifying and confirming all that my said attorney shall lawfully do or cause to be done by virtue hereof.</p>
        <div class="signature">
          <p>Date: {{date}}</p>
          <p>Signature: _____________________</p>
          <p>{{donorName}}</p>
        </div>
        <div class="witnesses">
          <p><strong>Witnesses:</strong></p>
          <p>1. Signature: _____________________</p>
          <p>   Name: _________________________</p>
          <p>   Address: _______________________</p>
          <p>2. Signature: _____________________</p>
          <p>   Name: _________________________</p>
          <p>   Address: _______________________</p>
        </div>
      </div>
    `,
  },
  {
    id: 'rent-agreement',
    title: 'Rent Agreement',
    description: 'A lease agreement between landlord and tenant.',
    fields: [
      { name: 'landlordName', label: 'Landlord Name', type: 'text', required: true },
      { name: 'landlordAddress', label: 'Landlord Address', type: 'textarea', required: true },
      { name: 'tenantName', label: 'Tenant Name', type: 'text', required: true },
      { name: 'tenantAddress', label: 'Tenant Address', type: 'textarea', required: true },
      { name: 'propertyAddress', label: 'Property Address', type: 'textarea', required: true },
      { name: 'rentAmount', label: 'Monthly Rent (₹)', type: 'text', required: true },
      { name: 'securityDeposit', label: 'Security Deposit (₹)', type: 'text', required: true },
      { name: 'leaseTerm', label: 'Lease Term (months)', type: 'text', required: true },
      { name: 'startDate', label: 'Start Date', type: 'date', required: true },
      { name: 'endDate', label: 'End Date', type: 'date', required: true },
    ],
    template: `
      <div class="rent-agreement">
        <div class="stamp">₹10</div>
        <h1>RENT AGREEMENT</h1>
        <p>This Rent Agreement is made on {{startDate}} between {{landlordName}}, residing at {{landlordAddress}}, hereinafter referred to as the "LANDLORD" and {{tenantName}}, residing at {{tenantAddress}}, hereinafter referred to as the "TENANT".</p>
        <h2>PROPERTY DETAILS</h2>
        <p>The LANDLORD agrees to let and the TENANT agrees to take the property situated at {{propertyAddress}}, hereinafter referred to as the "PREMISES".</p>
        <h2>TERM</h2>
        <p>The tenancy shall be for a period of {{leaseTerm}} months commencing on {{startDate}} and ending on {{endDate}}.</p>
        <h2>RENT</h2>
        <p>The TENANT shall pay to the LANDLORD a monthly rent of ₹{{rentAmount}} (Rupees {{rentAmount}} only) payable in advance on or before the 5th day of each month.</p>
        <h2>SECURITY DEPOSIT</h2>
        <p>The TENANT has paid the LANDLORD a sum of ₹{{securityDeposit}} (Rupees {{securityDeposit}} only) as security deposit, refundable at the time of vacating the PREMISES, subject to deductions for damages, if any.</p>
        <div class="signature">
          <p>IN WITNESS WHEREOF, the parties hereto have set their hands on the day and year first above written.</p>
          <div class="sign-block">
            <p>LANDLORD</p>
            <p>{{landlordName}}</p>
            <p>Signature: _____________________</p>
          </div>
          <div class="sign-block">
            <p>TENANT</p>
            <p>{{tenantName}}</p>
            <p>Signature: _____________________</p>
          </div>
        </div>
        <div class="witnesses">
          <p><strong>Witnesses:</strong></p>
          <p>1. Signature: _____________________</p>
          <p>   Name: _________________________</p>
          <p>2. Signature: _____________________</p>
          <p>   Name: _________________________</p>
        </div>
      </div>
    `,
  },
];

const DocumentForm: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [documentGenerated, setDocumentGenerated] = useState(false);
  const [documentPreview, setDocumentPreview] = useState('');

  const handleTemplateSelect = (templateId: string) => {
    const template = documentTemplates.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      setFormData({});
      setDocumentGenerated(false);
      setDocumentPreview('');
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const generateDocument = () => {
    if (!selectedTemplate) return;

    let documentHtml = selectedTemplate.template;

    // Replace template variables with form data
    Object.entries(formData).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      documentHtml = documentHtml.replace(regex, value);
    });

    setDocumentPreview(documentHtml);
    setDocumentGenerated(true);
  };

  const downloadPdf = () => {
    const element = document.getElementById('document-preview');
    if (!element) return;

    const opt = {
      margin: [15, 15, 15, 15],
      filename: `${selectedTemplate?.id || 'document'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="w-full rounded-lg border border-neutral-800 bg-neutral-900 shadow-lg">
      <div className="border-b border-neutral-800 p-4">
        <h2 className="text-xl font-semibold text-white">Document Generator</h2>
        <p className="text-sm text-neutral-400">Create legal documents with ₹10 stamp</p>
      </div>

      <div className="p-6">
        {!selectedTemplate ? (
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Select Document Type</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {documentTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer rounded-lg border border-neutral-800 bg-neutral-800/50 p-4 transition-colors hover:border-primary-600/50"
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-900/30 text-primary-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">{template.title}</h3>
                  <p className="text-sm text-neutral-400">{template.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {!documentGenerated ? (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{selectedTemplate.title}</h3>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="text-sm text-neutral-400 hover:text-white"
                  >
                    ← Back to templates
                  </button>
                </div>

                <div className="mb-6 space-y-4">
                  {selectedTemplate.fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="mb-1 block text-sm font-medium text-neutral-300"
                      >
                        {field.label}
                        {field.required && <span className="ml-1 text-error-500">*</span>}
                      </label>

                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          rows={3}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        >
                          <option value="">Select an option</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={generateDocument}
                  className="w-full rounded-md bg-primary-600 py-3 text-center font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Generate Document
                </motion.button>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">Document Preview</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setDocumentGenerated(false)}
                      className="text-sm text-neutral-400 hover:text-white"
                    >
                      ← Edit Document
                    </button>
                    <button
                      onClick={downloadPdf}
                      className="inline-flex items-center rounded-md bg-primary-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                    >
                      <Download className="mr-1 h-4 w-4" />
                      Download PDF
                    </button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border border-neutral-800 bg-white p-8 text-black">
                  <div
                    id="document-preview"
                    dangerouslySetInnerHTML={{ __html: documentPreview }}
                    className="document-preview"
                  />
                </div>

                <div className="mt-4 rounded-md bg-success-500/20 p-3">
                  <div className="flex items-center space-x-2 text-success-500">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Document generated successfully! You can download it as a PDF.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .document-preview {
          font-family: 'Times New Roman', Times, serif;
        }
        
        .document-preview h1 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        
        .document-preview h2 {
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        
        .document-preview p {
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .document-preview .signature {
          margin-top: 40px;
        }
        
        .document-preview .witnesses {
          margin-top: 30px;
        }
        
        .document-preview .stamp {
          position: absolute;
          top: 20px;
          right: 20px;
          border: 2px solid #000;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .document-preview .sign-block {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default DocumentForm;