"use client"

import { useState, useEffect } from "react"
import quotes from "./assets/quotes.json"
import { RefreshCw, Twitter, Instagram } from "lucide-react"
import { RiDoubleQuotesR } from "react-icons/ri"
import "./App.css"

export default function Component() {
    const [currentQuote, setCurrentQuote] = useState(quotes[0])
    const [isAnimating, setIsAnimating] = useState(false)
    const [backgroundClass, setBackgroundClass] = useState("bg-muted-1")

    const bgMuted = [
        "bg-muted-1",
        "bg-muted-2",
        "bg-muted-3",
    ]

    const getRandomQuote = () => {
        setIsAnimating(true)

        setTimeout(() => {
            let randomIndex
            do {
                randomIndex = Math.floor(Math.random() * quotes.length)
            } while (quotes[randomIndex] === currentQuote && quotes.length > 1)

            setCurrentQuote(quotes[randomIndex])
            setBackgroundClass(bgMuted[Math.floor(Math.random() * bgMuted.length)])
            setIsAnimating(false)
        }, 300)
    }

    const shareOnTwitter = () => {
        const tweetText = `"${currentQuote.text}" - ${currentQuote.author} (${currentQuote.profession})`
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
        window.open(tweetUrl, "_blank")
    }

    const shareOnInstagram = () => {
        const shareText = `"${currentQuote.text}" - ${currentQuote.author} (${currentQuote.profession})`
        const shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`
        window.open(shareUrl, "_blank")
    }

    // Initialize with a random quote
    useEffect(() => {
        getRandomQuote()
    }, [])

    return (
        // #1
        <div id="quote-box" className={`quote-box ${backgroundClass}`}>
            <div className="quote-wrapper">
                <div className="quote-card">
                    {/* Overlay background */}
                    <div className="quote-card-overlay"></div>
                    <div className="quote-content">
                        {/* Quote Icon */}
                        <div className="quote-icon-container">
                            <RiDoubleQuotesR className="quote-icon" />
                        </div>

                        {/* Quote Text */}
                        <div className={`quote-text-container ${isAnimating ? "animating" : ""}`}>
                            {/* #2 */}
                            <blockquote id="text" className="quote-text">" {currentQuote.text} "</blockquote>
                            {/* #3 */}
                            <span id="author" className="quote-author">{currentQuote.author}</span>
                            <br />
                            <span className="quote-profession">{currentQuote.profession}</span>
                        </div>


                        {/* Action Buttons */}
                        <div className="button-container">
                            <button
                                onClick={getRandomQuote}
                                disabled={isAnimating}
                                id="new-quote"
                                className={`new-quote-btn ${isAnimating ? "disabled" : ""}`}
                            >
                                <RefreshCw className={`refresh-icon ${isAnimating ? "spinning" : ""}`} />

                            </button>

                            <div className="social-buttons">
                                {/* twitter */}
                                <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noopener noreferrer">
                                    <button onClick={shareOnTwitter}
                                        className="social-btn twitter-btn" title="Share on Twitter">
                                        <Twitter className="social-icon twitter-icon" />
                                    </button>
                                </a>

                                {/* instagram */}
                                <button onClick={shareOnInstagram} className="social-btn instagram-btn" title="Share on Instagram">
                                    <Instagram className="social-icon instagram-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
