import axios from "axios"

class ClaimService {


    createClaim = (claim,studentId) => {
        return axios.post("http://localhost:8080/reclamations/" + studentId , claim)
    }

    getClaimsByStudentId = (studentId) => {
        return axios.get("http://localhost:8080/reclamations/" + studentId )
    }

    deleteClaim =(claimId)=> {
        return axios.delete("http://localhost:8080/reclamations/" + claimId)
    }

    updateClaim =(claim,claimId,StudentId) => {
        return axios.put("http://localhost:8080/reclamations/" + claimId + '/' + StudentId , claim);
    }
    
    getAllClaims = () => {
        return axios.get("http://localhost:8080/reclamations");
    }

    getClaimsInfo = () => {
        return axios.get("http://localhost:8085/anneeuniv");
    }

    updateClaiStatu = (claim,claimId) => {
        return axios.put("http://localhost:8080/reclamations/status/" + claimId , claim)
    }

    getClaimByTime = (dateRec) => {
        return axios.get("http://localhost:8080/reclamations/date/" + dateRec)
    }
    sendClaimToEmployee = (claimId,employeeId) => {
        return axios.put("http://localhost:8080/reclamations/employee/" + employeeId + "/" + claimId)
    }

    getClaimsByEmployeeId = (employeeId) => {
        return axios.get("http://localhost:8080/reclamations/employee/" + employeeId )
    }

    getClaimsStdInfo = (claimId) => {
        return axios.get("http://localhost:8080/reclamation/infos/" + claimId);
    }
    getClaimsEmpInfo = (claimId) => {
        return axios.get("http://localhost:8080/reclamation/employee/infos/" + claimId);
    }

    sendResponse = (resp,claimId) => {
        return axios.post("http://localhost:8080/response/new/" + claimId , resp)
    }

    getResponse = (claimId) => {
        return axios.get("http://localhost:8080/response/" + claimId);
    }


}


export default new ClaimService()