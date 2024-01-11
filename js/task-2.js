function calcAverageCalories(days) {
  // Перевірка на пустий масив
  if (days.length === 0) {
    return 0;
  }

  // Сума калорій за тиждень
  const totalCalories = days.reduce((total, day) => total + day.calories, 0);

  // Середнє значення калорій за день
  const averageCalories = totalCalories / days.length;

  // Округлення середньодобового значення до цілого числа
  return Math.round(averageCalories);
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
);

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
);

console.log(calcAverageCalories([]));
