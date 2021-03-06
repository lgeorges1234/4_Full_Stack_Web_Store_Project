/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import supertest from 'supertest';
import { Product } from '../../models/products';
import { User } from '../../models/users';
import app from '../../server';

const request = supertest(app);

let product: Product;
let noProduct: Object;
let user: User;
let token: String;

let createResponse: supertest.Response;

describe('productsRoutes', () => {
  beforeAll(async () => {
    product = {
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      category: "Library"
    };
    noProduct = {
      surname: 'Tintin',
      price: 12000,
      category: 'car',
    };
    user = {
      firstname: 'Jean-Claude',
      lastname: 'Van Damme',
      password_digest: 'kickboxer',
    };
    const createUserResponse = await request
      .post('/users')
      .send(user)
      .set('Accept', 'application/json');
    token = createUserResponse.body;
  });
  afterAll(async () => {
    const indexUserResponse = await request.get('/users').set({
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    });
    await request.delete(`/users/${indexUserResponse.body[0].id}`).set({
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    });
  });
  describe('CREATE POST /products', () => {
    it('wrong product settings should return an error', async () => {
      const createErrorResponse = await request
        .post('/products')
        .send(noProduct)
        .set({
          Authorization: `bearer ${token}`,
          'Content-Type': 'application/json',
        });
      expect(createErrorResponse.status).toBe(401);
      expect(createErrorResponse.error).toBeTruthy;
    });
    it('correct product settings should return a new created product', async () => {
      createResponse = await request
        .post('/products')
        .send(product)
        .set({
          Authorization: `bearer ${token}`,
          'Content-Type': 'application/json',
        });
      expect(createResponse.status).toBe(200);
      expect(createResponse.body).toEqual({
        id: createResponse.body.id,
        name: product.name,
        price: product.price,
        url: product.url,
        description: product.description,
        category: product.category,
      });
    });
    xit('correct product settings with no jwt token should return an error', async () => {
      const createErrorResponse = await request
        .post('/products')
        .send(product)
        .set('Accept', 'application/json');
      expect(createErrorResponse.status).toBe(401);
      expect(createErrorResponse.error).toBeTruthy;
    });
  });

  describe('EDIT GET /products', () => {
    it('should return all created products', async () => {
      const indexResponse = await request
        .get('/products')
        .set('Accept', 'application/json');
      expect(indexResponse.status).toBe(200);
      expect(indexResponse.body).toEqual([
        {
          id: createResponse.body.id,
          name: product.name,
          price: product.price,
          url: product.url,
          description: product.description,
          category: product.category,
        },
      ]);
    });
  });

  describe('SHOW GET /products/{id}', () => {
    it('wrong product id number should return an error', async () => {
      const showErrorResponse = await request.get(`/products/56`);
      expect(showErrorResponse.status).toBe(401);
      expect(showErrorResponse.error).toBeTruthy;
    });
    it('correct product id number should return the product', async () => {
      const showResponse = await request.get(
        `/products/${createResponse.body.id}`
      );
      expect(showResponse.status).toBe(200);
      expect(showResponse.body).toEqual({
        id: createResponse.body.id,
        name: product.name,
        price: product.price,
        url: product.url,
        description: product.description,
        category: product.category,
      });
    });
  });

  describe('Delete DELETE /products/{id}', () => {
    it('wrong product id number should return an error', async () => {
      const deleteErrorResponse = await request.delete(`/products/56`);
      expect(deleteErrorResponse.status).toBe(401);
      expect(deleteErrorResponse.error).toBeTruthy;
    });
    it('correct product id number should delete the product', async () => {
      const deleteResponse = await request
        .delete(`/products/${createResponse.body.id}`)
        .set({
          Authorization: `bearer ${token}`,
          'Content-Type': 'application/json',
        });
      const indexResponse = await request
        .get('/products')
        .set('Accept', 'application/json');
      expect(deleteResponse.status).toBe(200);
      expect(indexResponse.body).toEqual([]);
    });
  });
});