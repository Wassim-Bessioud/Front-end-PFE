import axios from 'axios';



class ForgotPasswordService {
    sendResetRequest = (email) => {
        return axios.post("http://localhost:8080/sendemail/" + email);
    }

    resetPassword = (email,pwd) => {
        return axios.put("http://localhost:8080/resetpassword/" + email+'/'+pwd);
    }

    updatePass = (email,pwd,newPwd) => {
        return axios.put("http://localhost:8080/updatepwd/" + email+'/'+pwd+'/'+newPwd);
    }

}

export default new ForgotPasswordService()
