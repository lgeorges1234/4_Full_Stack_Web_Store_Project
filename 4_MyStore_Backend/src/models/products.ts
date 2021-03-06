/* eslint-disable class-methods-use-this */
import client from '../database';

export type Product = {
  id?: Number;
  name: String;
  price: Number;
  url: String;
  description: String;
  category?: String;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const sql = 'SELECT * FROM products';
      const conn = await client.connect();
      const indexResult = await conn.query(sql);
      conn.release();
      return indexResult.rows;
    } catch (error) {
      throw new Error(`Could not get products. Error: ${error}`);
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const conn = await client.connect();
      const showResult = await conn.query(sql, [id]);
      conn.release();
      return showResult.rows[0];
    } catch (error) {
      throw new Error(`Could not get product ${id}. Error: ${error}`);
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const sql =
        'INSERT INTO products (name, price, url, description, category) VALUES($1, $2, $3, $4, $5) RETURNING *';
      const conn = await client.connect();
      const createResult = await conn.query(sql, [
        product.name,
        product.price,
        product.url,
        product.description,
        product.category,
      ]);
      conn.release();
      return createResult.rows[0];
    } catch (error) {
      throw new Error(
        `Could not add new product ${product.name}.Error: ${error}`
      );
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = 'DELETE FROM products WHERE id=($1)';
      const deleteResult = await conn.query(sql, [id]);
      conn.release();
      return deleteResult.rows[0];
    } catch (error) {
      throw new Error(`Could not delete product ${id}. Error: ${error}`);
    }
  }
}
