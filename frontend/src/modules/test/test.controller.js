const TestController = {};
const ENV = import.meta.env;

// Base URL for the API
const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

TestController.callToAPI = async () => {
  await fetch(`${API_URL}/test`, {
    method: "GET",
    headers: {
      'Accept': "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};


export default TestController;