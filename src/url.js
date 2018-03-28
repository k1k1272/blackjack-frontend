let api;
if (process.env.REACT_APP_API === "production") {
  api = "https://casino-backend.herokuapp.com/"
} else {
  api = "http://localhost:3000/"
}

export default api
