import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.config.js';


export const register = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password, role } = req.body;

        // check is user is already exist in database
        const checkuser = await db.query("select email from users where email = $1", [email]);

        if (checkuser.rows.length > 0) {
            // send response if user already exist
            res.status(400).json({ message: "user already exist!" });
        } else {

            // create a hashed password
            const hashPassword = await bcryptjs.hash(password, 10);


            // Insert new-user to database
            const response = await db.query("INSERT INTO users (name, email, password, role) VALUES($1, $2, $3, $4) ", [name, email, hashPassword, role]);
            // send response after successfull user registration
            res.status(201).json({ message: "User registered Successfully!" });
        }
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = await req.body;

        // check user is exist in database
        const checkuser = await db.query("select email from users where email = $1", [email]);

        if (checkuser.rows.length > 0) {

            // get user info from databasse if exist
            const response = await db.query("SELECT id, name, email,role, password, is_verified FROM users WHERE email = $1", [email]);
            const user = response.rows[0];
            console.log(user);
            // compare Password with hash
            const isMatch = await bcryptjs.compare(password, user.password);
            console.log(isMatch);


            if (isMatch === true) {
                // send response if pasword is corect

                // Generate JWT Token
                const token = jwt.sign({
                    id: user.id,
                    fullname: user.name,
                    email: user.email,
                    role: user.role,
                    verified : user.is_verified
                }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

                res.cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production", // Secure only in production (HTTPS)
                    sameSite: "strict",
                    maxAge: 3600000, // 1 hour
                  });

                res.status(200).json({
                    message: "Login successful"
                });
            } else {
                // send response if user entered wrong password
                res.status(400).json({ message: "incorrect password" });
            }

        } else {
            // send res if user dont exist in database
            res.status(400).json({ message: "User don't exist " });
        }


    } catch (error) {

        // send res if any error occured in server
        console.log("error : ", error);
        res.status(500).json("Internal server error");
    }
}

// clear cookie from frontend and logout user
export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
}


export const getUser = async (req,res) =>{
    try {
        const token = req.cookies.token; // Read JWT from HTTP-only cookie
        if (!token) return res.status(401).json({ message: "Not authenticated" });
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Decode JWT
        res.json({ user: decoded }); // Send decoded user info to frontend
      } catch (error) {
        res.status(401).json({ message: "Invalid token" });
      }
}