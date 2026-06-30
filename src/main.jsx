import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import './index.css'
import { BrowserRouter } from 'react-router-dom' // १. हा इम्पोर्ट ॲड करा
import { TeacherProvider } from './context/TeacherContext.jsx'
 // २. तुझा मुख्य AuthContext 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ३. सगळ्यात बाहेर BrowserRouter ठेवा */}
      <TeacherProvider>
        <App/>
      </TeacherProvider>
    </BrowserRouter>
  </React.StrictMode>,
)