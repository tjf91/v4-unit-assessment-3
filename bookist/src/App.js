import React, { Component } from 'react'
import './App.css';
import books from "./data"
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf';

class App extends Component {
  constructor() {
    super();
    
    this.state={
      books:[...books],
      shelf:[]
    }
    this.addToShelf=this.addToShelf.bind(this)
    this.clearShelf=this.clearShelf.bind(this)
    this.filterBooks=this.filterBooks.bind(this)
    this.resetFilter=this.resetFilter.bind(this)
  }

  addToShelf(input){
     
      if(this.state.shelf.some(item=>item.id===this.state.books[input].id)){
        alert("How many books you need bro?")
        this.setState({
          shelf:[...this.state.shelf]
        })
      }
    
    else{this.setState({
      shelf:[...this.state.shelf,this.state.books[input]]
    })}
  }

  clearShelf(){
    
    this.setState({
      shelf:[]
    })
  }

  filterBooks(input){
    
    this.setState({
      books:[...this.state.books].filter(book=>book.title.toLowerCase().includes(input.toLowerCase()))
    })
  }
  resetFilter(){
    this.setState({
      books:[...books]
    })
  }

  render(){


    console.log()
  
  
  return (
    <div className="App">
       <Header/>
      <div className='main-div'>
        
     <SearchBar  
        filterBooks={this.filterBooks}
        resetFilter={this.resetFilter}

     />
     <BookList 
        books={this.state.books}
        addToShelf={this.addToShelf}
     />
      </div>
      <div className='shelf'>
        <Shelf 
        books={this.state.books}
        shelf={this.state.shelf}
        clearShelf={this.clearShelf}
        />
      </div>

    </div>
  );

  }
}

export default App;
