db.users.updateMany(
    { 
      is_blocked: {$ne: true}, 
      country: { $nin: ["France", "Germany"] }
    },
    { 
      $inc: { balance: 100 } 
    }
  )