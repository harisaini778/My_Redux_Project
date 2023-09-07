const redux = require("redux"); // import redux in this way using this syntax



const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "icrement") {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        };
    }
    return state;
}
  // reducer function it will receive state and action by default

const store = redux.legacy_createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:"increment"});

store.despatch({ type: "decrement" });