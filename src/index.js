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
  if (!incrementor.cnt)  incrementor.cnt = 0;

  function incrementValue() {
    incrementor.cnt += 1;
    return incrementValue;
  }
  incrementValue.valueOf = () => {
    return ++incrementor.cnt;
  };

  return incrementValue;
};

const asyncIncrementor = () => {
  if (!asyncIncrementor.cnt)  asyncIncrementor.cnt = 0;
  
  let asyncIncProm = new Promise((resolve, reject) => {
    resolve(++asyncIncrementor.cnt);
  });
  return asyncIncProm;
};

const createIncrementer = () => {
  const incMaker = function*(){
    let index = 0;
    while(true){
      yield ++index;
    }
  }
  return incMaker();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (returnedParam) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(returnedParam);
    }, 1000);
    setTimeout(() => {
      reject("время вышло!");
    }, 2000);    
  })
};
const getDeepPropertiesCount = (object) => {
  let result = 0;

  const helper = (obj) => {
    for(let subObj in obj) {
      result++;
      helper(obj[subObj]);
    }
  }

  helper(object);
  return result;
};
const createSerializedObject = () => {
  return new String("{a:1}");
};
const toBuffer = () => {};
const sortByProto = (arr) => {
  return arr.sort((a, b) => {
    b.__proto__ - a.__proto__;
  })
};

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