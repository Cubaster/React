import React from "react"
import AddCard from "./AddCard"
import BookCard from "./BookCard"

export default function Genre({genre, books, searched, addBook, deleteBook}){
    // holds sort type 
    const [sort, setSort] = React.useState('id')

    // return genre section
    return (
    <div className="genre" >
        <div className="genre--header">
            <h2 className="genre--title">{genre}</h2>
            <div>
                <label>Sort by: </label>
                <select className="genre--select" onChange={(e) => setSort(e.target.value)}>
                <option value="id">Id</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="rating">Rating</option>
            </select>
            </div>
            
        </div>
        <section className="genre--content">
            {books.sort((a, b) => a[sort] > b[sort] ? 1 : -1).map(book => <BookCard
                key={genre + book.id}
                {...book}
                searched={searched}
                deleteBook={deleteBook}
            />)}
            <AddCard addBook={addBook} />
        </section>
    </div>)
}
