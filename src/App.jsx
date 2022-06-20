import './App.css'

const data = [
    "tarde",
    "frade",
    "tchau",
    "dedal",
    "calça",
    "bolso",
    "trama"
]


const numero = Math.floor(Math.random() * data.length);

const word =  data[numero]

const wordArray = word.split("")

console.log(wordArray)

function App() {

  return (
    <div>
      <form id="form1" >
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>

    </div>
  )
}

export default App
