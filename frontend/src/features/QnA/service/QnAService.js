import axios from "axios";

const QnA_API_BASE_URL = "http://localhost:3000/api/QnA";

class QnAService{

    getQnA() {
        return axios.get(QnA_API_BASE_URL);
    }
}

export default new QnAService();