import axios from "axios";

const CustomersAPI = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTk0MDE2MjAsInVzZXIiOiJUZXN0IFVzZXIiLCJpYXQiOjE2ODc3NzkyMjAsImVtYWlsIjoidXNlckB0ZXN0LmNvbSJ9.hRJlfFl_6X2uwVLUFADQl2pvRTHfd74vMjIop2Av0GI",
  },
});

export { CustomersAPI };
