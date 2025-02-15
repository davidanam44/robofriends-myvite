import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'
import App from './containers/App.jsx'
import 'tachyons'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
    {/*<CardList robots = {robots} />*/}
    {/*<h1>Hello world</h1>*/}
    {/*<App />*/}
  </StrictMode>,
)
