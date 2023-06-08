import { createRoot } from 'react-dom/client'
import './style.css'
import  App from './App.js'


const root = createRoot(document.querySelector('#root'))


root.render(
   <div>
       <App></App>
   </div>
)