import axios from "axios"

class ConversationService {

    createConversations = (studentId,employeeId) => {
        return axios.post("http://localhost:8080/conversation/new/"+studentId+"/"+employeeId);
    }

    getAllConversations = () => {
        return axios.get("http://localhost:8080/conversations");
    }

    getStudentsConversation = (studentId) => {
        return axios.get("http://localhost:8080/conversations/student/"+ studentId);
    } 
    getEmployeesConversation = (employeeId) => {
        return axios.get("http://localhost:8080/conversations/employee/"+ employeeId);
    } 
    getConversationById = (convId) => {
        return axios.get("http://localhost:8080/conversations/"+ convId);
    } 
    getEmployeeInfo =(convId) => {
        return axios.get("http://localhost:8080/conv/infos2/"+ convId)
    }

    getStudentInfo =(convId) => {
        return axios.get("http://localhost:8080/conv/infos/"+ convId)
    }

    getMessagesByConvId = (convId)=> {
        return axios.get("http://localhost:8080/messages/"+ convId);
    }

    sendMessage = (message,convId) => {
        return axios.post("http://localhost:8080/messages/new/"+ convId,message)
    }
    deleteConversationById = (convId) => {
        return axios.delete("http://localhost:8080/conversation/"+convId)
    }

}

export default new ConversationService();