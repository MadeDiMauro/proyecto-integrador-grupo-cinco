module.exports= (sequelize,dataTypes) => {
    let alias= "orders";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        date: {
            type: dataTypes.DATEONLY,
        },
        
        state_id: {
            type: dataTypes.INTEGER
        },
        
        payment_id: {
            type: dataTypes.INTEGER
        },
        
        user_id: {
            type: dataTypes.INTEGER
        },
                     
        delivery_id: {
            type: dataTypes.INTEGER
        },
                    
       
    };

    let config= {
            tableName:"orders",
            timestamps: false
    }

    const Orders= sequelize.define (alias,cols, config);
    Orders.associate= function (models) {
        Orders.belongsToMany (models.Products, { //revisar
            as:"Productos",
            through:"Order_detail",
            foreignKey:"category_id",
            otherKey:"order_id",
            timestamps:false
        });
    }
        Orders.belongsTo (models.Payments, { 
            as:"Formas de Pago",
            foreignKey:"payment_id"

        });

        Orders.belongsTo (models.Users, {
            as:"Usuarios",
            foreignKey:"user_id"

        });
        
        Orders.belongsTo (models.Delivery, {
            as:"Entregas",
            foreignKey:"delivery_id"

        });

        Orders.belongsTo (models.Order_state, {
            as:"Estado de Entregas",
            foreignKey:"state_id"

        });
    

    return Orders;
}