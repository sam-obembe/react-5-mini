import React, { Component } from 'react';
import connect from 'react-redux'
import incrementNumber from './ducks/counter'
import decrementNumber from './ducks/counter'

class Counter extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{0}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => this.props.incrementNumber(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => this.props.incrementNumber(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => this.props.decrementNumber(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => this.props.decrementNumber(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {incrementNumber,decrementNumber})(Counter);
