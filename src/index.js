import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// import Geometry from './01-geometry'
// import LightsShadows from './02-lights-shadows'
// import Materials from './03-materials'
// import Textures from './04-textures'
import Events from './05-events'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Geometry /> */}
    {/* <LightsShadows /> */}
    {/* <Materials /> */}
    {/* <Textures /> */}
    <Events />
  </React.StrictMode>
)

reportWebVitals()
