import { useState } from 'react'
import quotes from './assets/quotes.json'
import { MdFormatQuote } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import './App.css'

interface Quote {
  quote: string
  author: string
  profession: string
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())

  return (
    <div className='background'>
      {/* #1 */}
      <div id='quote-box'>
        <div className="quote-content">
          <MdFormatQuote size={30} style={{ marginRight: '10px' }} />
          {/* #2 */}
          <h1 id='text' className='quote-text'>{quote.quote}</h1>
          {/* #3 */}
          <h2 id='author' className='quote-author'>{quote.author}</h2>
          <h3 className='quote-profession'>{quote.profession}</h3>
          <MdFormatQuote size={30} style={{ marginLeft: '10px' }} />
          {/* #4 */}
          <button id='new-quote' className='new-quote' onClick={() => setQuote(getRandomQuote())}>New Quote</button>
          <br />

          {/* #10 */}
          <a href="twitter.com/intent/tweet" target="_blank" rel="noreferrer">  {/* #5 */}
            <FaXTwitter id='tweet-quote' className='tweet-quote' /></a>
        </div>
      </div>
    </div >
  )

}


export default App