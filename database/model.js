import db from "./connection";

export function getProductData() {
  const SELECT_PRODUCTS = `SELECT * FROM products`;
  return db.query(SELECT_PRODUCTS).then((result) => {
    return result.rows;
  });
}

export function getAllIds() {
  const SELECT_ALL_IDs = `SELECT id FROM products`;
  return db.query(SELECT_ALL_IDs).then((result) => {
    return result.rows;
  });
}

export function getUniqueProduct(id) {
  const SELECT_UNIQUE = `SELECT * FROM products WHERE id = $1`;
  return db.query(SELECT_UNIQUE, [id]).then((result) => {
    return result.rows;
  });
}
