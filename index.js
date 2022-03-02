//Import express
const express = require('express');
//Creating a web app using express
const app = express();                                  
//Import the arithmeticFunctions.js file
const arithmeticFunctions = require('./arithmeticFunctions');      
//Middleware
app.use(express.urlencoded({extended: false})); 

//Apply dummy values so values.push(value)(Line 57) will work.
const values = [
    {value_1:50, value_2:200, total:'add'},
    {value_1:55, value_2:220, total:'sub'},
    {value_1:60, value_2:240, total:'multiply'},
    {value_1:65, value_2:260, total:'divide'},
]

//Home route
/* app.get('/', (req,res)=>{
    res.send(values)
}); */

app.post("/",function(req,res){

//Setting const value to allow user to write on the body
const value = {
    value_1: req.body.value_1,
    value_2: req.body.value_2,
    operation: req.body.operation
};
    //Using parseInt to convert string to numbers
    var value_1 = parseInt(req.body.value_1);
    var value_2 = parseInt(req.body.value_2);
    //Will convert the value operation to lowercase
    var operation = value.operation.toLowerCase();

    if (operation === "add"){
        var totaladd = arithmeticFunctions.add(value_1,value_2);
        console.log(totaladd)
    } 
    else if (operation === "sub"){
        var totalsub = arithmeticFunctions.sub(value_1,value_2);
        console.log(totalsub)
    } 
    else if (operation === "multiply"){
        var totalmultiply = arithmeticFunctions.multiply(value_1,value_2);
        console.log(totalmultiply)
    } 
    else if (operation === "divide"){
        var totaldivide = arithmeticFunctions.divide(value_1,value_2);
        console.log(totaldivide)
    }
    else {
        console.log('Please use add, sub, mutiply or divide.')
    }

    values.push(value);
    res.send(value)
});

app.listen(3000, function(){
    console.log('Server is running on port 3000....')
});






/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

/* var value_1 = 500
var value_2 = 10 

 app.post('/', function(req, res) => {
    const value_1 = req.body.value_1;
    const value_2 = req.body.value_2;
    const operation = req.body.operation
    const total = arithmeticFunctions.add(value_1, value_2);
    res.send(total);
}); */

