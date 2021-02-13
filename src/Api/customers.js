import Axios from "axios";

const BASE_URL = "https://reqres.in/api";
export function fetchCustomers() {
  const url = +"/users";
  return Axios.get(url).then((data) => data.data);
}
export function deleteCustomers(id) {
  const url = +"/users" + "/" + id;
  return Axios.delete(url).then((data) => data.data);
}
export function editCustomers(id, customer) {
  const url = +"/users" + "/" + id;
  return Axios.put(url, customer).then((data) => data.data);
}

export function addCustomer(customer) {
  const url = +"/users";
  return Axios.post(url, customer).then((data) => data.data);
}
