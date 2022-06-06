import React from "react"
import Genre from "./Genre"
import initialGenres from "../genres"


export default function MainSection({searched}){
    const [genres, setGenres] = React.useState(initialGenres)

    // add book at the end of genre
    const addBook = (genre) => (book) => {
        setGenres(prevState => {
            const mutatedGenre = {...prevState.map((genre, idx) => ({genre, idx})).filter(x => x.genre.genre === genre)[0]}
            mutatedGenre.genre.books = [
                ...mutatedGenre.genre.books,
                {
                    ...book,
                    id: `${+(mutatedGenre.genre.books[mutatedGenre.genre.books.length - 1]) + 1}`
                }
            ]

            const newState = [...prevState]
            newState[mutatedGenre.idx] = {...mutatedGenre.genre}

            return newState;
        })
    }

    // remove book from genre which id is
    const deleteBook = (genre) => (id) => {
        setGenres(prevState => {
            const mutatedGenre = {...prevState.map((genre, idx) => ({genre, idx})).filter(x => x.genre.genre === genre)[0]}
            mutatedGenre.genre.books = [...mutatedGenre.genre.books.filter(book => book.id !== id)]
            const newState = [...prevState]
            newState[mutatedGenre.idx] = {...mutatedGenre.genre}
            return newState
        })
    }
    
    // map all genre sections 
    return(
        <div className="mainSection" id="mainSection">
            {genres.map(genre => <Genre
                key={genre.genre}
                genre={genre.genre}
                books={genre.books}
                searched={searched}
                addBook={addBook(genre.genre)}
                deleteBook={deleteBook(genre.genre)}
            />)}
        </div>
    )
}