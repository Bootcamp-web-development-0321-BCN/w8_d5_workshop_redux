import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./counter.module.scss";

const CounterReduxHooks = (props) => {
	const countHook = useSelector((state) => state.countHooks);
	const dispatch = useDispatch();

	const incrementHook = () => {
		dispatch({ type: "INCREMENT_HOOKS" });
	};

	const decrementHook = () => {
		dispatch({ type: "DECREMENT_HOOKS" });
	};

	return (
		<div className={style.counter}>
			<p>Counter with Redux & Hooks</p>
			<div>
				<button onClick={() => decrementHook()}>Take</button>
				<p>{countHook}</p>
				<button onClick={() => incrementHook()}>Add</button>
			</div>
		</div>
	);
};

//export with both HOC
export default CounterReduxHooks;
