import { SET_ACTIVE_TAB, SET_CURRENT_URL, SET_HIDE_DOCHEADER, SET_HIDE_SECSIDEBAR, SET_HIDE_SIDEBAR, SET_MAX_SEC_SIDEBAR, SET_MIN_SEC_SIDEBAR, SET_SHOW_DOCHEADER, SET_SHOW_SECSIDEBAR, SET_SHOW_SIDEBAR } from "../actions/types";

const utilities = (
  state = {
    status: undefined,
    activeTab: 1,
    showSecSidebar: true,
    showSidebar: true,
    showDocheader: false,
    minSecSidebar: false,
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
    case SET_HIDE_SIDEBAR:
        return Object.assign({}, state, { status: 'success', showSidebar: false });
    case SET_SHOW_SIDEBAR:
      return Object.assign({}, state, { status: 'success', showSidebar: true});
    case SET_MIN_SEC_SIDEBAR:
        return Object.assign({}, state, { status: 'success', minSecSidebar: true});
    case SET_MAX_SEC_SIDEBAR:
        return Object.assign({}, state, { status: 'success', minSecSidebar: false});
    case SET_HIDE_DOCHEADER:
        return Object.assign({}, state, { status: 'success', showDocheader: false });
    case SET_SHOW_DOCHEADER:
      return Object.assign({}, state, { status: 'success', showDocheader: true});
    case SET_CURRENT_URL:
      return Object.assign({}, state, { status: 'success', url: action.data});
    default:
      return state;
  }
};

export default utilities;
