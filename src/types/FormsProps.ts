import { InputProps } from "./inputProps";

export interface IFormsProps {
    fields: InputProps[];
    onSubmit: (formData: { [key: string]: string }) => void;
    schemaValidation: Zod.AnyZodObject
  }