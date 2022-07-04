function queryCheck(name, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!name.toLowerCase().includes(arr[i])) return false;
  }
  return true;
}

module.exports = { queryCheck };
