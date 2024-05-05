import { createContext, useState } from 'react';

export const noteContext = createContext(null);

export const ContextProvider = (props) => {
  let NewData = JSON.parse(localStorage.getItem('todo')) || [
    {
      body: 'I have to go college',
      status: false,
    },
  ];
  const [note, setnote] = useState(NewData);

  return <noteContext.Provider value={{ note, setnote }}>{props.children}</noteContext.Provider>;
};
