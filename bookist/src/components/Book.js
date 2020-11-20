import React from 'react'

export default function Book (props){

    return<div className='book' onClick={()=>props.addToShelf(props.index)} >
        <img  className='images' src={props.book.img} alt=''/>
        {props.book.title}
    </div>
}