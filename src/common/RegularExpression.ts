const RegularExpressions = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*\d)(?=.*[A-Z])[\s\S]{8,}$/,
  // * Text Without Numbers
  TEXT_LENGTH_RANGE: (minLength: number, maxLength?: number) =>
    new RegExp(`^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{${minLength},${maxLength}}$`)
  // new RegExp(`^[a-zA-Z ]{${minLength},${maxLength}}$`)
};


export { RegularExpressions };