
import React from 'react';
import { Card } from "@/components/ui/card";

// Classic template
const ClassicTemplate = ({ data }) => {
  return (
    <Card className="p-8 max-w-[800px] mx-auto bg-white text-black">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center flex-wrap gap-x-4 text-sm mt-1">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
        <div className="flex justify-center flex-wrap gap-x-4 text-sm mt-1">
          {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
        </div>
      </div>

      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">SUMMARY</h2>
          <p className="text-sm">{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">EXPERIENCE</h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="text-right">
                    {exp.location && <div>{exp.location}</div>}
                    <div>{exp.startDate} - {exp.endDate || 'Present'}</div>
                  </div>
                </div>
                <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">EDUCATION</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</h3>
                    <h4>{edu.school}</h4>
                  </div>
                  <div className="text-right">
                    {edu.location && <div>{edu.location}</div>}
                    <div>{edu.startDate} - {edu.endDate || 'Present'}</div>
                  </div>
                </div>
                {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-x-2 text-sm">
            {data.skills.join(' • ')}
          </div>
        </section>
      )}
    </Card>
  );
};

// Modern template
const ModernTemplate = ({ data }) => {
  return (
    <Card className="p-0 max-w-[800px] mx-auto overflow-hidden">
      <div className="bg-primary text-white p-8">
        <h1 className="text-2xl font-bold">{data.personalInfo.fullName}</h1>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            {data.personalInfo.email && <div>Email: {data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div>Phone: {data.personalInfo.phone}</div>}
          </div>
          <div>
            {data.personalInfo.location && <div>Location: {data.personalInfo.location}</div>}
            {data.personalInfo.website && <div>Website: {data.personalInfo.website}</div>}
            {data.personalInfo.linkedin && <div>LinkedIn: {data.personalInfo.linkedin}</div>}
          </div>
        </div>
      </div>

      <div className="p-8">
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-primary mb-2">PROFESSIONAL SUMMARY</h2>
            <p className="text-sm">{data.summary}</p>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            {data.experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-semibold text-primary mb-3">EXPERIENCE</h2>
                <div className="space-y-4">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                      <h3 className="font-semibold">{exp.position}</h3>
                      <h4 className="text-sm">{exp.company}</h4>
                      <div className="text-xs text-gray-500">
                        {exp.startDate} - {exp.endDate || 'Present'} | {exp.location}
                      </div>
                      <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {data.education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-semibold text-primary mb-3">EDUCATION</h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                      <h3 className="font-semibold">{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</h3>
                      <h4 className="text-sm">{edu.school}</h4>
                      <div className="text-xs text-gray-500">
                        {edu.startDate} - {edu.endDate || 'Present'} | {edu.location}
                      </div>
                      {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-primary mb-3">SKILLS</h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Technical template
const TechnicalTemplate = ({ data }) => {
  return (
    <Card className="p-8 max-w-[800px] mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{data.personalInfo.fullName}</h1>
          {data.summary && <p className="text-sm mt-2">{data.summary}</p>}
        </div>
        <div className="bg-gray-100 p-4 rounded text-sm">
          <div className="space-y-1">
            {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
            {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
            {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
            {data.personalInfo.linkedin && <div>{data.personalInfo.linkedin}</div>}
          </div>
          
          {data.skills && data.skills.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold mb-2">TECHNICAL SKILLS</h2>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-6">
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold bg-gray-100 p-2 mb-3">EXPERIENCE</h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                    <div>
                      <h3 className="font-semibold">{exp.position}</h3>
                      <h4>{exp.company} {exp.location && `| ${exp.location}`}</h4>
                    </div>
                    <div className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </div>
                  </div>
                  <p className="text-sm mt-2 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.education.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold bg-gray-100 p-2 mb-3">EDUCATION</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="font-semibold">{edu.school}</h3>
                    <h4>{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</h4>
                    {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
                  </div>
                  <div className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Card>
  );
};

const ResumePreview = ({ data, templateId }) => {
  switch (templateId) {
    case 'modern':
      return <ModernTemplate data={data} />;
    case 'technical':
      return <TechnicalTemplate data={data} />;
    case 'classic':
    default:
      return <ClassicTemplate data={data} />;
  }
};

export default ResumePreview;
