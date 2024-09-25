import React from 'react';
import { RootState } from "../../redux/reduxStore";
import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
} from "../../redux/slices/counterSlice";

const Counter: React.FC = () => {

    const dispatch = useDispatch();
    const counter: number = useSelector((state: RootState) => state.counter.count);

    return (
        <div>
            <p data-testid="count">
                Counter Value :{counter}
            </p>

            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Add 1
            </button>
            
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Subtract 1
            </button>
            <button
                onClick={() => {
                    dispatch(incrementByAmount(10));
                }}
            >
                Add 10
            </button>
            <button
                onClick={() => {
                    dispatch(incrementByAmount(-10));
                }}
            >
                Subtract 10
            </button>
        </div>
    )
};

export default Counter;