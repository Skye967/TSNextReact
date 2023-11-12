
export interface Validatable {
  value: string;
  error?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export function validate(input: Validatable): string {
  if (input.required && input.value.length < 1) {
    return (input.error = "This field is required!");
  }
  if (input.minLength && input.minLength > input.value.length) {
    return (input.error = `This field should is a minumum of ${input.minLength} characters long!`);
  }
  if (input.maxLength && input.maxLength < input.value.length) {
    input.error = `This field should be a maximum of ${input.maxLength} characters long!`;
  }
  return "";
}
