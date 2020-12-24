
module.exports=function(sequelize, DataTypes) {
  const Products = sequelize.define("products", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[200],
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [10],
    },
    description:{
      type:DataTypes.TEXT,
      allowNull: false,
      len:[1000],
    },
    category:{
      type:DataTypes.STRING,
      allowNull: false,
      len:[200],
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
