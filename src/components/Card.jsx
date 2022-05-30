import React from 'react'

const Card = ({phrasesRandom, colorRandom, clickbtn}) => {

    const styleBtn ={
        backgroundColor: colorRandom
    }

  return (
    <article className='card' style={{color: colorRandom}} >
        <p><i class='bx bxs-quote-left'></i>{phrasesRandom.quote}</p>
          <br />
        <h2 className='card__author'>{phrasesRandom.author}</h2>
         <br />
        <button style={styleBtn} 
        className='card__btn'
        onClick={clickbtn}
         >&#62;</button>
    </article>
  )
}

export default Card