import { createContext, useContext, useState } from "react";

type InputContextType = {
  message: string;
  setMessage: (value: string) => void;
};

const InputContext =
  createContext<InputContextType | null>(null);

export function InputProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState("");

  return (
    <InputContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error(
      "useInput must be used inside InputProvider"
    );
  }

  return context;
}