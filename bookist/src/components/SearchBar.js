import React, { Component } from 'react'

export default class SearchBar extends Component{
    constructor() {
        super();
        this.state={
            userInput:''
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.handleReset=this.handleReset.bind(this)
    }
    handleUserInput(val){
        this.setState({
            userInput:val
        })
    }
    handleSearch(){
       this.props.filterBooks(this.state.userInput)
    }
    handleReset(){
        this.props.resetFilter()
        this.setState({userInput:''})
    }

    render(){
            const isTypedIn = this.state.userInput
        return(
            <div className='search-bar'>
                <div className='search-button'>
                    <input id="input-search" onChange={e=>this.handleUserInput(e.target.value)} className='search-bar' placeholder='insert stuff to search for' value={this.state.userInput}/>
                    <button onClick={this.handleSearch} className='search-bar'>Search Stuff</button>

                </div>
                
                <div id='reset-button'>
                    {isTypedIn!=='' && <button onClick={this.handleReset} className='search-bar'>Reset Search</button>}
                </div>
                
            </div>
            
        )
    }
}