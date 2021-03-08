const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ User, Route }) {
      Project.belongsToMany(User, { through: 'User_Project' }, { foreignKey: 'ProjectId' });
      Project.hasMany(Route, { foreignKey: 'p_id' });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    p_attributes: DataTypes.JSONB,
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
  });
  return Project;
};
