import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({name: 'places.db'});

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        () => {
          resolve();
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)',
        [title, imageUri, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

export const fetchPlaces = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          resolve(result);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};
