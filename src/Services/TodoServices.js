import axios from "axios";


class TodoServices{
    savetodo(todo){
        return axios.post("http://localhost:8080/save",todo);
    }
    viewtodo(){
        return axios.get("http://localhost:8080/view");
    }
}
export default new TodoServices();