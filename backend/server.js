const express = require('express');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const categories = JSON.parse(fs.readFileSync('./data/categories.json'));
const items = JSON.parse(fs.readFileSync('./data/products.json'));
const topSaleIds = [66, 65, 73];
const moreCount = 6;

const itemBasicMapper = item => ({
    id: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    images: item.images,
});

const randomNumber = (start, stop) => {
    return Math.floor(Math.random() * (stop - start + 1)) + start;
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/top-sales', (req, res) => {
    const topSales = items.filter(o => topSaleIds.includes(o.id)).map(itemBasicMapper);
    fortune(res, topSales);
});

app.get('/api/categories', (req, res) => {
    fortune(res, categories);
});

app.get('/api/items', (req, res) => {
    const { categoryId, offset, q } = req.query;

    const categoryIdNum = categoryId === undefined ? 0 : Number(categoryId);
    const offsetNum = offset === undefined ? 0 : Number(offset);
    const query = q === undefined ? '' : q.trim().toLowerCase();

    const filtered = items
        .filter(o => categoryIdNum === 0 || o.category === categoryIdNum)
        .filter(o => o.title.toLowerCase().includes(query) || o.color.toLowerCase() === query)
        .slice(offsetNum, offsetNum + moreCount)
        .map(itemBasicMapper);

    fortune(res, filtered);
});

app.get('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(o => o.id === id);
    if (!item) {
        fortune(res, 'Not found', 404);
    } else {
        fortune(res, item);
    }
});

app.post('/api/order', (req, res) => {
    const { phone, address, items } = req.body;
    if (typeof phone !== 'string' || typeof address !== 'string' || !Array.isArray(items)) {
        fortune(res, 'Bad Request', 400);
        return;
    }
    if (!items.every(({ id, price, count }) => typeof id === 'number' && id > 0 && typeof price === 'number' && price > 0 && typeof count === 'number' && count > 0)) {
        fortune(res, 'Bad Request', 400);
        return;
    }
    fortune(res, null, 204);
});

const fortune = (res, body = null, status = 200) => {
    // Uncomment for delay
    // const delay = randomNumber(1, 10) * 1000;
    const delay = 0;
    setTimeout(() => {
        res.status(status).json(body);
    }, delay);
};

const port = process.env.PORT || 7070;
app.listen(port, () => console.log('Сервер запущен!'));
