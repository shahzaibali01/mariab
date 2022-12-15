let initial_state = null;

const brandsData = (state = initial_state, actions) => {
  switch (actions.type) {
    case "ADD_BRANDS_DATA":
      return (state = actions.payload);
      break;

    default:
      return state;
      break;
  }
};

export default brandsData;
