const { DataTypes } = require('sequelize');
const PractSpeciality = require('./pract-speciality.model');
const PractitionerInfo = require('./practitioner-info.model');
const sequelize = require('../config/database').sequelize;

const Speciality = sequelize.define('Speciality', {
  id_speciality: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  designation: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'specialities',
  timestamps: false, // car les colonnes de dates ne sont pas les timestamps Sequelize standards
});

Speciality.belongsToMany(PractitionerInfo, {
    through: PractSpeciality,
    foreignKey: 'id_speciality',
    otherKey: 'id_pract_info',
    as: 'practitioners'
});

module.exports = Speciality;
