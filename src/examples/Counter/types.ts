export type TCounterInfo = {
  date: Date,
  author: string,
}

export type TCounterProps = {
  counterValue: number,
  counterInfo: TCounterInfo,
  onIncrement: VoidFunction,
  onDecrement: VoidFunction,
}
