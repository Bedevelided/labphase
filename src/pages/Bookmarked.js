import React from 'react'
import Movieitem from '../components/Movieitem'
import { bookMarkUnBookBookmark } from '../JS/Actions/actions'
import Form from '../components/Form'


const Bookmarked = ({movies , bookMarkUnBookBookmark }) => {
  const bookmarked = movies.filter((movie =>{
    return movie.isBookmarked
  }))
  const films = bookmarked.filter((movie) => {
    return movie.category === "Movie"
  })
  const series = bookmarked.filter((movie) => {
    return movie.category === "TV Series"
  })
  return (
    <div>
      <Form/>
      <h3 style={{fontSize : "2rem" , margin : "2rem 0rem" , fontWeight : 300}}>Bookmarked Movies</h3>
      <Movieitem movies={films} bookMarkUnBookBookmark={bookMarkUnBookBookmark}/>
      <h3 style={{fontSize : "2rem" , margin : "2rem 0rem" , fontWeight : 300}}>Bookmarked TV Series</h3>
      <Movieitem movies={series} bookMarkUnBookBookmark={bookMarkUnBookBookmark}/>
    </div>
  )
}

export default Bookmarked