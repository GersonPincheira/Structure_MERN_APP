import  jwt from 'jsonwebtoken';
import User from'../models/User';

const auth = async(req, res, next) => {
     const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, return response (without going to the next middelware)
    if (!token) return res.status(401).send("Access denied. No token provided.");

    try {
        
        const data = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        const new_token =  await user.ChangeAuthToken(token);
        req.user = user;
        req.token = new_token;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth ;