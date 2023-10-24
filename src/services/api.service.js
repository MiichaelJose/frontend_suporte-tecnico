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

    async post(endpoint = "") {
        try {
          const response = await fetch(`${this.url}${endpoint}`);
          return await response.json();
        } catch (error) {
          throw error;
        }
      }
  }
  
  export default new ApiService('');