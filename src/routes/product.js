const router = require("express").Router();
const Product = require("../models/product");
const { verifyToken } = require("../validation");

router.post('/', async (req, res) => {
    try {
        data = req.body;

        const productData = await Product.insertMany(data);
        if (productData) {
            return res.send({ data: productData }).status(201)
        }

    } catch (error) {

        return res.send({ message: error.mesage })  
    }

})


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        return res.send({ data: products })

    } catch (error) {

        return res.send({ message: error.mesage })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        return res.send({ data: products })

    } catch (error) {

        return res.send({ message: error.mesage })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        return res.send({ data: products })

    } catch (error) {

        return res.send({ message: error.mesage })
    }
})


module.exports = router;