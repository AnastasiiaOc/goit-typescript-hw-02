import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App'

createRoot(document.getElementById('root')!  as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


   // "build": "tsc -b && vite build",