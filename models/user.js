module.exports=function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      len: [64],
    }

  });
  
  User.associate = function (models){
    User.hasMany(models.Products, {
      onDelete: "cascade"
    });
  };

  return User;
}
