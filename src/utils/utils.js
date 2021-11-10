const getContentsLength = (arr, keys) => {
  const [key, ...otherKeys] = keys;
  console.log(key, otherKeys);
  if (!otherKeys.length) return 0;
  if (otherKeys.length === 1) {
    return arr[key]?.contents?.length;
  } else return getContentsLength(arr[key].contents, otherKeys);
};

const getLastIndex = (arr) => arr.length - 1;

const getConcatedPath = (arr, keys, concatedPath = "") => {
  const [key, ...otherKeys] = keys;
  if (!otherKeys.length) {
    return `${concatedPath}${arr[key].name}`;
  } else {
    const a = `${concatedPath}${arr[key].name}/`;
    return getConcatedPath(arr[key].contents, otherKeys, a);
  }
};

export { getContentsLength, getLastIndex, getConcatedPath };
