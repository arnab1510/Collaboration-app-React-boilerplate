import { SET_ACTIVE_TAB, SET_HIDE_SECSIDEBAR } from "../actions/types";

const utilities = (
  state = {
    status: undefined,
    activeTab: 1,
    showSecSidebar: true
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return Object.assign({}, state, { status: 'success', activeTab: action.data });
    case SET_HIDE_SECSIDEBAR:
        return Object.assign({}, state, { status: 'success', showSecSidebar: false });
    default:
      return state;
  }
};

export default utilities;
