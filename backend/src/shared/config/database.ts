import { Sequelize } from 'sequelize';

const database = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    port: Number(process.env.DB_PORT),
    dialect: 'mariadb',
    logging: false,
  },
);

export { database };
