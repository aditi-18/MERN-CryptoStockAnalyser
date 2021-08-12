import Select from 'react-select';
import React, { Component } from 'react';
import Stock from './Stock.jsx';
// import Demo3 from './Components/Demo3.js';


// function App() {
//   return (
//  <Crypto/>
//  </demo1>
//   );
// }
const options = [
  { name: 'IBM', value: 'ibm' },
  { name: 'English', value: 'en' },
];

class StockSearch extends Component {
  constructor() {
    super();

    this.state = {

      name: 'React',

      showHideDemo1: false,
      showHideDem02: false,
      showHideDemo3: false,

    };

    this.hideComponent = this.hideComponent.bind(this);
  }


  hideComponent(name) {
    console.log(name);

    switch (name) {
      case 'showHideDemo1':

        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        this.setState({ showHideDemo2: false });
        this.setState({ showHideDemo3: false });

        break;

      case 'showHideDemo2':

        this.setState({ showHideDemo2: true });
        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo3: false });

        break;

      case 'showHideDemo3':

        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: false });

        break;

      default:

        null;
    }
  }


  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;

    return (

      <div>
        <div>

          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="IBM" onClick={() => this.hideComponent('showHideDemo2')}>IBM</option>
                <option value="lime" onClick={() => this.hideComponent('showHideDemo1')}>Lime</option>
                <option value="coconut" onClick={() => this.hideComponent('showHideDemo3')}>Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>

          </form>
        </div>


        {showHideDemo1 && <Demo1 />}


        {showHideDemo2 && <Stock />}


        {showHideDemo3 && <Demo3 />}


      </div>

    );
  }
}


export default StockSearch;
