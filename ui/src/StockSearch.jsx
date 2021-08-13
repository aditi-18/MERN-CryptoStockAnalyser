import React, { Component } from 'react';
import IBM from './IBM_Stock.jsx';
import Shopify from './Shopify_Stock.jsx';
import Dai from './Dai_Stock.jsx';
import GreenPower from './GreenPower_Stock.jsx';
import Saic from './Saic_Stock.jsx';
import Tesco from './Tesco_Stock.jsx';

class StockSearch extends Component {
  constructor() {
    super();

    this.state = {

      name: 'React',

      showHideDemo1: true,
      showHideDemo2: false,
      showHideDemo3: false,
      showHideDemo4: false,
      showHideDemo5: false,
      showHideDemo6: false,

    };

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);

    switch (name) {
      case 'showHideDemo1':

        this.setState({ showHideDemo1: true });
        this.setState({ showHideDemo2: false });
        this.setState({ showHideDemo3: false });
        this.setState({ showHideDemo4: false });
        this.setState({ showHideDemo5: false });
        this.setState({ showHideDemo6: false });

        break;

      case 'showHideDemo2':

        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: true });
        this.setState({ showHideDemo3: false });
        this.setState({ showHideDemo4: false });
        this.setState({ showHideDemo5: false });
        this.setState({ showHideDemo6: false });

        break;

      case 'showHideDemo3':

        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: false });
        this.setState({ showHideDemo3: true });
        this.setState({ showHideDemo4: false });
        this.setState({ showHideDemo5: false });
        this.setState({ showHideDemo6: false });

        break;

      case 'showHideDemo4':

        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: false });
        this.setState({ showHideDemo3: false });
        this.setState({ showHideDemo4: true });
        this.setState({ showHideDemo5: false });
        this.setState({ showHideDemo6: false });

        break;
      case 'showHideDemo5':

        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: false });
        this.setState({ showHideDemo3: false });
        this.setState({ showHideDemo4: false });
        this.setState({ showHideDemo5: true });
        this.setState({ showHideDemo6: false });

        break;

      case 'showHideDemo6':

        this.setState({ showHideDemo1: false });
        this.setState({ showHideDemo2: false });
        this.setState({ showHideDemo3: false });
        this.setState({ showHideDemo4: false });
        this.setState({ showHideDemo5: false });
        this.setState({ showHideDemo6: true });

        break;
      default:

        null;
    }
  }

  render() {
    const {
      showHideDemo1, showHideDemo2, showHideDemo3, showHideDemo4, showHideDemo5, showHideDemo6,
    } = this.state;

    return (

      <div>
        <div>
          <form>
            <label>
              Pick your favorite:
              <select>
                <option value="IBM" onClick={() => this.hideComponent('showHideDemo1')}>IBM</option>
                <option value="Shopify" onClick={() => this.hideComponent('showHideDemo2')}>Shopify</option>
                <option value="Dai" onClick={() => this.hideComponent('showHideDemo3')}>Dai</option>
                <option value="GreenPower" onClick={() => this.hideComponent('showHideDemo4')}>GreenPower</option>
                <option value="Saic" onClick={() => this.hideComponent('showHideDemo5')}>Saic</option>
                <option value="Tesco" onClick={() => this.hideComponent('showHideDemo6')}>Tesco</option>
              </select>

            </label>

          </form>
        </div>

        {showHideDemo1 && <IBM />}

        {showHideDemo2 && <Shopify />}

        {showHideDemo3 && <Dai />}

        {showHideDemo4 && <GreenPower />}

        {showHideDemo5 && <Saic />}

        {showHideDemo6 && <Tesco />}


      </div>

    );
  }
}

export default StockSearch;
