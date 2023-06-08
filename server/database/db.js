import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce.gd5mutc.mongodb.net/`;
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true,useNewUrlParser: true })
       console.log('Databse connected sucessfully');
    }
    catch(error){
        console.log('error while connecting with the dtabase', error.message);
    }
}

export default Connection;