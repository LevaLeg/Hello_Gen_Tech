//Вывести количество заблокированных пользователей не из China:
db.users.countDocuments(
    {
        is_blocked:  true,
        country: { $ne: 'China' }
    }
)