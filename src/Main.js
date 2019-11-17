import React, {Component} from 'react';
import './App.css'
import Shelf from './Shelf'


class Main extends Component{
	render() {

		return (
			
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                        .filter(book =>book.shelf === 'currentlyReading')
                        .map(book =>(
                          <div key={book.id}>
                          <Shelf book={book} moveshelf={this.props.moveshelf}
                            currentshelf="currentlyReading"
                          />
                          </div>
                        ))
                      
                      
                      }
                      
                     
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books
                        .filter(book =>book.shelf === 'wantToRead')
                        .map(book =>(
                          <div key={book.id}>
                          <Shelf book={book} moveshelf={this.props.moveshelf}
                            currentshelf="wantToRead"
                          />
                          </div>
                        ))
                      
                      
                      }
                      
                     
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books
                      .filter(book => book.shelf === 'read')
                      .map(book => (
                        <div key={book.id}>
                        <Shelf book={book} moveshelf={this.props.moveshelf}
                            currentshelf="read"
                          />
                       </div>
                      ))
                      
                      }
                    
                      
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
		);
	}
}
export default Main;