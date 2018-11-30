module.exports = str => {
  return RegExp(/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/g).test(str);
};
