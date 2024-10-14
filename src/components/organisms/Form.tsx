'use client';
import React, { useContext, useMemo, useState } from 'react';


interface IField {
  hasError?: boolean;
  errorText?: string;
  value?: any;
}

interface IFormContext {
  fields: Record<string, IField>;
  setField: (key: string, field: IField) => void;
  getField: (key: string) => IField;
}

interface IFormProps {
  children: React.ReactNode | React.ReactNode[];
}

const FormContext = React.createContext<IFormContext>({
  fields: {},
  setField() { },
  getField: () => ({} as IField)
});

const Form: React.FC<IFormProps> = ({ children }) => {
  const [fields, setFields] = useState<Record<string, IField>>({});

  const setField = (key: string, field: IField) => {
    setFields(prev => ({ ...prev, [key]: field }));
  };

  const getField = (key: string) => {
    return fields[key];
  };

  return (
    <FormContext.Provider value={{ fields, setField, getField }}>{children}</FormContext.Provider>
  );
};

function useForm() {
  const { fields } = useContext(FormContext);

  const fieldsArray = useMemo(() => {
    return Object.keys(fields).map((key) => {
      return ({ key, ...fields[key] });
    });
  }, [fields]);

  return { fields: fieldsArray };
}


export { useForm, Form, FormContext };
