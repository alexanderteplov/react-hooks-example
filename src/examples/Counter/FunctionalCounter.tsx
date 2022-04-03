import { Card, CardContent, Box, IconButton, Chip } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { styles } from './styles';
import { TCounterProps } from './types';

export const Counter = ({ counterValue: value, counterInfo: { date, author }, onIncrement, onDecrement }: TCounterProps) => {
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
