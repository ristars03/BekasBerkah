const userModels = require ('../models/UserModels.js')
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")

const register = async (req, res) => {

    const { body } = req;
    // body.password = hash
    // Periksa apakah semua properti yang diperlukan ada dalam objek body
    if (!body.email ||!body.username ||!body.password) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        });
    }

    try {
        // // Cek apakah data dengan nama yang sama sudah ada
        // const dataAlreadyExists = await userModel.getUserByEmail(body.email);
        // if (dataAlreadyExists.length > 0) {
        //     return res.status(400).json({
        //         message: `Email: ${body.email} sudah terdaftar, silahkan Email yang lain!`
        //     });
        // }

        // Tambahkan data user
        await userModels.registerUser(body);

        // Kirim respons berhasil
        res.status(201).json({
            message: 'Register berhasil!',
            data: body
        });
    } catch (error) {
        // Tangani kesalahan server
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        });
    }
}

const login = async (req, res) => {

    console.log(req.body);
    const username = req.body.username
    const password = req.body.password

    try{
        console.log();
        let user = await userModels.getUserByUsername(username)
        user = user[0][0]
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        //if user exist then check the password or compare the password
        // const checkCorrectPassword = await bcrypt.compare(
        //     password, 
        //     user.password
        // )

        const checkCorrectPassword = password === user.password

        //if password is wrong
        if(!checkCorrectPassword){
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        const {password: hashedPassword, role, ...rest} = user

        console.log(process.env);
        //create jwt token
        const token = jwt.sign(
            {id: user.id},
            'gahg48589a45ajfjAUFAHHFIhufuu',
            {expiresIn: "15d"}
        )

        // set token in the browser cookies and send the response to the client
        res
        .cookie("accessToken", token, {
            httpOnly: true,
            expires: token.expiresIn,
        })
        .status(200)
        .json({
            message: "Login Success!",
            token,
            data:{...rest},
            role,
        })

    }catch(err){
        console.error(err);  // log the error
        res
        .status(500)
        .json({success: false, message: "Failed to log in"})
    }
}

module.exports = {register, login}