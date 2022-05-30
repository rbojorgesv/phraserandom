import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import phrases from './json/phrases.json'

const randomColors =[
  '#92B4FF','#4A807D','#2B2A43','#3898A5','#BC105D','#7AFA20','#6C6E51','#D7D932',
  '#A8BB72', '#A8BB72','#4E38D2','#B85FEA','#3A1F47','#FF5829','#D3943B','#EB11AB'
]

function App() {
  
  const addNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getPhraseRandom = array => {
    const i = addNumberRandom(array)
    return array[i]
  }

  const [phrasesRandom, setPhrasesRandom] = useState(getPhraseRandom(phrases))
  const [colorRandom, setColorRandom] = useState(getPhraseRandom(randomColors))

  const clickbtn = () =>{
    setPhrasesRandom(getPhraseRandom(phrases))
    setColorRandom(getPhraseRandom(randomColors))
  }


  const appStyle ={
    backgroundColor:colorRandom
  }

  return (
    <div style ={appStyle} className="App">
      <Card
        phrasesRandom= {phrasesRandom}
        colorRandom  = {colorRandom}
        clickbtn     = {clickbtn}
      
      />   
      
    </div>
  )
}

export default App
