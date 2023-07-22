module.exports = () => {
  const data = {
    transaction: [],
  };

  const categories = [
    "Transportation",
    "Movies",
    "Education",
    "Grocery",
    "clothing",
    "Health & Medicine",
    "Misc",
    "Recharge",
  ];

  for (let i = 0; i < 500; i++) {
    data.transaction.push({
      id: i,
      type: getRandomInteger(10, 10000) % 2 === 0 ? "Income" : "Expense",
      amount: getRandomInteger(10, 2000),
      categories: `${categories[getRandomInteger(0, 7)]}`,
      date: `${getRandomInteger(1, 31)}-${getRandomInteger(1, 12)}-${2023}`,
    });
  }

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return data;
};
