import * as Yup from "yup";
export const resumeValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  photo: Yup.mixed().nullable(),
  jobs: Yup.array().of(Yup.string()).min(1, "Select at least one job"),
  phone: Yup.string().required("Phone number is required"),
  socialMedia: Yup.array()
    .of(Yup.string().url("Must be a valid URL"))
    .optional(),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  salaryMin: Yup.number().optional(),
  salaryMax: Yup.number().optional(),
  workHours: Yup.array()
    .of(Yup.number())
    .min(1, "Select at least one option")
    .required(),
  workExperience: Yup.array().of(
    Yup.object({
      jobTitle: Yup.string().required("Job title is required"),
      companyName: Yup.string().required("Company name is required"),
      industry: Yup.string().required("Industry is required"),
      from: Yup.object({
        month: Yup.string().required(),
        year: Yup.number().required(),
      }),
      to: Yup.object({
        month: Yup.string().required(),
        year: Yup.number().required(),
      }),
    }),
  ),
  skills: Yup.array().of(Yup.string()).min(1, "Add at least one skill"),
  englishLevel: Yup.string().required("Select your English level"),
  education: Yup.string().optional(),
});
