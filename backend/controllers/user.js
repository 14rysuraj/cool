
import jwt from "jsonwebtoken";
import { User } from "../models/user.js"
import bcrypt from "bcrypt";




export const signup = async(req, res) => {
    
    try {
    
        const { email, password, fullname} = req.body;

        let user =await User.findOne({  email });

        if (user) {
            return res.json({
                success: false,
                error: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            email: email,
            password: hashedPassword,
            fullname: fullname,
          
        })

        const token = jwt.sign({
            _id: user._id,
            
        },
        process.env.JWT_SECRET,
        
        )

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        })
            .json({
            success: true,
            user,
            token,
        })



    
} catch (error) {
    
    res.status(400).json({
        success: false,
        error: error.message,
    });
}    

}


export const login = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) return res.json({ success: false, message: "user doesn't exist" });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid password" });
  
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
      })
      .json({
        token,
        success: true,
        user,
      });
  };
  

export const logout = async(req, res) => {


    try {
        res
        .cookie("token", "", {
          expires: new Date(Date.now()),
        })
        .json({
          sucess: true,
          message: "Log out successfully",
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
   
  };
  

  


