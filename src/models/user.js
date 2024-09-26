/* Authentification : Créer un modèle User avec Sequelize */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Un utilisateur de ce nom existe déjà dans la base des données.",
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}