import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Example = sequelize.define('Example', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Example;