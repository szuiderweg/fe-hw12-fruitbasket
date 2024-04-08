
import './App.css'
import fruitlogo from "./assets/screenshot-logo.png";
function App() {

  return (
    <>
        <main className="outer-container">
            <img src={fruitlogo} alt="fruitlogo"/>
            <h1>Kies fruitigheid </h1>
            <span className="fruit-container">
                <h2> &#127827; Aardbeien</h2>
                <button type="button">-</button>
                <p> 00 </p>
                <button type="button">+</button>
            </span>
        </main>
    </>
  )
}

export default App
