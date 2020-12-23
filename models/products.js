
module.exports=function(sequelize, DataTypes) {
  const Products = sequelize.define("Products", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [10],
    },
    category:{
      type:DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false,
      len:[1000],
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
    },

  });

  // Products.associate = function (models){
  //   Products.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: true,
  //     },
  //   });
  // };
  return Products;
}
