const myMiddle=(req,res,next)=>{
    console.log("Logger")


    next()
}
export {myMiddle}