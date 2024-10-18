import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "react-scrycards/dist/index.css";
import { ScrycardsContextProvider, ScryNameCard } from 'react-scrycards';

import './landingPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>



    {/* <ScrycardsContextProvider>
      
      <ScryNameCard animated card_name="Krenko, Mob Boss"></ScryNameCard>
      <App/>
      <App/>
      <App/>
      <App/>
      <App/>

      <App/>
      <App/>
      <App/>
      <App/>
      
    </ScrycardsContextProvider> */}
    
    
  </StrictMode>,
  <landingPage></landingPage>
)
