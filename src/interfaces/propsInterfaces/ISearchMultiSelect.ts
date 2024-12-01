import { ResumeFormValues } from "../ResumeFormValues.ts";

export interface ISearchMultiSelect {
  optionsArray: string[];
  placeholder: string;
  buttonsArray: string[];
  name: keyof ResumeFormValues;
}
