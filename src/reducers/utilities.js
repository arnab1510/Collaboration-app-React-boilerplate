import { SET_ACTIVE_TAB, SET_CURRENT_URL, SET_HIDE_SECSIDEBAR, SET_SHOW_SECSIDEBAR } from "../actions/types";

const utilities = (
  state = {
    status: undefined,
    activeTab: 1,
    showSecSidebar: true,
    url: '/'
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return Object.assign({}, state, { status: 'success', activeTab: action.data });
    case SET_HIDE_SECSIDEBAR:
        return Object.assign({}, state, { status: 'success', showSecSidebar: false });
    case SET_SHOW_SECSIDEBAR:
      return Object.assign({}, state, { status: 'success', showSecSidebar: true});
    case SET_CURRENT_URL:
      return Object.assign({}, state, { status: 'success', url: action.data});
    default:
      return state;
  }
};

export default utilities;
