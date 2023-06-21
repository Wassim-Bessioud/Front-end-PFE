
import axios from 'axios';
import httpClient from 'react-http-client';

class StudentService {
    create = (data) => {
        return httpClient.post("http://localhost:8080/students/add" , data);
    }
    
     updateStudent = (student,studentId) => {
        return axios.put("http://localhost:8085/utilisateur" + '/' + studentId , student)
    }

    getStudentByEmail = (email) => {
        return axios.get("http://localhost:8080/students/" + email);
    }
    
    getAllStudents = () => {
        return axios.get("http://localhost:8080/students");
    }

    getStudentById = (id) => {
        return axios.get("http://localhost:8080/students/id/" + id);
    }
    deleteStudent = (studentId) => {
        return axios.delete("http://localhost:8080/delete/student/"+studentId)
    }

    switchStudentAccStatus = (studentId) => {
        return axios.put("http://localhost:8080/student/status/"+studentId)
    }


    
}


export default new StudentService()

  
