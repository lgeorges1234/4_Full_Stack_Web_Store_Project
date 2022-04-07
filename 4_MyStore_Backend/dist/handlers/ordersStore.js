"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOrder = void 0;
const orders_1 = require("../models/orders");
const store = new orders_1.OrderStore();
const index = async (_req, res) => {
    try {
        const indexResult = await store.index();
        res.json(indexResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const show = async (req, res) => {
    try {
        const showResult = await store.show(req.params.id);
        res.json(showResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const create = async (req, res) => {
    const order = {
        status: req.body.status,
        user_id: req.body.user_id,
    };
    try {
        const createResult = await store.create(order);
        res.json(createResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const destroy = async (req, res) => {
    try {
        const deleteResult = await store.delete(req.params.id);
        res.json(deleteResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const addProduct = async (req, res) => {
    const orderProducts = {
        order_id: req.params.id,
        product_id: req.body.product_id,
        quantity: parseInt(req.body.quantity, 10),
    };
    try {
        const addProductResult = await store.addProduct(orderProducts);
        res.json(addProductResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const indexProduct = async (req, res) => {
    try {
        const editProductResult = await store.indexProduct();
        res.json(editProductResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const editProduct = async (req, res) => {
    const orderId = req.params.id;
    try {
        const editProductResult = await store.editProduct(orderId);
        res.json(editProductResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const updateProduct = async (req, res) => {
    const orderProducts = {
        order_id: req.params.id,
        product_id: req.params.product_id,
        quantity: parseInt(req.body.quantity, 10),
    };
    try {
        const updatProductResult = await store.updateProduct(orderProducts);
        res.json(updatProductResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const removeProduct = async (req, res) => {
    const orderId = req.params.id;
    const productId = req.params.product_id;
    try {
        const removedProductResult = await store.removeProduct(orderId, productId);
        res.json(removedProductResult);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const verifyOrder = async (req, res, next) => {
    try {
        if (req.body.quantity && req.body.order_id && req.body.product_id) {
            next();
        }
        else {
            throw new Error('Incorrect parameters');
        }
    }
    catch (error) {
        res.status(401);
        res.json({ error });
    }
};
exports.verifyOrder = verifyOrder;
const verifyId = async (req, res, next) => {
    try {
        const results = await store.index();
        const existingId = results.filter((result) => result.id ===
            parseInt(req.params.id, 10));
        if (existingId.length) {
            next();
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        res.status(401);
        res.json({ error });
    }
};
const ordersRoutes = (app) => {
    app.get('/orders', index);
    app.get('/orders/:id', verifyId, show);
    app.post('/orders', create);
    app.delete('/orders/:id', verifyId, destroy);
    // add, update, edit and remove product to an order
    app.post('/orders/:id/products', addProduct);
    app.get('/orders/products', indexProduct);
    app.get('/orders/:id/products', editProduct);
    app.patch('/orders/:id/products/:product_id', updateProduct);
    app.delete('/orders/:id/products/:product_id', removeProduct);
};
exports.default = ordersRoutes;
