const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql', 'root', '1234', {

    /*
    BRUGERNAVN TIL SQL = root 
    PASSWORD TIL SQL  = 1234 
    */
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },


});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

/*   // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  }); */

    
  User.findAll().then(users => {
    console.log(users)
  })
  
  User.create({
    firstName: 'John',
    lastName: 'Hitler'
  });
 