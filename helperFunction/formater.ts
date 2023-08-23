export function amountWithComma(amount: number) {
  return Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(Math.abs(amount));
}
