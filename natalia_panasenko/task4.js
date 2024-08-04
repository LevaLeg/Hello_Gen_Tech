//Задача. Вывести имена и баланс не заблокированных юзеров не из China и не из France, если их баланс находится в диапазоне значений от 10 до 1000 (не вкл.)


db.users.find(
  {
      is_blocked: { $ne: true },
      country: { $nin: ['China', 'France'] },
      balance: { $gt: 10, $lt: 1000 }
  },
  {
      fullname: 1,
      balance: 1,
      _id: 0
  }
)