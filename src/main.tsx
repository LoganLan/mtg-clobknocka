import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "react-scrycards/dist/index.css";
import { ScrycardsContextProvider, ScryNameCard } from 'react-scrycards';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrycardsContextProvider>
      
      <ScryNameCard animated card_name="Alexander Clamilton"></ScryNameCard>
      <App/>
      <App/>
      <App/>
      <App/>
      <App/>

      <App/>
      <App/>
      <App/>
      <App/>
      
    </ScrycardsContextProvider>
    
    
  </StrictMode>,
)
