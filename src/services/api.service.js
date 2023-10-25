class ApiService {
    constructor(url) {
      this.url = url;
    }
  
    async get(endpoint = "") {
      try {
        const response = await fetch(`${this.url}${endpoint}`);
        return await response.json();
      } catch (error) {
        throw error;
      }
    }

    async post(endpoint = "", body) {
        try {
          const response = await fetch(`${this.url}${endpoint}`, body);
          console.log('aqui ' + response);
          return await response.json();
        } catch (error) {
          throw error;
        }
      }
  }
  
  export default new ApiService('http://localhost:8080');