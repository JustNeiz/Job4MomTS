import { ResumeFormValues } from "../ResumeFormValues.ts";

export interface ICheckBoxCustom {
  label: string;
  name?: string | keyof ResumeFormValues;
}
