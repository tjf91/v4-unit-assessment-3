import React from 'react'

export default function Shelf(props){
    const mapped = props.shelf.map(i=>{
    return (
    <div key={i.id} className='shelf-item' >
        <img className='shelf-img' src={i.img} alt=''/>{i.title} 
        </div>)
    })
    return(
    <div>
        <div className='shelf-title'> 
           <div className='shelf-header'>Shelf</div>
    <button id='delete-shelf' onClick={()=>props.clearShelf()}>Dump this shelf</button> 
    
        </div>         
        
        <div>{mapped}</div>
    </div>
    )
}