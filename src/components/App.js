/**
 * Created by antonifs on 5/22/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Footer from './common/footer';
import NavBar from './common/nav-bar';

class App extends Component {

  render () {
    return(
      <div>
        <NavBar />
        <div className="container">
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

App.propTypes = { 
  children: React.PropTypes.node.isRequired
};

export default App;
