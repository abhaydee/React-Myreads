import React, {Component} from 'react';
import './App.css'


class Shelf extends Component{
  
	render() {
        let image;
        if(typeof this.props.book.imageLinks === 'undefined')
        {
            image=''
        }
        else
        {
            image=this.props.book.imageLinks.thumbnail
        }

  

		return (
			
		
                      <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${image})` }}></div>
                                <div className="book-shelf-changer">
                                    <select onChange={(event)=> {this.props.moveshelf(this.props.book,event.target.value)}}
                                      value={this.props.currentshelf }>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>



                                    </div>
                              </div>
                              <div className="book-title">{this.props.book.title}</div>
                              <div className="book-authors">{this.props.book.authors}</div>     
                               
                            </div>
                      
                      </li>
                      
                      
                        
                      
                      
		);
	}
}
export default Shelf;