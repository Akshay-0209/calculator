require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`CRM Dashboard server running on http://${HOST}:${PORT}`);
});
