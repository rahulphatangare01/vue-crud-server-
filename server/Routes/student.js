const { json } = require("express");
const express = require("express");
const router = express.Router();
const Student = require('../Model/Student')


router.post('/studentpost',async(req,res)=>{
    try {
        let student = await Student.create(req.body);
        res.status(200).json({ sucess: true, student}) 
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal Server Error"})
    }
})

router.get('/studentget',async(req,res)=>{
    try {
        
        let student = await Student.find();
        res.status(200).json({sucess:true, student})

    } catch (error) {
        console.log(error);
    res.status(500).json({message:"Internal Server Error"})
    }
})

// router.put('/studentupdate/:id',async(req,res)=>{
//     try {
//         const id = req.params.id;
//         const body = req.body;
//         Student.updateOne({_id:id},{$set:{
//             name:body.name,
//             age:body.age,
//             class:body.name,
//             phone:body.phone
//         }})
//         res.status(200).json({ sucess:true , message:"Student Data Update"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// })

router.put('/studentupdate/:id',async(req,res)=>{
  const {name,age,Class,phone} = req.body
    try {
    newStudent={};
    if(name) {newStudent.name = name};
    if(age) {newStudent.age = age};
    if(Class) {newStudent.Class = Class};
    if(phone) {newStudent.phone = phone};
    let student = await Student.findById(req.params.id);
    student  = await Student.findByIdAndUpdate(req.params.id, {$set:newStudent},{new:true});
    res.status(200).json({ sucess:true , student})

    } catch (error) {
        console.log(error);
        res.status(200).json({message:"Internal Error"})
    }
})

router.delete('/studentdelete/:id', async(req,res)=>{
    try {
        
        let student = await Student.findById(req.params.id);
        if(student.studentId === req.body.id){
            await student.deleteOne();
            res.status(200).json({sucess:true, message:"Student Data Delete"})
        }else{
            res.status(401).jaon({ message:"you Can delete only your Data"})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})
module.exports = router