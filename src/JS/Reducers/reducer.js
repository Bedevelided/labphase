import { BOOK_MARK, SEARCH_MOVIE } from "../Constants/constants";
import initialMovies from "../../data.json";

export const rootReducer =(state = initialMovies , action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            if(action.payload){
                const filterList = state.filter(item => item.title.toUpperCase().indexOf(action.payload.toUpperCase()) > -1)
                return filterList
            }else return state
          
        case BOOK_MARK:
            const movie = state.filter(item => item.title === action.payload);
            movie[0].isBookmarked = movie[0].isBookmarked ? false : true; 
            const returnedMovies = [...state , ...movie]
            
            return returnedMovies


        default:
            return state
    }
}