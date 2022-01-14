const testArray = [1, 2, 4, 8];
const testObject = {'age': 5, 'id': 12, 'home': 21};

const myEach = (collection, callback) => {
  const array = Object.values(collection);
  const iterator = (i) => {
    if (i < array.length) {
      callback(array[i]);
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return collection;
}

const myMap = (collection, callback) => {
  const array = Object.values(collection);
  const mappedArray = [];
  const iterator = (i) => {
    if (i < array.length) {
      mappedArray.push(callback(array[i]));
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return mappedArray;
}

const myReduce = (collection, callback, acc) => {
  const array = Object.values(collection);
  let result;
  const iterator = (i, counter) => {
    if (i < array.length) {
      result = callback(counter, array[i], array);
      i++;
      iterator(i, result);
    }
  };
  if (acc == undefined) {
    iterator(1, array[0])
  } else {
    iterator(0, acc)
  };
  return result;
}

const myFind = (collection, predicate) => {
  const array = Object.values(collection);
  let result;
  const iterator = (i) => {
    if (i < array.length) {
      if (predicate(array[i])) {
        result = array[i];
      } else {
        i++;
        iterator(i);
      }
    }
  };
  iterator(0);
  return result;
}

const myFilter = (collection, predicate) => {
  const array = Object.values(collection);
  let result = [];
  const iterator = (i) => {
    if (i < array.length) {
      if (predicate(array[i])) {
        result.push(array[i]);
      }
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return result;
}

const mySize = (collection) => {
  const array = Object.keys(collection);
  let result = 0;
  const iterator = (i) => {
    if (array[i] != undefined) {
      result++;
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return result;
}

const myFirst = (array, n = 1) => {
  if (n === 1) {
    return array[0];
  }
  let result = [];
  const iterator = (i) => {
    if (i < n) {
      result.push(array[i]);
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return result;
}

const myLast = (array, n = 1) => {
  if (n === 1) {
    return array[array.length - 1];
  }
  let result = [];
  const iterator = (i) => {
    if (i < n) {
      result.push(array[array.length - (n - i)]);
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return result;
}

const mySortBy = (array, callback) => {
  const sortArray = [...array];
  const iterator = (i, j, k = 1) => {
    if (i < j) {
      if (callback(sortArray[i]) > callback(sortArray[j - k])) {
        let n = sortArray[j-k];
        sortArray.splice(j-k, 1);
        sortArray.splice(i, 0, n);
        k = 1;
        iterator(i, j, k);
      } else {
        if (k + i < j) {
          k++;
          iterator(i, j, k);
        } else {
          i++;
          k = 1;
          iterator(i, j, k);
        }
      }
    }
  };
  iterator(0, sortArray.length);
  return sortArray;
}

const myFlatten = (array, shallow, newArr=[]) => {
  const sortArray = [...array];
  const iterator = (i) => {
    if (i < sortArray.length) {
      if (typeof sortArray[i] != 'object') {
        newArr.push(sortArray[i]);
      } else {
        if (shallow) {
          for (let j = 0; j < sortArray[i].length; j++) {
            newArr.push(sortArray[i][j]);
          }
        } else {
          myFlatten(sortArray[i], false, newArr);
        }
      }
      i++;
      iterator(i);
    }
  };
  iterator(0);
  return newArr;
}

const myKeys = (object) => {
  const keyArray = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keyArray.push(key);
    }
  };
  return keyArray;
}

const myValues = (object) => {
  const valueArray = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      valueArray.push(object[key]);
    }
  };
  return valueArray;
}