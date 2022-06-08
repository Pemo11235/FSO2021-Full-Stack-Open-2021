import { HealthCheckRating } from '../types'
import { ErrorMessage, Field, FieldProps, FormikProps } from 'formik'
import {
  Select,
  FormControl,
  MenuItem,
  TextField as TextFieldMUI,
  Typography,
} from '@material-ui/core'
import { InputLabel } from '@material-ui/core'

export type HealthCheckOption = {
  value: HealthCheckRating
  label: string
}

type SelectFieldProps = {
  name: string
  label: string
  options: HealthCheckOption[]
}

const FormikSelect = ({ field, ...props }: FieldProps) => (
  <Select {...field} {...props} />
)

export const SelectField = ({ name, label, options }: SelectFieldProps) => (
  <>
    <InputLabel>{label}</InputLabel>
    <Field
      fullWidth
      style={{ marginBottom: '0.5em' }}
      label={label}
      component={FormikSelect}
      name={name}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label || option.value}
        </MenuItem>
      ))}
    </Field>
  </>
)

interface TextProps extends FieldProps {
  label: string
  placeholder: string
}

export const TextField = ({ field, label, placeholder }: TextProps) => (
  <div style={{ marginBottom: '1em' }}>
    <TextFieldMUI
      fullWidth
      label={label}
      placeholder={placeholder}
      {...field}
    />
    <Typography variant='subtitle2' style={{ color: 'red' }}>
      <ErrorMessage name={field.name} />
    </Typography>
  </div>
)
