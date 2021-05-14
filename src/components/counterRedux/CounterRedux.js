import React from "react";
import style from "./counter.module.scss";

//1- import connect
import { connect } from "react-redux";

const CounterRedux = (props) => {
	return (
		<div className={style.counter}>
			<p>Counter with Redux</p>
			<div>
				<button onClick={() => props.decrement()}>Take</button>
				<p>{props.count}</p>
				<button onClick={() => props.increment()}>Add</button>
			</div>
		</div>
	);
};

//2- import mapStateToProps
const mapStateToProps = (state) => {
	return {
		count: state.count
	};
}

//3- import mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({type: 'INCREMENT', value: 1}),
		decrement: () => dispatch({type: 'DECREMENT', value: 1})
	}
}

//4 export with both HOC
export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
