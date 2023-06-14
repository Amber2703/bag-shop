import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export default createContext({
    color: 1, 
    size: 1, 
    count: 1,
    setColor: () => Promise.resolve(null),
    setSize: () => Promise.resolve(null),
    setCount: () => Promise.resolve(null),
})