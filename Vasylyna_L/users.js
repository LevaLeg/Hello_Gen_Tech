db.users.updateMany(
    {
        is_blocked: true,
        country: 'China'
    }, 
    {
        $unset: { is_blocked: null },
        $inc: { balance: 50 }
    } 
)
