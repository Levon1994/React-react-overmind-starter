import { createContext, useState } from 'react';

const contextDefaultValues = {
  progress: false,
  addProgress: () => null,
};

export const LoaderContext = createContext(contextDefaultValues);

export const LoaderProvider = ({ children }) => {
  const [progress, setProgress] = useState(contextDefaultValues.progress);

  const addProgress = newVal => setProgress(newVal);

  return <LoaderContext.Provider value={{ progress, addProgress }}>{children}</LoaderContext.Provider>;
};
