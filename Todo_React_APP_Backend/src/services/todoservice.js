const todorepo = require("../repository/todorepo");



class todoservice{
    constructor(){
        this.todoservice= new todorepo();
    }

    async createtodo(data){
        try {
            const response = await this.todoservice.createtodo(data);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async deletetodo(todoid){
        try {
            const response = await this.todoservice.deletetodo(todoid);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async gettodos(){
        try {
            const response = await this.todoservice.gettodos();
            return response;
        } catch (error) {
            throw {error};
        }
    }
}


module.exports = todoservice;
