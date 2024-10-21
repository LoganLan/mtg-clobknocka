import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Scrycard, ScryNameCard, Scrytext, useScrycard } from 'react-scrycards'
import { ScryfallCard } from '@scryfall/spi-types';





function App() {
  const [card, setCard] = useState<ScryfallCard.Any | null>(null)
  async function getRandomCard() {
    fetch("https://api.scryfall.com/cards/random?q=is:commander+c=wubrg").then(response => {
      return (
        response.json()
      )
    }).then(data => {
      setCard(data as ScryfallCard.Any)
    })
  }
  useEffect(() => { getRandomCard() }, [])
  console.log(useScrycard("Krenko, Mob Boss"))
  return (
    // <ScryNameCard animated card_name="Alexander Clamilton"></ScryNameCard>

    <Scrycard animated symbol_text_renderer={Scrytext} card={card}>

    </Scrycard>


  )
}

export default App
