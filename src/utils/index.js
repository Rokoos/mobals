export const filterItems = ({ phones, price, brand, storage, memory }) => {
  let tempCollection = [...phones];

  tempCollection = tempCollection.filter((item) => item.price <= price);

  if (brand !== "All") {
    tempCollection = tempCollection.filter((item) => item.company === brand);
  }

  if (storage !== "All") {
    tempCollection = tempCollection.filter(
      (item) => item.storage === parseInt(storage)
    );
  }
  if (memory !== "All") {
    tempCollection = tempCollection.filter(
      (item) => item.memory === parseInt(memory)
    );
  }
  return tempCollection.sort((a, b) => (a.price < b.price ? 1 : -1));
};

export const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const getTotalCartPrice = (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
};
export const cartItemsCount = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

export const getTotalItemPrice = (count, price) => count * price;

export const getMaxPrice = (items) => {
  return Math.max(...items.map((item) => item.price));
};
export const getMinPrice = (items) => {
  return Math.min(...items.map((item) => item.price));
};
