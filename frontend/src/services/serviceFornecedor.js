
import http from '../http-common';

class ServiceFornecedor {
  listarTodos() {
    return http.get(`/fornecedor`);
  }

  findById(id) {
    return http.get(`/fornecedor/${id}`);
  }

  createFornecedor(data) {
    return http.post("/fornecedor/", data);
  }
  
    updateById(id, data) {
      return http.put(`/fornecedor/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/fornecedor/${id}`);
    }
  }
  
  export default new ServiceFornecedor();