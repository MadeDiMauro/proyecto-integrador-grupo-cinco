const fs= require ("fs");
const path=require ("path");

const productsdbPath=path.join (__dirname, "../database/productos.json");

const readJsonFile= (path)=> {
    const data=fs.readFileSync (path, "utf-8");
    const dataParsed=JSON.parse (data);
    return dataParsed;
}

const productsList=readJsonFile (productsdbPath);

const productsController = {

    list: (req, res) => {
        if (req.params.category) {
            let productsListCategory = productsList.filter(
							(item) => item.category == req.params.category
						);
            //return res.json(productsList);
            console.log(productsListCategory);
            return res.render("products", { productsList: productsListCategory });
        } else {
            return res.render("products", { productsList: productsList });
        }
        
    },
    detail: (req,res)=> {
        let productItem=productsList.find (item => item.id==req.params.id);
        return res.render ('productDetail', {item:productItem}) // validacion y sin objeto completo
    },
    create: (req, res) => {
        return res.render ('create')
    },
    edit: (req, res) => {
        let productItem = productsList.find((item) => item.id == req.params.id);
        return res.render ('edit', {productsList:productsList}) //validacion y son objeto (en el ejs, entre llaves solo comparto el item filtrado, se filtra aantes del render)
    },

}

module.exports = productsController;