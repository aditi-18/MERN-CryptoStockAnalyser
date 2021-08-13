import React, { Component } from 'react';
import IBM from './IBM_Stock.jsx';
import Shopify from './Shopify_Stock.jsx';


class StockSearch extends Component {
  constructor() {
    super();

    this.state = {

      name: 'React',

      showHideDemo1: true,
      showHideDemo2: false,

    };

    this.hideComponent = this.hideComponent.bind(this);
  }


  hideComponent(name) {
    console.log(name);

    switch (name) {
      case 'showHideDemo1':

        this.setState({ showHideDemo1: true });
        this.setState({ showHideDemo2: false });


        break;

      case 'showHideDemo2':

        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: true });

        break;


      default:

        null;
    }
  }


  render() {
    const { showHideDemo1, showHideDemo2 } = this.state;

    return (


      <div>
        <div>
          <form>
            <label>
              Pick your favorite:
              <select>
                <option value="IBM" onClick={() => this.hideComponent('showHideDemo1')}>IBM</option>
                <option value="lime" onClick={() => this.hideComponent('showHideDemo2')}>Shopify</option>
              </select>

            </label>

          </form>
        </div>

        {showHideDemo1 && <IBM />}

        {showHideDemo2 && <Shopify />}


      </div>

    );
  }
}


export default StockSearch;
