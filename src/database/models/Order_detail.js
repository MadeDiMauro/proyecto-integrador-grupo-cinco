module.exports= (sequelize,dataTypes) => {
    let alias= "Detalle de Orden";  
    let cols= {
        id: {
        type: dataTypes.INTEGER,
        primayKey:true,
        autoIncrement:true,
        allowNull:false,
        },
        quantity: {
        type: dataTypes.DECIMAL
        }
       
    };

    let config= {
        tableName:"Detalle de Orden",
        timestamps: false
    }

    const Order_detail= sequelize.define (alias,cols, config);
    return Order_detail;
}