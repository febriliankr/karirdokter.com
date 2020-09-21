import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Home() {
    return (
        <div className="home__container">
            <section>
            <h1>Hello this is home</h1>
            <Link to="/quiz">Start Quiz ›</Link>
            </section>
        </div>
    )
}

export default Home
