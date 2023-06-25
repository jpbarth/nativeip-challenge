import { DataTypes } from "sequelize";

import { database } from '../../../../../shared/config/database';

import { City } from "../../../../city/infra/sequelize/models/City";

const Customer = database.define('customer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Female", "Male"],
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Customer.belongsTo(City, {
  constraints: true,
});

City.hasMany(Customer, { as: 'customers' });

export { Customer };
