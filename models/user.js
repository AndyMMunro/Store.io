module.exports=function(sequelize, DataTypes) {
  
  const User = sequelize.define("User", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      len: [64],
    },

  });
  
  // User.associate = function (models){
  //   User.hasMany(models.Products, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
}
