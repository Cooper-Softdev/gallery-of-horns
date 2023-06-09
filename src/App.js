import './App.css';
import React from 'react';
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedBeast: {},
      sortedData: data,
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

// asked GPT4 to refactor for readability and wow, I have a lot to learn. This is so much better.
  handleSelect = (event) => {
    const selected = parseInt(event.target.value);
    let newData;
  
    if (selected === 0) {
      newData = data;
    } else {
      newData = data.filter(item => item.horns === selected);
    }
  
    this.setState({
      sortedData: newData
    });
  }

  render() {
    return (
      <>
        <Header />
        <form>
          <Form.Select onChange={this.handleSelect}>
            <option value="0">Select Horns</option>
            <option value="0">All Horns</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100 Horns</option>
          </Form.Select>
        </form>
        <Main 
          handleOpenModal={this.handleOpenModal}
          data={this.state.sortedData}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
        />
        <Footer />
      </>
    )
  }
}

export default App;
