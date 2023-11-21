const { log } = require('console');
const fs = require('fs')
try{
    const data= fs.readFileSync('./readfile.txt', 'utf8')
    console.log(data);

}
catch(err){
console.log(err);
}
