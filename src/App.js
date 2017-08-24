import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Header from './Components/Header';
import Books from './Components/Books';
import SearchInput from './Components/SearchInput';
import './App.css';

// setting state books to empty array search text default to Harry Potter
class App extends Component {
  constructor(){
    super();
    this.state = {
      books:[],
      text:'Harry Potter'
    }
  }

  componentWillMount(){
    this.getBooks();
  }

  // Making call to google books api with axios
  getBooks(){
    axios.request({
      method:'get',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  // handling search input changes
  handleChange(text){
    this.setState({text: text}, this.getBooks());
  }

  // Search bar default text 'Harry Potter'
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput onChange={this.handleChange.bind(this)} value={this.state.text} />
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
