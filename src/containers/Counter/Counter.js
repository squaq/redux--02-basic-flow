import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement, add, subtract, store_result, delete_result} from '../../store/actions/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions'

class Counter extends Component {
	render () {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
				<CounterControl label="Add 5" clicked={() => {this.props.onAddCounter(5)}}  />
				<CounterControl label="Subtract 5" clicked={() => {this.props.onSubtractCounter(5)}} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
				<ul>
					{this.props.storedResults.map(idx => (
						<li key={idx.id} onClick={() => this.props.onDeleteResult(idx.id)}>{idx.value}</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	}
}
const mapDispatchToProps = dispatch => {
  return {
		onIncrementCounter: () => dispatch(increment()),
		onDecrementCounter: () => dispatch(decrement()),
		onAddCounter: value => dispatch(add(value)),
		onSubtractCounter: value => dispatch(subtract(value)),
		onStoreResult: result => dispatch(store_result(result)),
		onDeleteResult: id => dispatch(delete_result(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);