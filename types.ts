import { FormEventHandler } from "react";

export interface CategoryData {
  id: string;
  title: String;
  image: String;
  description: String;
}

export interface ProductData {
  id: string;
  name: String;
  images: String[];
  description: String;
  categoryId: String;
  shortDescription: String;
  currentPrice: String;
  initialPrice: Number;
  isPublished: Boolean;
  isFeatured: Boolean;
  slug: String;
  quantity: String;
}

export type SubmitHandler = FormEventHandler<HTMLFormElement>;

export type SetImageUrlFunction = (url: string) => void;

export interface SubmitData {}

export interface Router {
  push: (url: string) => void;
}

export interface FormHookReturn {
  register: any;
  handleSubmit: SubmitHandler;
  reset: () => void;
  formState: {
    errors: any;
  };
}

export interface AdminApiRequestFunction {
  setLoading2: (loading: boolean) => void;
  setLoading: (loading: boolean) => void;
  apiUrl: string;
  data: SubmitData;
  toastName: string;
  reset: () => void;
  method: string;
}

export interface SingleUploadImageProps {
  title: string;
  label: string;
  endpoint: string;
  imageUrl: string | undefined;
  setImageUrl: SetImageUrlFunction;
}

export interface TextInputsProps {}

export interface FormHeaderProps {
  title: string;
}
