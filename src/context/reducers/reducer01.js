const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST_DISPATCH_01':
      return {
        ...state,
        test: `${state.test.replace(' 01', '').replace(' 02', '')} 01`,
      }
    default:
      return state
  }
}

export default reducer
