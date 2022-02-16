import db from "./connection";

export function getProductData() {
  const SELECT_PRODUCTS = `SELECT * FROM products`;
  return db.query(SELECT_PRODUCTS).then((result) => {
    return result.rows;
  });
}

// GET POSTS //
// function getPosts() {
//   const SELECT_POSTS = `SELECT * FROM posts`;
//   return db.query(SELECT_POSTS).then((result) => {
//     // console.log(result.rows);
//     return result.rows;
//   });
// }
