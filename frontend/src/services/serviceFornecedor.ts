import { Fornecedor } from 'types/fornecedor';
import http from '../http-common';

class TutorialDataService {
  listarTodos() {
    return http.get("/fornecedor");
  }

  findById(id: number) {
    return http.get(`/fornecedor/${id}`);
  }

  createFornecedor(data: Fornecedor) {
    return http.post("/fornecedor/", data);
  }
  
    updateById(id: number, data: Fornecedor) {
      return http.put(`/fornecedor/${id}`, data);
    }
  
    delete(id: number) {
      return http.delete(`/fornecedor/${id}`);
    }
  }
  
  export default new TutorialDataService();