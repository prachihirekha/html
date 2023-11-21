const { log } = require('console')
const fs =require('fs')
const data = "What is a REST API? An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style."
fs.writeFile('./file-write.txt', data , err =>{
    if(err){
        console.log(err);
    }
})