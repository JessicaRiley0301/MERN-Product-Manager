const Product = require('../models/product.model');

// shell: db.collection_name.create({query})
// mongoose: model_name.create({query})

module.exports = {
    // Create
    createProduct: (req, res) => {
        console.log(req.body);
        Product.create(req.body)
            // IMPORTANT what we return here is what we receive in React
            .then(newlyCreatedProduct => res.json({ message: "success", product: newlyCreatedProduct }))
            .catch(err => res.json({ message: 'error', error: err }));
    },
    // Read all
    findAllProducts: (req, res) => {
        Product.find()
            .then(allDaProducts => {
                console.log(allDaProducts);
                res.json({ allTheProducts: allDaProducts })
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    // Read one
    findOneSingleProduct: (req, res) => {
        Product.findById(req.params.id) // remember to set "id" as route parameter in routes
            .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    // Update
    updateExistingProduct: (req, res) => {
        // User.findOneAndUpdate({_id : req.params.id}, req.body)
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedProduct => res.json({ product: updatedProduct }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    // Delete
    deleteAnExistingProduct: (req, res) => {
        // User.deleteOne({_id: req.params.id})
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json({ deletedObj: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}