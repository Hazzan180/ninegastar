import React, {useState, useEffect} from 'react'
import "./Sliderstyle.css"
import data from '../Artistssays/data'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Slider = () => {
    const [people] = useState(data);
    const[index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length -1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0)
        }
    }, [index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 9000);
        return () => {
            clearInterval(slider)
        }
    }, [index])

  return (
    <section className='section'>
        <div className='title'>
        <h2>Our Artists Says</h2>
        </div>
        <div className='section-center'>
            {people.map((item, indexPeople) => {
                const {id,image, name,title,quote } = item;
                let position = "nextSlide";
                if(indexPeople === index){
                    position = "activeSlide"
                }
                if(
                    indexPeople === index - 1 || 
                (index === 0 && indexPeople === people.length - 1) ){
                    position = "lastSlider"
                }
                return (
                    <article className={position} key={id}>
                        <h1>{quote}</h1>
                        <img src={image} className="person-img"></img>
                       <div className='textP'>
                       <p>{name}</p>
                        <p>{title}</p>
                       </div>
                    </article>
                )
            })}
             <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiOutlineArrowLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <AiOutlineArrowRight/>
        </button>
        </div>
    </section>
  )
}

export default Slider