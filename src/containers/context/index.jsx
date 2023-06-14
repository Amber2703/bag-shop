import { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function ContextProvider({ children }) {
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(1);
  const [count, setCount] = useState(1);

  const providerValue = {
    color,
    size,
    count,
    setColor,
    setSize,
    setCount,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
