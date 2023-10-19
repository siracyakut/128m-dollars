export function formatMoney(money) {
  const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(money);
}
