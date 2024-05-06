import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type FormValidity = {
  isFormValid: boolean;
  handleInvalidField: (id: string) => void;
  handleValidField: (id: string) => void;
  clearAllErrors: () => void;
};

const FormValidityContext = createContext<FormValidity>({
  isFormValid: true,
  handleInvalidField: () => undefined,
  handleValidField: () => undefined,
  clearAllErrors: () => undefined,
});

export default function useFormValidity() {
  return useContext(FormValidityContext);
}

export function FormValidityProvider({ children }: PropsWithChildren) {
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const invalidFieldIds = useRef<Set<string>>(new Set());

  const handleInvalidField = useCallback((id: string) => {
    invalidFieldIds.current.add(id);
    setIsFormValid(false);
  }, []);

  const handleValidField = useCallback((id: string) => {
    invalidFieldIds.current.delete(id);
    setIsFormValid(!invalidFieldIds.current.size);
  }, []);

  const clearAllErrors = useCallback(() => {
    invalidFieldIds.current.clear();
    setIsFormValid(true);
  }, []);

  return (
    <FormValidityContext.Provider
      value={{
        isFormValid,
        handleInvalidField,
        handleValidField,
        clearAllErrors,
      }}
    >
      {children}
    </FormValidityContext.Provider>
  );
}
