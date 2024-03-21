const express = require('express');
const fs = require('fs');
const cors = require('cors');

const categories = JSON.parse(fs.readFileSync('./data/categories.json'));
const items = JSON.parse(fs.readFileSync('./data/products.json'));
const topSaleIds = [66, 65, 73];
const moreCount = 6;

const app = express();
app.use(express.json());
app.use(cors()); 
const port = 8080;

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

app.get('/api/top-sales', (req, res) => {
    try {
        const topSales = items.filter(o => topSaleIds.includes(o.id)).map(itemBasicMapper);
        res.json(topSales)
      } catch (error) {
        res.status(500).json({
          message: "Не удалось выгрузить данные>",
        });
      }
    
});
    

app.get('/api/categories', (req, res) => {
    try {
        res.json(categories)
      } catch (error) {
        res.status(500).json({
          message: "Не удалось выгрузить данные>",
        });
      }
    
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
  
    res.json(filtered); // Отправляем отфильтрованные данные в формате JSON с помощью метода res.json()
  });

  app.get('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(o => o.id === id);
    if (!item) {
      res.status(404).json({ error: 'Not found' }); // Отправляем ошибку 404 с помощью метода res.status и res.json()
    } else {
      res.json(item); // Отправляем данные item в формате JSON с помощью метода res.json()
    }
  });

  app.post('/api/order', (req, res) => {
    const { phone, address, items } = req.body;
    if (typeof phone !== 'string' || typeof address !== 'string' || !Array.isArray(items)) {
      res.status(400).json({ error: 'Bad Request' }); // Отправляем ошибку 400 с помощью метода res.status и res.json()
      return;
    }
    if (!items.every(({ id, price, count }) => typeof id === 'number' && id > 0 && typeof price === 'number' && price > 0 && typeof count === 'number' && count > 0)) {
      res.status(400).json({ error: 'Bad Request' }); // Отправляем ошибку 400 с помощью метода res.status и res.json()
      return;
    }
    res.status(204).end(); // Отправляем успешный статус 204 без тела ответа с помощью метода res.status и res.end()
  });

app.listen(port, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log(`Сервер запущен! Слушаю порт ${port}`);
  });