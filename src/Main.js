import React from 'react';
import './Main.css';
import HornedBeast from './HornedBeast';
import data from './data/data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.data.map(hornBeastObj => (
          <HornedBeast
            key={hornBeastObj._id}
            title={hornBeastObj.title}
            image_url={hornBeastObj.image_url}
            alt={hornBeastObj.description}
            handleOpenModal={this.props.handleOpenModal}
          />
        ))}
      </main>
    )
  }
}

export default Main;