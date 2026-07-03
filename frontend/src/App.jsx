import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowerRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowerRouter>
  )
}

export default App
