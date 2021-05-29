import React, {useState} from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

export default function Review() {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]
    const checkNumber = (number) => {
        return number > people.length - 1 ? 0 : number < 0 ? people.length - 1 : number
    }
    const nextPerson = () => {
        setIndex((index) => {
            return checkNumber(index + 1)
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            return checkNumber(index - 1)
        })
    }
    const randomPerson = () => {
        const number = Math.floor(Math.random() * people.length)
        if (number === index) {
            return randomPerson()
        }
        setIndex(number)
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="prev-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
                <button className="random-btn" onClick={randomPerson}>
                    Surprise me
                </button>
        </article>
    )
}
