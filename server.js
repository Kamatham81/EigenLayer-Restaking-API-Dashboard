const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
      message: "✅ EigenLayer Restaking API is Live",
      endpoints: {
        restakers: "/restakers",
        validators: "/validators",
        rewards: "/rewards/:address"
      }
    });
  });
  

// Dummy in-memory data
const restakers = [
  { user: '0xABC', amount: 10, validator: '0xValidator1' },
  { user: '0xDEF', amount: 5, validator: '0xValidator2' }
];

const validators = [
  { id: '0xValidator1', stake: 100, slashHistory: [], status: 'active' },
  { id: '0xValidator2', stake: 50, slashHistory: [{ when: '2023', reason: 'downtime' }], status: 'jailed' }
];

const rewards = {
  '0xABC': { total: 12, breakdown: [{ validator: '0xValidator1', amount: 12 }] }
};

// Endpoints
app.get('/restakers', (req, res) => {
  res.json(restakers);
});

app.get('/validators', (req, res) => {
  res.json(validators);
});

app.get('/rewards/:address', (req, res) => {
  const { address } = req.params;
  res.json(rewards[address] || { total: 0, breakdown: [] });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});