import axios from "axios"


class NotifService {
    sendNotifToAdmin = (notif) => {
        return axios.post("http://localhost:8080/Notification/admin",notif)
    }

   
    sendNotifsStudent = (notif,studentId) => {
        return axios.post("http://localhost:8080/notifications/students/" + studentId , notif)
    }
    sendNotifsEmployee = (notif,employeeId) => {
        return axios.post("http://localhost:8080/notifications/employees/" + employeeId , notif)
    }
    sendNotifsAdmin = (notif) => {
        return axios.post("http://localhost:8080/Notification/admin/" , notif)
    }

    deleteNotifById = (notifId) => {
        return axios.delete("http://localhost:8080/notifs/"+ notifId)
    }

    deleteEmployeeNotifs = (employeeId) => {
        return axios.delete("http://localhost:8080/employees/"+employeeId+"/notificaitons")
    }
    deleteStudentsNotifs = (studentId) => {
        return axios.delete("http://localhost:8080/students/"+studentId+"/notificaitons")
    }
} 

export default new NotifService()