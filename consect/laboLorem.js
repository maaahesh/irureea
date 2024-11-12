function omit(obj, props) {
  const result = {};
  for (const key in obj) {
    if (!props.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
