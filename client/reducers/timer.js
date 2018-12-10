const initialState = {
  timer: undefined,
  // timerFunction: undefined,
  isRunning: false,
  count: 0
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        timer: action.timer,
        isRunning: true,
        count: 0
      };
    case "UPDATE_COUNT":
      return {
        ...state,
        count: action.count
      };
    case "STOP_TIMER":
      return {
        ...state,
        isRunning: false
      };
    default:
      return state;
  }
}
