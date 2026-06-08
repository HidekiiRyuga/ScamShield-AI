import { createContext, useContext, useState } from "react";

type ScanContextType = {
  image: string | null;
  setImage: (value: string | null) => void;
};

const ScanContext = createContext<ScanContextType | null>(
  null
);

export function ScanProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [image, setImage] = useState<string | null>(
    null
  );

  return (
    <ScanContext.Provider
      value={{
        image,
        setImage,
      }}
    >
      {children}
    </ScanContext.Provider>
  );
}

export function useScan() {
  const context = useContext(ScanContext);

  if (!context) {
    throw new Error(
      "useScan must be used inside ScanProvider"
    );
  }

  return context;
}