import * as yup from 'yup';

export const developerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  experience: yup.number().integer().required(),
  specialization: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
