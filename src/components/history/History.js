const initialState = {
  history: [],
  requestParams: {},
  data: null,
};

function historyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD-TO-HISTORY":
      const history = [...state.history, payload.history];
      const requestParams = payload.history;
      const data = payload.resData;
      return { history, requestParams, data };
    default:
      return state;
  }
}

function historyAction(history, resData) {
  return {
    type: "ADD-TO-HISTORY",
    payload: { history, resData },
  };
}
export { initialState, historyAction, historyReducer };

// module.exports = {
//   initialState,
//   historyReducer,
//   historyAction,
// };
