export interface ResumeFormValues {
  firstName: string;
  lastName: string;
  photo: File | null;
  jobs: string[];
  phone: string;
  socialMedia: string[];
  country: string;
  city: string;
  salaryMin?: number;
  salaryMax?: number;
  workHours: number[];
  workExperience: Array<{
    jobTitle: string;
    companyName: string;
    industry: string;
    from: { month: string; year: number };
    to: { month: string; year: number };
  }>;
  skills: string[];
  englishLevel: string;
  education: string;
}
