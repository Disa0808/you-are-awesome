// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propName) => {
    return propName;
};

const createNotEnumerableProperty = (propName) => {
  Object.defineProperty(
    Object.prototype, propName, 
    {
      enumerable: false,
      value: 'value'
    });
  return propName;
};

const createProtoMagicObject = () => {
  let magicObj = function(){};
  magicObj.__proto__ = magicObj.prototype;
  return magicObj;
};

const incrementor = () => {
  incrementor.cnt = incrementor.cnt || 0;

  function incrementValue() {
    incrementor.cnt += 1;
    return incrementValue;
  }
  incrementValue.toString = () => {
    return ++incrementor.cnt;
  };

  return incrementValue;
};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;