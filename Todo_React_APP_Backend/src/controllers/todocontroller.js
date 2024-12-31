
const todoservice = require("../services/todoservice");

const todorepo = new todoservice();

const createtodo = async(req,res)=>{
    try {
        const response = await todorepo.createtodo(req.body);
        return res.status(201).json({
            data:response,
            err : {},
            status: "todo created successfully"
        })
    } catch (error) {
        return res.status(401).json({
            err:{error},
            status: "Failed to create todo"
        })
    }
}

const deletetodo = async(req,res)=>{
    try {
        const response = await todorepo.deletetodo(Number(req.query.id));
        return res.status(201).json({
            data:response,
            err:{},
            status: "Todo deleted successfully"
        })
        
    } catch (error) {
        return res.status(401).json({
            err:{error},
            status:"Failed to delete todo"
        })
    }
}

const gettodos = async(req,res)=>{
    try {
        const response = await todorepo.gettodos();
        return res.status(201).json({
            data:response,
            err:{},
            status:"Todos fetched successfully"
        })
    } catch (error) {
        return res.status(401).json({
            err:{error},
            status: "Failed to fetch todos"
        })
    }
}

module.exports = {
    createtodo,
    deletetodo,
    gettodos
}