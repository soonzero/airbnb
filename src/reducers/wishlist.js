export default function wishlist(currentState, action) {
  if (currentState === undefined) {
    return [];
  }

  const newState = { ...currentState };
  if (action.type === "ADD_WISHLIST") {
  } else if (action.type === "DELETE_WISHLIST") {
  }
  return newState;
}
