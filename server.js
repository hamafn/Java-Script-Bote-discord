const app = require('express')();

app.get('/', (req, res) => res.send('By Seniority Hama'));

module.exports = () => {
  app.listen(3000);
}
