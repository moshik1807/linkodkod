import jwt from 'jsonwebtoken'

//Token creation
export function CreatToken(user){
    const token = jwt.sign(
             { 
                name: user.name, 
                role: "user"
             }, 
             process.env.JWT_SECRET, 
             { expiresIn: '1h' }
    )   
    return token
}

//A function that checks permissions for certain users
const auth = (roles) => (req, res, next) => {    
    try {
        const authHeader = req.headers['authorization']
        if (!authHeader) return res.status(403).send('Unauthorized - no token')
        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(typeof decoded === 'string') throw new Error('Not Token Provided')
        req.user = {
            name: decoded.name,
            role: decoded.role
        };
        if (!roles.includes(decoded.role)) {
            return res.status(403).send('Unauthorized - role not allowed')
        }
        next();
    } catch (error) {
        console.error(error)
        res.status(403).send('Unauthorized - invalid token')
    }
};



export default auth;