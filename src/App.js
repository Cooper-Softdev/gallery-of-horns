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

  handleSelect = (event) => {
    let selected = parseInt(event.target.value);
    let newData;
    if (selected === 0) {
      this.setState({
        sortedData: data
      })
    } else if (selected === 1) {
      newData = data.filter(item => item.horns === 1);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 2) {
      newData = data.filter(item => item.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 3) {
      newData = data.filter(item => item.horns === 3);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 100) {
      newData = data.filter(item => item.horns === 100);
      this.setState({
        sortedData: newData
      })
    }
  }

  render() {
    return (
      <>
        <Header />
          <form>
            <Form.Select onChange={this.handleSelect}>
              <option value="0">Select Horns</option>
              <option value="0">All Horns</option>
              <option value="1 Horn">1 Horn</option>
              <option value="2 Horns">2 Horns</option>
              <option value="3 Horns">3 Horns</option>
              <option value="100 Horns">100 Horns</option>
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
