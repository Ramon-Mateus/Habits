import './styles/global.css'

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={25} />
      <Habit completed={50} />
      <Habit completed={100} />
    </div>
  )
}

export default App
