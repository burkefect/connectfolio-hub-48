
export type FormData = {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
  };
  summary: string;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate: string;
    location?: string;
    description?: string;
  }>;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location?: string;
    description: string;
  }>;
  skills: Array<string>;
  templateId: string;
};
