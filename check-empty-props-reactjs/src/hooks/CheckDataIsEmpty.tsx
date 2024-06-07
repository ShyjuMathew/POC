export const CheckDataIsEmpty = (props : object) : boolean => {
  if (!props) {
    return false;
  }
  return !Object?.values(props).some(
    (x) =>
      x !== null &&
      x !== "" &&
      x !== false &&
      x !== undefined &&
      !(typeof x === "object" && !Array.isArray(x) && CheckDataIsEmpty(x)) &&
      !(Array.isArray(x) && x.length === 0) &&
      !(
        Array.isArray(x) &&
        x.every((y) => {
          return CheckDataIsEmpty(y);
        })
      )
  );
};