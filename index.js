const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const API_KEY = 'rnd_F3lI2rgdnDrkOm32n5oaWQNwUCee';
const apiUrl = 'https://api.render.com/v1/services';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);  //
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'שגיאה בהבאת הנתונים' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
