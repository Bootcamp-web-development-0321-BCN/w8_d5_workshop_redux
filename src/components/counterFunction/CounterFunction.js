import React, { useState } from "react";
import style from "./counter.module.scss";

const CounterFunction = () => {
	const [value, setValue] = useState(0);

	const increment = () => {
		setValue(value + 1);
	};

	const decrement = () => {
		setValue(value - 1);
	};
	return (
		<div className={style.counter}>
			<p>Hooks Counter</p>
			<div>
				<button onClick={() => decrement()}>Take</button>
				<p>{value}</p>
				<button onClick={() => increment()}>Add</button>
			</div>
		</div>
	);
};

export default CounterFunction;
