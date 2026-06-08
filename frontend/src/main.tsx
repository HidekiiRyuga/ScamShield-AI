import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ScanProvider } from "./context/ScanContext";
import { AnalysisProvider } from "./context/AnalysisContext";
import { InputProvider } from './context/InputContext.tsx';

createRoot(document.getElementById('root')!).render(
 <ScanProvider>
  <AnalysisProvider>
    <InputProvider>
      <App />
    </InputProvider>
  </AnalysisProvider>
</ScanProvider>
)
