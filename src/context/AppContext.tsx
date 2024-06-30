"use client";

import { createContext, useState } from "react";

// Define the initial state of the app
const initialState = {
  // Add your initial state properties here
  started: false,
  finished: false,
  answers: [] as boolean[],
  counter: 0,
  handleStart: () => {},
  handleCancel: () => {},
  setAnswer: (index: number, value: boolean) => {},
  handleFinish: () => {},
};

// Create the context
export const AppContext = createContext(initialState);

// Create a provider component to wrap your app with
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  // Add any state update functions here
  const handleStart = () => {
    setState({ ...state, started: true });
  };

  const handleCancel = () => {
    setState({ ...state, started: false });
  };

  const handleFinish = () => {
    setState({ ...state, finished: true });
  };

  const setAnswer = (index: number, value: boolean) => {
    const newCounter = [...state.answers];
    newCounter[index] = value;
    setState({ ...state, answers: newCounter });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleStart,
        handleCancel,
        handleFinish,
        setAnswer,
        counter: state.answers.filter(Boolean).length,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
