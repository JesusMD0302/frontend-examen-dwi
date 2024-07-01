"use client";

import { createContext, useCallback, useMemo, useState } from "react";

// Define the initial state of the app
const initialState = {
  // Add your initial state properties here
  started: false,
  finished: false,
  answers: [] as boolean[],
  counter: 0,
  handleStart: () => {},
  handleCancel: () => {},
  setAnswer: (value: boolean) => {},
  handleFinish: () => {},
};

// Create the context
export const AppContext = createContext(initialState);

// Create a provider component to wrap your app with
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  // Add any state update functions here
  const handleStart = useCallback(() => {
    setState({ ...state, started: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = useCallback(() => {
    setState({ ...state, started: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFinish = useCallback(() => {
    setState({ ...state, finished: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const setAnswer = useCallback(
    (value: boolean) => {
      const newAnswers = [...state.answers, value];
      setState({
        ...state,
        answers: newAnswers,
        counter: newAnswers.filter(Boolean).length,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [state]
  );

  const value = useMemo(() => {
    return {
      ...state,
      handleStart,
      handleCancel,
      handleFinish,
      setAnswer,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, handleStart, handleCancel, handleFinish, setAnswer]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
