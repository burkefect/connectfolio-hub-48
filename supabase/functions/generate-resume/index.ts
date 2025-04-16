
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import pdfMake from "https://esm.sh/pdfmake@0.2.7";
import { TDocumentDefinitions } from "https://esm.sh/v135/pdfmake@0.2.7/interfaces";
import JSZip from "https://esm.sh/jszip@3.10.1";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://dswvigrhjjjlhecxhayu.supabase.co';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Function invoked with method:', req.method);
    let body;
    try {
      body = await req.json();
      console.log('Request body parsed successfully');
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { status: 400, headers: corsHeaders }
      );
    }
    
    const { resumeData, format, templateId } = body;
    
    // Validate input and log
    console.log('Received parameters:', { 
      hasResumeData: !!resumeData, 
      format, 
      templateId,
      resumeDataKeys: resumeData ? Object.keys(resumeData) : 'none'
    });
    
    if (!resumeData || !format || !templateId) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: resumeData, format, templateId' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate format is either 'pdf' or 'docx'
    if (format !== 'pdf' && format !== 'docx') {
      return new Response(
        JSON.stringify({ error: 'Format must be either "pdf" or "docx"' }),
        { status: 400, headers: corsHeaders }
      );
    }

    let fileBuffer: Uint8Array;
    let contentType: string;
    let filename: string;

    console.log(`Generating ${format} document with template: ${templateId}`);

    try {
      // Generate the appropriate file format
      if (format === 'pdf') {
        const pdfDoc = generatePdfDocument(resumeData, templateId);
        fileBuffer = await generatePdfBuffer(pdfDoc);
        contentType = 'application/pdf';
        filename = `resume_${Date.now()}.pdf`;
        console.log('PDF document generated successfully');
      } else {
        // Generate Word document
        fileBuffer = await generateWordDocument(resumeData, templateId);
        contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        filename = `resume_${Date.now()}.docx`;
        console.log('Word document generated successfully');
      }

      console.log(`File generated successfully: ${filename}, size: ${fileBuffer.length} bytes`);
      
      // Create response with file data
      return new Response(
        JSON.stringify({ 
          success: true,
          file: Array.from(fileBuffer), // Convert to array for JSON transmission
          filename,
          contentType
        }),
        { 
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          }
        }
      );
    } catch (generationError) {
      console.error(`Error generating ${format} document:`, generationError);
      return new Response(
        JSON.stringify({ 
          error: `Failed to generate ${format} document: ${generationError.message || 'Unknown error'}` 
        }),
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error('Unhandled error in generate-resume function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate resume file', 
        details: error.message || 'Unknown error',
        stack: error.stack || 'No stack trace available'
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});

// Function to generate PDF document definition based on template
function generatePdfDocument(data: any, templateId: string): TDocumentDefinitions {
  console.log('Generating PDF document with template:', templateId);
  
  // Base styles for all templates
  const baseStyles = {
    header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
    subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
    normal: { fontSize: 12, margin: [0, 5, 0, 5] },
    tableHeader: { bold: true, fontSize: 12, color: 'black' }
  };

  // Common document structure
  const docDefinition: TDocumentDefinitions = {
    content: [
      { text: data.personalInfo.fullName, style: 'header', alignment: 'center' },
      {
        columns: [
          { 
            text: [
              data.personalInfo.email ? `Email: ${data.personalInfo.email}` : '',
              data.personalInfo.phone ? `\nPhone: ${data.personalInfo.phone}` : '',
            ],
            width: '*'
          },
          { 
            text: [
              data.personalInfo.location ? `Location: ${data.personalInfo.location}` : '',
              data.personalInfo.website ? `\nWebsite: ${data.personalInfo.website}` : '',
              data.personalInfo.linkedin ? `\nLinkedIn: ${data.personalInfo.linkedin}` : '',
            ],
            width: '*',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 20]
      },
    ],
    styles: baseStyles,
    defaultStyle: { font: 'Roboto' }
  };

  // Add Summary section if available
  if (data.summary && data.summary.trim() !== '') {
    docDefinition.content.push(
      { text: 'SUMMARY', style: 'subheader' },
      { text: data.summary, margin: [0, 0, 0, 15] }
    );
  }

  // Add Experience section if available
  if (data.experience && data.experience.length > 0) {
    docDefinition.content.push({ text: 'EXPERIENCE', style: 'subheader' });
    
    data.experience.forEach((exp: any) => {
      docDefinition.content.push(
        {
          columns: [
            { text: exp.position, bold: true, width: '*' },
            { text: `${exp.startDate} - ${exp.endDate || 'Present'}`, width: 'auto', alignment: 'right' }
          ]
        },
        {
          columns: [
            { text: exp.company, italics: true, width: '*' },
            { text: exp.location, width: 'auto', alignment: 'right', italics: true }
          ],
          margin: [0, 0, 0, 5]
        },
        { text: exp.description, margin: [0, 0, 0, 15] }
      );
    });
  }

  // Add Education section if available
  if (data.education && data.education.length > 0) {
    docDefinition.content.push({ text: 'EDUCATION', style: 'subheader' });
    
    data.education.forEach((edu: any) => {
      const degreeField = edu.fieldOfStudy 
        ? `${edu.degree}, ${edu.fieldOfStudy}`
        : edu.degree;
        
      docDefinition.content.push(
        {
          columns: [
            { text: degreeField, bold: true, width: '*' },
            { text: `${edu.startDate} - ${edu.endDate || 'Present'}`, width: 'auto', alignment: 'right' }
          ]
        },
        {
          columns: [
            { text: edu.school, italics: true, width: '*' },
            { text: edu.location, width: 'auto', alignment: 'right', italics: true }
          ],
          margin: [0, 0, 0, 5]
        }
      );
      
      if (edu.description) {
        docDefinition.content.push({ text: edu.description, margin: [0, 0, 0, 15] });
      } else {
        docDefinition.content.push({ text: '', margin: [0, 0, 0, 15] });
      }
    });
  }

  // Add Skills section if available
  if (data.skills && data.skills.length > 0) {
    docDefinition.content.push(
      { text: 'SKILLS', style: 'subheader' },
      { text: data.skills.join(' • '), margin: [0, 0, 0, 15] }
    );
  }

  // Apply template-specific styling
  switch (templateId) {
    case 'modern':
      // Modern template has colored headers and different spacing
      docDefinition.styles = {
        ...baseStyles,
        header: { ...baseStyles.header, color: '#2563eb' },
        subheader: { ...baseStyles.subheader, color: '#2563eb', decoration: 'underline' }
      };
      break;
      
    case 'technical':
      // Technical template has different layout with skills in sidebar
      // This is simplified for the edge function
      docDefinition.styles = {
        ...baseStyles,
        header: { ...baseStyles.header, color: '#333333' },
        subheader: { ...baseStyles.subheader, backgroundColor: '#f3f4f6', padding: [5, 3] }
      };
      break;
      
    case 'classic':
    default:
      // Classic template remains as defined in baseStyles
      break;
  }

  return docDefinition;
}

// Generate PDF buffer from document definition
async function generatePdfBuffer(docDefinition: TDocumentDefinitions): Promise<Uint8Array> {
  console.log('Generating PDF buffer from document definition');
  return new Promise((resolve, reject) => {
    try {
      // Create the PDF
      const pdfDoc = pdfMake.createPdf(docDefinition);
      
      // Get buffer
      pdfDoc.getBuffer((buffer: Uint8Array) => {
        console.log('PDF buffer generated successfully, size:', buffer.length);
        resolve(buffer);
      });
    } catch (error) {
      console.error('Error generating PDF buffer:', error);
      reject(error);
    }
  });
}

// Generate Word document from resume data
async function generateWordDocument(data: any, templateId: string): Promise<Uint8Array> {
  console.log('Generating Word document with template:', templateId);
  const zip = new JSZip();
  
  // Create simple XML for Word document
  // This is a simplified version - a full implementation would be more complex
  let documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?mso-application progid="Word.Document"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:pPr><w:jc w:val="center"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="36"/></w:rPr><w:t>${data.personalInfo.fullName}</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/></w:pPr>
      <w:r>
        <w:t>${[
          data.personalInfo.email,
          data.personalInfo.phone,
          data.personalInfo.location,
          data.personalInfo.website,
          data.personalInfo.linkedin
        ].filter(Boolean).join(' | ')}</w:t>
      </w:r>
    </w:p>`;

  // Add Summary section
  if (data.summary && data.summary.trim() !== '') {
    documentXml += `
    <w:p>
      <w:pPr><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="1" w:color="auto"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/></w:rPr><w:t>SUMMARY</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>${data.summary}</w:t></w:r>
    </w:p>`;
  }

  // Add Experience section
  if (data.experience && data.experience.length > 0) {
    documentXml += `
    <w:p>
      <w:pPr><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="1" w:color="auto"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/></w:rPr><w:t>EXPERIENCE</w:t></w:r>
    </w:p>`;

    data.experience.forEach((exp: any) => {
      documentXml += `
    <w:p>
      <w:r><w:rPr><w:b/></w:rPr><w:t>${exp.position}</w:t></w:r>
      <w:r><w:t xml:space="preserve"> - ${exp.company}, ${exp.location}</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:rPr><w:i/></w:rPr><w:t>${exp.startDate} - ${exp.endDate || 'Present'}</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>${exp.description}</w:t></w:r>
    </w:p>`;
    });
  }

  // Add Education section
  if (data.education && data.education.length > 0) {
    documentXml += `
    <w:p>
      <w:pPr><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="1" w:color="auto"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/></w:rPr><w:t>EDUCATION</w:t></w:r>
    </w:p>`;

    data.education.forEach((edu: any) => {
      const degreeField = edu.fieldOfStudy 
        ? `${edu.degree}, ${edu.fieldOfStudy}`
        : edu.degree;
        
      documentXml += `
    <w:p>
      <w:r><w:rPr><w:b/></w:rPr><w:t>${degreeField}</w:t></w:r>
      <w:r><w:t xml:space="preserve"> - ${edu.school}, ${edu.location}</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:rPr><w:i/></w:rPr><w:t>${edu.startDate} - ${edu.endDate || 'Present'}</w:t></w:r>
    </w:p>`;
      
      if (edu.description) {
        documentXml += `
    <w:p>
      <w:r><w:t>${edu.description}</w:t></w:r>
    </w:p>`;
      }
    });
  }

  // Add Skills section
  if (data.skills && data.skills.length > 0) {
    documentXml += `
    <w:p>
      <w:pPr><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="1" w:color="auto"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/></w:rPr><w:t>SKILLS</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>${data.skills.join(' • ')}</w:t></w:r>
    </w:p>`;
  }

  // Close the XML document
  documentXml += `
  </w:body>
</w:document>`;

  // Add document.xml to the ZIP file
  zip.file("word/document.xml", documentXml);

  // Add minimal required files for a valid DOCX
  zip.file("_rels/.rels", 
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
      <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
    </Relationships>`);

  zip.file("[Content_Types].xml", 
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
      <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
      <Default Extension="xml" ContentType="application/xml"/>
      <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
    </Types>`);

  zip.file("word/_rels/document.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    </Relationships>`);

  try {
    // Generate ZIP file
    console.log('Generating ZIP file for Word document');
    const zipContent = await zip.generateAsync({ type: "uint8array" });
    console.log('Word document ZIP generated successfully, size:', zipContent.length);
    return zipContent;
  } catch (error) {
    console.error('Error generating Word document ZIP:', error);
    throw error;
  }
}
