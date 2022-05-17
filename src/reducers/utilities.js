import { SET_ACTIVE_TAB } from "../actions/types";

const utilities = (
  state = {
    status: undefined,
    activeTab: 1,
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return Object.assign({}, state, { status: 'success', activeTab: action.data });
    default:
      return state;
  }
};

export default utilities;
