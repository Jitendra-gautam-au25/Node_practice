const dbConnect = require('./mongodb')

const updateDate=()=>{
    let data =await dbConnect();
    let result =await data.updateOne(
       { name:"mobile"},
        {
            $set:{name:'iphone'}
    }
    )
    console.warn(result);
  

}

updateDate();