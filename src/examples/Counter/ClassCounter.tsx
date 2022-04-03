import { PureComponent } from 'react';
import { Box, Chip, IconButton, Card, CardContent } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { TCounterProps } from './types';
import { styles } from './styles';

export class Counter extends PureComponent<TCounterProps> {
  render() {
    const { counterValue: value, counterInfo: { date, author }, onIncrement, onDecrement } = this.props;

    return (
      <Card sx={styles.root} elevation={5}>
        <CardContent sx={styles.content}>
          <div>{date.toLocaleString()}</div>
          <Box>
            <IconButton onClick={onDecrement} aria-label="remove">
              <RemoveIcon />
            </IconButton>
            <Box padding={1} component="span" >
              <Chip label={value} />
            </Box>
            <IconButton onClick={onIncrement} aria-label="add">
              <AddIcon />
            </IconButton>
          </Box>
          <div>Has just been rated by: {author}</div>
        </CardContent>
      </Card>
    )
  }
}
