import { SEARCH_MOVIE , BOOK_MARK , UNBOOK_MARK } from "../Constants/constants";


export const searchMovie = (title) => {
    return {
        type : SEARCH_MOVIE,
        payload : title
    }
}
export const bookMarkUnBookBookmark = (value) =>{
    return {
        type : BOOK_MARK,
        payload : value,
    }
}
