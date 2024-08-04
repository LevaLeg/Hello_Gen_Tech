db.users.updateMany(
    {
        country: { $in: 'China', is_blocked: true }
    },
    {
        $set: {is_blocked : false},
        $inc: { balance: 50 }
    }
)