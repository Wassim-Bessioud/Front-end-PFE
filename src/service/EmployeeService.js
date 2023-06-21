import axios from 'axios';
import httpClient from 'react-http-client';


class EmployeeService {
    create = (data,serviceId) => {
        return httpClient.post("http://localhost:8080/employees/add/" + serviceId , data);
    }

    getEmployeeById = (id) => {
        return axios.get("http://localhost:8080/employee/" + id);
    }

    updateEmployee = (employee,employeeId,servId) => {
        return axios.put("http://localhost:8080/employees" + '/' + employeeId+'/'+servId , employee)
    }

    getEmployeeByServiceId = (serviceId) => {
        return axios.get("http://localhost:8080/employees/services/" + serviceId)
    }

    getAdminInfo = () => {
        return axios.get("http://localhost:8080/employee/admin")
    }

    getEmployeesInfos = ()=> {
        return axios.get("http://localhost:8080/employees/infos")
    }
    deleteEmployee = (employeeId) => {
        return axios.delete("http://localhost:8080/delete/employee/"+employeeId)
    }
}

export default new EmployeeService()