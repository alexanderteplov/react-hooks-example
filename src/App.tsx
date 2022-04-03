import { useCallback, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';

import { Counter } from './examples/Counter/ClassCounter';
import './App.css';
import { AUTHORS } from './constants';
import { getRandomEl } from './utils';
import { Box } from '@mui/material';

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}

const counterInfo = {
  date: new Date(),
  author: getRandomEl(AUTHORS),
};

function App() {
  const [counter, setCounter] = useState(1);
  const [updateCounter, setUpdateCounter] = useState(0);

  const incrementHandler = useCallback(() => {
    setCounter(counter => counter + 1);
  }, []);

  const decrementHandler = useCallback(() => {
    setCounter(counter => counter - 1);
  }, []);

  const intervalId = useRef<number | null>(null);

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setUpdateCounter(updateCounter => updateCounter + 1);
      counterInfo.date = new Date();
      counterInfo.author = getRandomEl(AUTHORS);
    }, 1000);

    return () => window.clearInterval(intervalId.current!);
  }, []);

  return (
    <Box sx={styles.root}>
      <Box p={2}>Hi! App updated {updateCounter} times.</Box>
      <Counter counterValue={counter} counterInfo={counterInfo} onIncrement={incrementHandler} onDecrement={decrementHandler} />
    </Box>
  );
}

export default observer(App);
