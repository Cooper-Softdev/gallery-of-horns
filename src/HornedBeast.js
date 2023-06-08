import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: 0,
    }
  }

  incrementFavorite = () => {
        this.setState({
      favorited: this.state.favorited + 1
   })
  }

  render() {
    return(
      <>
        <card style ={{width: '18rem'}}>
          <h2>{this.props.title}</h2>
          <img src={this.props.image_url} alt={this.props.alt} title={this.props.title}></img>
          <p>{this.props.description}</p>
          <p>😍 {this.state.favorited} many times!</p>
          <Button variant='dark' onClick={this.incrementFavorite} > Press Me!</Button>
        </card>
      </>
    )
  }
}
export default HornedBeast;