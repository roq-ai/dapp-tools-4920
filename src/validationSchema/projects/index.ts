import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  deadline: yup.date().nullable(),
  team_id: yup.string().nullable().required(),
});
