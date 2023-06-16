const UPDATE_STATE = "UPDATE_STATE";
const RESET_STATE = "RESET_STATE";

const defaultState = {
  form: {
    name: "",
    email: "",
    address: "",
    mobile: "",
  },
  tags: [],
  edInput: [{ Institute: "", Year: "", Degree: "" }],
  exInput: [{ Company: "", Year: "", Designation: "" }],
};

/**
 * ACTIONS
 * @param {*} state
 * @returns
 */

export function update(state) {
  return {
    type: UPDATE_STATE,
    state,
  };
}

export function reset() {
  return {
    type: RESET_STATE,
    defaultState,
  };
}

/**
 * REDUCERS
 * @param {*} state
 * @param {*} action
 * @returns
 */

function profileReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, ...action.state };
    case RESET_STATE:
      return {
        ...state,
        ...defaultState,
        edInput: [{ Institute: "", Year: "", Degree: "" }],
        exInput: [{ Company: "", Year: "", Designation: "" }],
      };
    default:
      return state;
  }
}

export default profileReducer;
