import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Address from './Address.jsx'
import Social from './Social.jsx'
import Language from './Language.jsx'
import Contact from './Contact.jsx'
import Academic from './Academic.jsx'
import ICard from './ICard.jsx'
import Resume from './Resume.jsx'
import Marksheet from './Marksheet.jsx'
import CounterWithSpread from './CounterWithSpread.jsx'
import Certification from './Certification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Address/>
  <Language/>
  <Marksheet/>
  <ICard/>
  <Resume/>
  <Contact/>
  <Social/>
  <Academic/>
  </StrictMode>
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <CounterWithSpread/>
  
  </StrictMode>
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Certification/>
  
  </StrictMode>
)


