const mongoose =require('mongoose');
const Products = mongoose.model('Products');
var ObjectId = require("mongoose").Types.ObjectId

/*****************SEND PRODUCTS DETAILS TO DATABASE*********************/
module.exports.product =(req,res)=>{
   var products =new Products();
   products.productname=req.body.productname,
   products.brand=req.body.brand,
   products.category=req.body.category,
   products.meterial=req.body.meterial,
   products.care=req.body.care,
   products.color=req.body.color,
   products.size=req.body.size,
   products.originalprice=req.body.originalprice,
   products.totalprice=req.body.totalprice,
   products.drycleanprice=req.body.drycleanprice,
   products.leadprice=req.body.leadprice,
   products.ownerprice=req.body.ownerprice
   
   products.save((err,doc)=>{
       if(!err){
           res.send(doc);
           console.log("product details saved");
       }
       else{
           console.log("error to save products" + JSON.stringify(err, undefined, 2))
       }
   });
};
/**************GET ALL PRODUCTS FROM DATABASE*******************/
module.exports.productlist=(req,res)=>{
    Products.find((err,doc)=>{
        if(!err){
            res.send(doc);
            console.log("sucessfully retrive product list")
        }
        else{
            console.log("error to retrive products" + JSON.stringify(err, undefined, 2));
        }
    });
   
}

/****************GET SINGLE PRODUCT ****************/

module.exports.singleproduct = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("no product with this productid")

    Products.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            console.log("error in retrive product details" + JSON.stringify(err.undefined, 2))
        }
    })
}
/***************UPDATE PRODUCT DETALS***************************/

module.exports.updatelist=(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("no product details with this productid");
        var products ={
        productname:req.body.productname,
        brand:req.body.brand,
        category:req.body.category,
        meterial:req.body.meterial,
        care:req.body.care,
        color:req.body.color,
        size:req.body.size,
        originalprice:req.body.originalprice,
        totalprice:req.body.totalprice,
        drycleanprice:req.body.drycleanprice,
        leadprice:req.body.leadprice,
        ownerprice:req.body.ownerprice
        }
    Products.findByIdAndUpdate(req.params.id, { $set:products  }, { new: true },(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log("error in product update" + JSON.stringify(err, undefined, 2))
        }
    });   
}
/********************DELETE PRODUCT BASED ON PRODUCT ID*********************/
module.exports.delete=(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("no product details with this productid");
    Products.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("error in delete product" + JSON.stringify(err, undefined, 2))
        }
    })
}