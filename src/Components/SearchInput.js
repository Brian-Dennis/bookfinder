import React, { Component } from 'react';
import {Well, FormControl} from 'react-bootstrap';

// Initializing SearchInput
class SearchInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  // Handling onChange within SearchInput
  onChange(e){
    this.setState({value: e.target.value});
    this.props.onChange(this.state.value);
  }

  // Creating SearchInput Well
  render() {
    return (
      <Well>
        <FormControl 
          type="text"
          value={this.state.value}
          placeholder="Search Books..."
          onChange={this.onChange.bind(this)}
        />
      </Well>
    );
  }
}

export default SearchInput;
