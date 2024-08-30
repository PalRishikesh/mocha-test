const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { registerValidation, loginValidate } = require("../validation");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    /**
     * 1. Validate user input
     * 2. Check if email is already registered
     * 3. Hash Password
     * 4. Create a use object and save in DB
     */
    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(421).json({ error: error.details[0].message });
    }

    const emailExist = await User.find({ email: req.body.email });
    console.log("Email Exist: ", emailExist);

    if (emailExist.length) {
        return res.status(400).send({ message: "Email already present" });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    try {
        const userDetail = new User({
            ...req.body,
            password,
        });
        const saveUser = await userDetail.save();
        return res.status(200).send({
            data: saveUser._id,
            status: true,
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message,
            status: false,
        });
    }
});



router.post('/login', async (req, res) => {
    const { error } = loginValidate(req.body);

    if (error) {
        return res.status(421).json({ error: error.details[0].message });
    }

    let userDetail = await User.find({ email: req.body.email })

    if (!userDetail.length) {
        return res.status(400).send({ message: "Email not present" });
    }

    userDetail = userDetail[0];
    const userPassword = userDetail.password;
    const validPassword = await bcrypt.compare(req.body.password, userPassword);
    if (!validPassword) {
        return res.status(400).send({ message: "Password in correct" });
    }

    const token = jwt.sign(
        //Payload
        { name: userDetail.name, id: userDetail._id },
        // Token secret
        process.env.TOKEN_SECRET,
        // Exipiration time
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )

    return res.header("auth-token", token).json({
        status: true,
        data: { token }
    })


})

module.exports = router;
