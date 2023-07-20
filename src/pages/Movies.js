import React from 'react'
import Movieitem from '../components/Movieitem'
import Form from '../components/Form'
import { bookMarkUnBookBookmark } from '../JS/Actions/actions'

const Movies = ({movies , bookMarkUnBookBookmark}) => {
  return (
    <>
      <Form/>
      <h3 style={{fontSize : "2rem" , margin : "2rem 0rem" , fontWeight : 300}} >Movies</h3>
      <Movieitem  movies={movies} category={"Movie"} bookMarkUnBookBookmark={bookMarkUnBookBookmark}/>
    </>
  
  )
}

export default Movies