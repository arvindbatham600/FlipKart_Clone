import Product from "../model/Product-schema.js";


 const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch(error) {
         res.status(500).json({message: error.message})
    }
 }

export default getProducts;