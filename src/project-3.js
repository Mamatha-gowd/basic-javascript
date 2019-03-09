// Do not change any of the function names

const makeCat = (name, age) => ({
  name,
  age,
  meow: () => "Meow!"
});

const addProperty = (object, property) => {
  object[property] = null;
  return object;

};

const invokeMethod = (object, method) => {
  object[method]();
};

const multiplyMysteryNumberByFive = mysteryNumberObject => {
  mysteryNumberObject["mysteryNumber"] *= 5;
  return mysteryNumberObject["mysteryNumber"];
};


const deleteProperty = (object, property) => {
  delete object[property];
  return object;
};

const newUser = (name, email, password) => ({
  name,
  email,
  password
});

const hasEmail = user => user.hasOwnProperty("email") && user.email !== "";

const hasProperty = (object, property) => object.hasOwnProperty(property);

const verifyPassword = (user, password) => user.password === password;

const updatePassword = (user, newPassword) => {
  user["password"] = newPassword;
  return user;
};

const addFriend = (user, newFriend) => {

  user["friends"].push(newFriend);
  return user;
};

const setUsersToPremium = users => {
  users.map(user => (user.isPremium = true));
  return users;
};

const sumUserPostLikes = user => {
  return user["posts"].map(post => post.likes).reduce((acc, val) => acc + val);
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
};

const addCalculateDiscountPriceMethod = storeItem => {
  storeItem["calculateDiscountPrice"] = function() {
    return this.price - this.price * this.discountPercentage;
  };

  return storeItem;
  // Add a method to the storeItem object called 'calculateDiscountPrice'
  // This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // The method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  // Make sure you return storeItem after adding the method to it
  // hint: arrow functions don't bind a this

};

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
};
