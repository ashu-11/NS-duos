import React from 'react';

const CounterContext = React.createContext();

export const ContextProvider = CounterContext.Provider
export const ContectConsumer = CounterContext.Consumer

export default CounterContext;
