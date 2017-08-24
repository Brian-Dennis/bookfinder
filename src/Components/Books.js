import React, { Component } from 'react';
import {Grid, Row, Col, Accordion, Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

//  Initializing the Books array
class Books extends Component {
  render() {
    // Setting book items into a variable called bookItems
    let bookItems;
    if(this.props.books){
      // Defining bookItems props
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink;

        // returning panel and panel body for diplaying of the books
        return (
          <Panel key={id} header={title} eventKey={id}>
            <Grid>
              <Row>
                {/* Did Col 8 & 3 to total 11 because Col 9 & 3 broke out of the container looked bad */}
                <Col xs={3} md={3} lg={3}>
                  <img src={thumbnail} alt="presentation" />
                </Col>
                <Col xs={8} md={8} lg={8}>
                  <ListGroup>
                    <ListGroupItem><strong>Categories: </strong> {categories}</ListGroupItem>
                    <ListGroupItem><strong>Authors: </strong> {authors}</ListGroupItem>
                    <ListGroupItem><strong>Publisher: </strong> {publisher}</ListGroupItem>
                    <ListGroupItem><strong>Publish Date: </strong> {publishedDate}</ListGroupItem>
                    <ListGroupItem><strong>Page Count: </strong> {pageCount}</ListGroupItem>
                    <ListGroupItem><strong>Rating: </strong> <span className="rating">{averageRating}</span></ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
              {/* Creating another row and colums for book descriptiton and link to buy books on google store
                  Again went with Col 11 because 12 rendered funny */}
              <Row>
                <Col xs={11} md={11} lg={11}>
                  <h3>Book Description</h3>
                  {description}
                  <hr />
                  <Button href={buyLink} bsStyle="primary">Buy Now</Button>
                </Col>
              </Row>
            </Grid>
          </Panel>
        )
      });
    }
    return (
      <div>
        <Accordion>
          {bookItems}
        </Accordion>
      </div>
    );
  }
}

export default Books;
