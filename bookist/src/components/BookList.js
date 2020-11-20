import React from 'react'
import Book from './Book'

export default function BookList (props){
       
    const mapped = props.books.map((book,index)=>{
    return <div  key={book.id} className='book'>
        <Book
        book={book}
        index={index}
        addToShelf={props.addToShelf} />
        </div>
    })
    return(
        <div className='book-list'>{mapped}</div>
    )
}