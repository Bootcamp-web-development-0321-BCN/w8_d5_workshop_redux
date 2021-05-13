import React, { Component } from "react";
import style from './counter.module.scss'

export default class counterClass extends Component {
	state = { count: 0 };

	increment = () => {
		this.setState({
			...this.state,
			count: this.state.count + 1
		});
	};

	decrement = () => {
		this.setState({
			...this.state,
			count: this.state.count + -1
		});
	};

	render() {
		return (
			<div className={style.counter}>
				<p>Class component counter</p>
				<div>
					<button onClick={() => this.decrement()}>Take</button>
					<p>{this.state.count}</p>
					<button onClick={() => this.increment()}>Add</button>
				</div>
			</div>
		);
	}
}
