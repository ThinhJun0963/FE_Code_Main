export interface FormProperties {
  callbacks: () => void;
}

export interface ChangePasswordProperties extends FormProperties {
  username: string;
}