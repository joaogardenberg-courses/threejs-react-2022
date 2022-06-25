import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// import Geometry from './01-geometry'
import LightsShadows from './02-lights-shadows'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Geometry /> */}
    <LightsShadows />
  </React.StrictMode>
)

reportWebVitals()
