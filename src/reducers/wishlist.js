export default function wishlist(currentState, action) {
  if (currentState === undefined) {
    return [];
  }

  const newState = [...currentState];

  if (action.type == "ADD_WISHLIST") {
    newState.push({
      title: action.data.title,
      cover: action.data.cover,
      rate: action.data.rate,
      reviews: action.data.reviews,
      price: action.data.price,
      country: action.data.country,
    });
    return newState;
  } else if (action.type == "DELETE_WISHLIST") {
    const title = action.data;
    const filteredList = newState.filter((_, i) => {
      return newState[i].title !== title;
    });
    return filteredList;
  }
  return newState;
}
