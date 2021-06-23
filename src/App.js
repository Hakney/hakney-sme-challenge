import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
class App extends Component {

  componentDidMount(){

  }

  testeClickReducer = () => {
    this.props.clickButton('Teste');
  }

  render() {
    const { newValue } = this.props;
    return (
      <div style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button onClick={this.testeClickReducer}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ 
      clickButton 
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);