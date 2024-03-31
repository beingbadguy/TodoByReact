import { createContext, useState } from 'react';

export const noteContext = createContext(null);

export const ContextProvider = (props) => {
  const [note, setnote] = useState([
    {
      body: 'I have to go college',
      status: false,
    },
  ]);

  return <noteContext.Provider value={{ note, setnote }}>{props.children}</noteContext.Provider>;
};
