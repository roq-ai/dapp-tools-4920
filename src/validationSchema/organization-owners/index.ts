import * as yup from 'yup';

export const organizationOwnerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  business_name: yup.string().required(),
  address: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
