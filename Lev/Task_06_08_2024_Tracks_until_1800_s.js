db.tracks.countDocuments(
    {  duration_secs: {lte: 1800}
    }
  ) 