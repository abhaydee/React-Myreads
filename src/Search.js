import React, { Component } from "react";
import "./App.css";

import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
    searchedbooks: []
  };

  updateinput = query => {
    this.setState({ query: query });
    this.searchingbooks(query);
  };

  searchingbooks = query => {
    if (query.trim()) {
      if (
        this.state.query.trim() === "" ||
        this.state.query.trim() === undefined
      ) {
        this.setState({ searchedbooks: [] });
      }

      {
        BooksAPI.search(query).then(books => {
          if (books.error) {
            this.setState({ searchedbooks: [] });
          } else {
            books.forEach(b => {
              let s = this.props.books.filter(B => B.id === b.id);
              if (s[0]) {
                b.shelf = s[0].shelf;
              }
            });
            return this.setState({ searchedbooks: books });
          }
        });
      }
    } else {
      this.setState({ searchedbooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            {" "}
            Close{" "}
          </Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => {
                this.updateinput(event.target.value);
              }}
            />
            {/*{JSON.stringify(this.state)}*/}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedbooks.map(searching => {
              let shelf = "none";
              this.props.books.map(book =>
                book.id === searching.id ? (shelf = book.shelf) : ""
              );
              return (
                <div key={searching.id}>
                  <Shelf
                    book={searching}
                    moveshelf={this.props.moveshelf}
                    currentshelf={shelf}
                  />
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
