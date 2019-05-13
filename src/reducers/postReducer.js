export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
      break;
    default:
      return state;
  }
};

//console.log(_.chunk(["a", "b", "c", "d"], 2));
