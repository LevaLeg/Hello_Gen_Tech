// Задача. Вывести ко-во заблокированных юзеров не из China
db.users.countDocuments({
  is_blocked: true,
  country: { $ne: "China" },
});
