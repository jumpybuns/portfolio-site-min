import { ACTIONS } from "./Actions";

const reducerDM = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.DARK_MODE:
      return { isDark: !state.isDark };
    default:
      return state;
  }
};

export default reducerDM;
