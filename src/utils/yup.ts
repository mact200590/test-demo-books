import * as Yup from "yup";
export const createBookMarkSchema = Yup.object().shape({
      resourceId: Yup.string()
      .label("Resource")
      .required("The field is required")
      .min(4, "At least four characters"),
      abstract: Yup.string()
      .label("Abstract")
      .required("The field is required")
      .min(4, "At least four characters"),
      path: Yup.string()
      .label("Path")
      .required("The field is required")
      .min(4, "At least four characters"),
  });

  

  