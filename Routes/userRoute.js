const express = require("express");

const mongoose = require("mongoose");

const User = require("../models/UserModel");

const router = express.Router();



//create
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    const User = require("../models/UserModel");


    try {
        const UserAdded = await User.create({

            name: name,
            email: email,
            age: age,

        });

        res.status(201).json(UserAdded);

    } catch (error) {

        console.log(error)
        res.send(401).json({ error: error.message })

    }





});


// router.post("/", async (req, res) => {
//     const { email } = req.body;
  
//     try {
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(409).json({ error: "Email already in use" }); // Conflict status
//       }
  
//       const newUser = new User(req.body);
//       await newUser.save();
//       res.status(201).json({ message: "User created successfully" });
//     } catch (err) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });

//get

router.get("/", async (req, res) => {



    try {
        const showAll = await User.find();
        res.status(200).json(showAll)


    } catch (error) {

        console.log(error)
        res.send(500).json({ error: error.message })

    }




});

//get single userdata


router.get("/:id", async (req, res) => {

    // const {id}= req.param;


    try {
        const singleUser = await User.findById(req.params.id);
        res.status(200).json(singleUser)


    } catch (error) {

        console.log(error)
        res.send(500).json({ error: error.message })

    }

});


//delete 

router.delete("/:id", async (req, res) => {




    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser)


    } catch (error) {

        console.log(error)
        res.send(500).json({ error: error.message })

    }

});

//update operation

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body




    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateUser)


    } catch (error) {

        console.log(error)
        res.send(500).json({ error: error.message })

    }

});











module.exports = router;