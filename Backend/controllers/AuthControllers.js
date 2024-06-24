const userModels = require ('../models/UserModels.js')
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")

const register = async (req, res) => {

    const { body } = req;

    if (!body.email ||!body.username ||!body.password) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        });
    }

    try {
        
        await userModels.registerUser(body);

        res.status(201).json({
            message: 'Register berhasil!',
            data: body
        });
    } catch (error) {
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

const getProfile = async (req, res) => {
    try {
        const Username = req.Username;
        const user = await userModels.getUserByUsername(Username);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.json({ data: user });
    } catch (error) {
        console.error("Error in getProfile:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = {register, login, getProfile}

// const userModels = require('../models/UserModels.js');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const register = async (req, res) => {
//   const { body } = req;

//   if (!body.email || !body.username || !body.password) {
//     return res.status(400).json({
//       message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
//     });
//   }

//   try {
//     await userModels.registerUser(body);

//     res.status(201).json({
//       message: 'Register berhasil!',
//       data: body
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server error!",
//       serverMessage: error
//     });
//   }
// };

// const login = async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   try {
//     let user = await userModels.getUserByUsername(username);
//     user = user[0][0];
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }

//     const checkCorrectPassword = password === user.password;

//     if (!checkCorrectPassword) {
//       return res.status(401).json({
//         success: false,
//         message: "Incorrect email or password"
//       });
//     }

//     const { password: hashedPassword, role, ...rest } = user;

//     const token = jwt.sign(
//       { id: user.id },
//       'gahg48589a45ajfjAUFAHHFIhufuu',
//       { expiresIn: "15d" }
//     );

//     res
//       .cookie("accessToken", token, {
//         httpOnly: true,
//         expires: token.expiresIn,
//       })
//       .status(200)
//       .json({
//         message: "Login Success!",
//         token,
//         data: { ...rest },
//         role,
//       });

//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to log in" });
//   }
// };

// const updateProfile = async (req, res) => {
//   const { body } = req;
//   const userId = req.user.id; // Assuming you have user id from the authentication middleware

//   if (!body.email && !body.username && !body.password) {
//     return res.status(400).json({
//       message: 'Tidak ada data yang dikirim untuk diperbarui.'
//     });
//   }

//   try {
//     const updates = {};
//     if (body.email) updates.email = body.email;
//     if (body.username) updates.username = body.username;
//     if (body.password) updates.password = await bcrypt.hash(body.password, 10);

//     await userModels.updateUserProfile(userId, updates);

//     res.status(200).json({
//       message: 'Profil berhasil diperbarui!',
//       data: updates
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server error!",
//       serverMessage: error
//     });
//   }
// };

// module.exports = { register, login, updateProfile };

// const userModels = require ('../models/UserModels.js')
// const bcrypt = require ("bcryptjs")
// const jwt = require ("jsonwebtoken")

// const register = async (req, res) => {

//     const { body } = req;

//     if (!body.email ||!body.username ||!body.password) {
//         return res.status(400).json({
//             message: 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
//         });
//     }

//     try {
        
//         await userModels.registerUser(body);

//         res.status(201).json({
//             message: 'Register berhasil!',
//             data: body
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server error!",
//             serverMessage: error
//         });
//     }
// }

// const login = async (req, res) => {

//     console.log(req.body);
//     const username = req.body.username
//     const password = req.body.password

//     try{
//         console.log();
//         let user = await userModels.getUserByUsername(username)
//         user = user[0][0]
//         if(!user){
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             })
//         }

//         const checkCorrectPassword = password === user.password

//         //if password is wrong
//         if(!checkCorrectPassword){
//             return res.status(401).json({
//                 success: false,
//                 message: "Incorrect email or password"
//             })
//         }

//         const {password: hashedPassword, role, ...rest} = user

//         console.log(process.env);
//         //create jwt token
//         const token = jwt.sign(
//             {id: user.id},
//             'gahg48589a45ajfjAUFAHHFIhufuu',
//             {expiresIn: "15d"}
//         )

//         res
//         .cookie("accessToken", token, {
//             httpOnly: true,
//             expires: token.expiresIn,
//         })
//         .status(200)
//         .json({
//             message: "Login Success!",
//             token,
//             data:{...rest},
//             role,
//         })

//     }catch(err){
//         console.error(err);  // log the error
//         res
//         .status(500)
//         .json({success: false, message: "Failed to log in"})
//     }
// }

// module.exports = {register, login}