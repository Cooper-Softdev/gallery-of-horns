import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';
import data from './data/data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map(hornedBeastObj => {
          return <HornedBeast image_url={hornedBeastObj.image_url} title ={hornedBeastObj.title} description ={hornedBeastObj.description} />
        })}
      </main>
    )
  }
}

export default Main;