import './App.css';
import React from 'react';
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedBeast: {},
    }
  }

  handleOpenModal = (name) => {
    const beast = data.find(beast => beast.title === name)
    this.setState({
      showModal: true,
      selectedBeast: beast,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }
  render() {
    return (
      <>
        <Header />
        <Main 
          handleOpenModal={this.handleOpenModal}
          data={data}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
