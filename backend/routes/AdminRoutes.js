const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const AdminModel=require('../Modals/Adminmodel')

router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('Home Page')
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newData=new AdminModel(req.body)

    newData.save()

    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    res.send("Admin Post Page")
})


router.get('/get', (req, res) => {
    AdminModel.find()
        .then(data => {
            console.log(data);
            res.send(data); // Send the fetched data as response
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching data");
        });
});

router.put('/update/:id', (req, res) => {
    console.log(req.params.id, req.body);
    AdminModel.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedAdmin => {
            console.log(updatedAdmin);
            res.send(updatedAdmin); // Send the updated admin data as response
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error updating admin");
        });
});

module.exports=router
