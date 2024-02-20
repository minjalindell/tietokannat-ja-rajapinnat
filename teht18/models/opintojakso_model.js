const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where idopintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
      [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idopintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Koodi=?,Laajuus=?, nimi=? where idopintojakso=?',
      [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;