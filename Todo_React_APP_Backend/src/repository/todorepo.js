const { where } = require("sequelize");
const {List} = require("../models/index");


class todorepo{

    async createtodo(data){
        try {
            const todo = await List.create(data);
            return todo;
        } catch (error) {
            throw {error};
        }
    }

    async deletetodo(todoid){
        try {
            await List.destroy({
                where:{
                    id:todoid
                }
            });
            return true;
        } catch (error) {
            throw {error};
        }
    }

    async gettodos(){
        try {
            
            const response = await List.findAll();
            return response;
        } catch (error) {
            throw {error};
        }
    }

}


module.exports = todorepo;