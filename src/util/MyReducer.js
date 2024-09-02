// 여기로 옮김으로써 재활용 높아짐
export const myReducer = (state, action) => {
  console.log(state);
  console.log(action);

  if(action === "increase") {
    state = {value: state.value + 1};
  } else if (action === "decrease") {
    state = {value: state.value - 1};
  } else if (action === "reset") {
    state = {value: 0}
  }

  return state;
}