type format = number | undefined | null;
const formatPrice = (a?: format): string => {
  return a !== undefined && a !== null ? `$ ${a && a.toFixed(2)}` : "$ 0.00";
};
console.log(formatPrice());
