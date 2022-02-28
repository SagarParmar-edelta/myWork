var express = require("express");
var employes = require("./employes.js");

console.log(express());

let app = express();
app.listen(5000);

console.log("\n---------- express object In json -------------\n",express.json());

app.use(express.json());

app.get("/employes/employes-details", (req, res) => {
  res.json(employes);
});

app.post("/employes/employes-details", (req, res) => {
    console.log(req.body);
    const new_e_detail = {
        name: req.body.name,
        des:  req.body.des,
    }
    employes.push(new_e_detail);
    res.json(new_e_detail);
});


app.put("/employes/employes-details/:name", (req, res) => {

    let check_name = req.params.name;
    const updated_name = req.body.name;
    const updated_des = req.body.des;

    let index = employes.findIndex((emp) => emp.name == check_name);

    if(index >= 0){
        let employee = employes[index];
        employee.name = updated_name;
        employee.des = updated_des;
        res.json(employee);
    }else{
        app.status(404);
    }
});

app.delete("/employes/delete-employe/:name", (req, res) => {
    let check_name = req.params.name;
    let index = employes.findIndex((emp) => emp.name == check_name);
    if(index >= 0){
        employes.splice(index,1);
        res.json(employes);
    }else{
        app.status(404);
    }
});


app.put("/employes/employes-details/:name", (req, res) => {

    let check_name = req.params.name;
    const updated_name = req.body.name;
    const updated_des = req.body.des;

    let index = employes.findIndex((emp) => emp.name == check_name);

    if(index >= 0){
        let employee = employes[index];
        employee.name = updated_name;
        employee.des = updated_des;
        res.json(employee);
    }else{
        app.status(404);
    }
});