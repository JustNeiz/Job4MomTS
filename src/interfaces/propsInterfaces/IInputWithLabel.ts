import React from "react";

export interface IInputWithLabel {
  name: string;
  type: string;
  placeholder: string;
  inputClassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
