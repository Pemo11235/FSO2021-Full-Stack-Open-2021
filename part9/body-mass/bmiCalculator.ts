const cmToMeters = (cm: number): number => cm / 100

type BmiResults =
  | 'Underweight (Severe thinness)'
  | 'Underweight (Moderate thinness)'
  | 'Underweight (Mild thinness)'
  | 'Normal range'
  | 'Overweight (Pre-obese)'
  | 'Obese (Class I)'
  | 'Obese (Class II)'
  | 'Obese (Class III)'
  | 'Error !'

const calculateBmi = (height: number, weight: number): BmiResults => {
  const heightInMeters = cmToMeters(height)

  const bmi: number = weight / heightInMeters ** 2

  if (bmi < 16.0) return 'Underweight (Severe thinness)'
  if (bmi >= 16.0 && bmi <= 16.9) return 'Underweight (Moderate thinness)'
  if (bmi >= 17.0 && bmi <= 18.4) return 'Underweight (Mild thinness)'
  if (bmi >= 18.5 && bmi <= 24.9) return 'Normal range'
  if (bmi >= 25.0 && bmi <= 29.9) return 'Overweight (Pre-obese)'
  if (bmi >= 30.0 && bmi <= 34.9) return 'Obese (Class I)'
  if (bmi >= 35.0 && bmi <= 39.9) return 'Obese (Class II)'
  if (bmi >= 40.0) return 'Obese (Class III)'

  return 'Error !'
}

console.log(calculateBmi(180, 74))
