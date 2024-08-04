db.users.find(
    { 
      is_blocked: { $ne: true }, 
      country: { $nin: ["China", "France"] },
      balance: { $gt: 0, $lt: 1000 }
    },
    { fullname: 1, balance: 1, _id: 0 }
  )