import React from 'react'
import TrendingMovie from '../components/TrendingMovie'
import Movieitem from '../components/Movieitem'
import { useRef } from 'react'
import Form from '../components/Form'


const Home = ({movies , bookMarkUnBookBookmark , searchMovie}) => {
  const slideShow = (mult) => {
    const slideContainer = document.querySelector(".trending__movies");
    const cltWidth = slideContainer.clientWidth;
    const scrlWidth = slideContainer.scrollWidth;
    const movie = document.querySelectorAll(".movie")[0].getBoundingClientRect().width;

    slideContainer.scrollLeft += movie * mult
    // const scrlLeft = 0 + movie
    
    
    // slideContainer.scrollTo({
    //   left : scrlLeft + movie,
    //   behavior : 'smooth'
    // })

    


  }
  const ref = useRef()
  return (
    <div className="home-container">
      <Form searchMovie = {searchMovie}/>
        {/* <form className="search__bar" onSubmit={(e) => {e.preventDefault()
        console.log(ref.current.value)
        }}>
         <button type='submit'>
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
         </button>
          <input type="text" placeholder='search for movies or TV series'  ref={ref}/>
        </form> */}
        <h1 style={{fontWeight : 300, margin :"1rem 0rem"}}>Trending</h1>
        <div className="trending__container">
        <div className="arrow arrow--left" onClick={() => {
          slideShow(-1);
        }}></div>
            {<TrendingMovie movies={movies}/>}
          <div className="arrow arrow--right" onClick={() => {
            slideShow(1)
          }}></div>
        </div>

        <h1 style={{fontWeight : 300, margin: "0.85rem 0rem"}}>Recommended for you</h1>
        <div className="">
          {<Movieitem movies={movies} bookMarkUnBookBookmark ={bookMarkUnBookBookmark}/>}
        </div>
    </div>
  )
}

export default Home