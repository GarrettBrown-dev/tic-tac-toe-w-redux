import React from 'react';
import Board from './Board';
import calculateWinner from './Winner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      // xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.props.xIsNext ? 'X' : 'O';
    // this.state.xIsNext
    this.setState({
      history: history.concat([{
        squares: squares,
      }])
    });
    const { dispatch } = this.props;
    const action = a.toggleTurn();
    dispatch(action);
    // xIsNext: !this.state.xIsNext,
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : '0');
      // this.state.xIsNext
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  xIsNext: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    xIsNext: state,
  }
}
Game = connect(mapStateToProps)(Game);

export default Game;