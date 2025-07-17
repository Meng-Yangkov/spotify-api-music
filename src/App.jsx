import App from './components/App/App';
import { useState } from 'react'
import './App.css'

const AppParent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <App />
    </div>
  )
}

export default AppParent;
