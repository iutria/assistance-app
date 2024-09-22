import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App.tsx'
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <main className="ligth text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
)
