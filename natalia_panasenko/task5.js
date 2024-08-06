//Задача. Вывести ко-во треков с продолжительностью до 30 мин (вкл.)


db.trecks.countDocuments(
  {
      duration_secs: { $lte: 30 * 60 }
  }
)