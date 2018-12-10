const initialState = {
  timer: undefined,
  // timerFunction: undefined,
  isRunning: false
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        timer: action.timer,
        isRunning: true
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
