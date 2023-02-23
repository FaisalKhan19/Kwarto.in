import User from "../models/User";
export const register = async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name) return res.status(400).send('Name is Required')
    if (!password || password.length < 6) return res.status(400).send('Password is Required and should be minimum 6 character long')
    let userExist = await User.findOne({email}).exec()
    if(userExist) return res.status(400).send('Email is taken')
    const user = new User(req.body)
    try{
        await user.save()
        console.log('User Created',user)
        return res.json({ok:true});
    }catch(err){
        console.log('create user failed ',err)
        return res.status(400).send('Error.Try Again')
    }
};