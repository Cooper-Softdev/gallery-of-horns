import React from 'react';
import hornedBeast from './Beast'


class Main extends React.Component {
  render() {
    return (
      <>
        <h2>What am I doing?</h2>
        <hornedBeast firstName="Goat" />
        <hornedBeast firstName="Ram" />
        <hornedBeast firstName="Unicorn" />
        <hornedBeast firstName="Dragon" />

        <hornedBeast title="Coop's Beasts" description="Horned Animals" image_url="public/logo512.png" />
      </>
    )
  }
}

export default Main;