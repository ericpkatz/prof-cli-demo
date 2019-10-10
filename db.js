const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL);

const Thing = conn.define('thing', {
  name: STRING
});

const syncAndSeed = async ()=> {
  await conn.sync({ force: true });
  await Thing.create({ name: 'foo'});
};

module.exports = {
  syncAndSeed,
  models: {
    Thing
  }
};
