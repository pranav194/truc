import Axios from "axios";

const BASE_URL = "https://reqres.in/api";
export function fetchCustomers() {
  const url = BASE_URL + "/users";
  return Axios.get(url).then((data) => process(data.data.data));
}
const process = (customers) =>
  customers.map((customer) => ({
    name: customer.first_name + " " + customer.last_name,
    username: customer.first_name,
    email: customer.email,
    createdAt: new Date(),
    phone: "123456789",
    id: customer.id,
  }));
export function deleteCustomers(id) {
  const url = BASE_URL + "/users" + "/" + id;
  return Axios.delete(url).then((data) => data.data);
}
export function editCustomer(id, customer) {
  const url = +"/users" + "/" + id;
  return Axios.put(url, customer).then((data) => data.data);
}

export function addCustomer(customer) {
  const url = BASE_URL + "/users";

  return Axios.post(url, customer).then((data) => data.data);
}
