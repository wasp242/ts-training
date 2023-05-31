const getHiddenCard = (a: string, b = 4): string => {
  let res = "";
  for (let i = 0; i < b; i++) {
    res += "*";
  }
  res += a.split("").slice(-4).join("");
  return res;
};

console.log(getHiddenCard("1234567812345678", 2));
export default getHiddenCard;
