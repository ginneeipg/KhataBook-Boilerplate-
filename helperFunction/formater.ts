export function amountWithComma(amount: number) {
  return Intl.NumberFormat("en-IN", {}).format(Math.abs(amount));
}
