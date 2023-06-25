import { DataTypes } from "sequelize";

import { database } from '../../../../../shared/config/database';

const City = database.define('city', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export { City };
