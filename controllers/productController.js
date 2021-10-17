const Product = require("../models/products")
exports.getAllProducts = (req, res) => {
    Product.find({})
    .then(products => {
      res.json(products)
    })
    .catch(error => {
        console.log(error)
        next(error)
    })
}

exports.postProduct = (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const category = req.body.category
    const stock = req.body.stock
    const productImage = req.files.map(file => {
        return file.filename.toString()
    })
    console.log(productImage)
    const product = new Product({
        name,
        description,
        price, 
        category,
        stock,
        productImages: productImage
    }
    )
    
    
    product.save().then(result => {
            res.json(result)
    }).catch(error => {
        console.log(error)
        next(error)
    })

}

exports.deleteProduct = (req, res) => {
        console.log("delete request")
        Product.findByIdAndRemove(req.params.id).then(result => {
            console.log(result)
            if(result) {
                return res.status(200).send()
            }
            else {
                return res.status(404).send()
            }
        })
        .catch(error => {
            next(error)}
            )
}

exports.getProduct = (req, res) => {
        console.log("get item request")
    
        Product.findById(req.params.id)
        .then(found => {
            if(found) {
            res.json(found)
        }
            else {
            res.status(404).end()
            }   
        })
        .catch(error => {
            console.log(error)
            next(error)
          })
}