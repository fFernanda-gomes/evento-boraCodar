import './App.scss'
import Card from "./components/card/Card"

function App() {
  return (
    <main>
      <div className="bg-form">
        <div className="form">
          <div>{Card()}</div>
        </div>
      </div>
    </main>
  )
}

export default App
