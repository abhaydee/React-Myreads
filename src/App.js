import React from 'react'

import Search from './Search';

import {
  Route,Link
} from 'react-router-dom'
import Main from './Main';
import './App.css'
import * as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    screen: '/',
    books: [

    ]
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })

    })
  }

  moveshelf=(book,shelf)=>{
    
    BooksAPI.update(book,shelf)
    BooksAPI.getAll().then((books) => {

      books.shelf=shelf

       this.setState({
         books: books
       })
 
     })

  }

  render() {
    return ( 
        <div className = "app" >
        <Route exact path = "/"
        render = {() => (
            
            <Main books={this.state.books} moveshelf={this.moveshelf} />
            
            
        )}/>
        
            <Route exact path = "/search" render = { () => ( 
            <Search moveshelf={this.moveshelf} books={this.state.books}/>

        )}/>
        <Route exact path = "/" render = { () => ( 
                    <Link className="open-search" to={"/Search"}>
                        <button>Add a book</button>
                    </Link>
            )} />
        </div>
    )}
}
export default BooksApp;