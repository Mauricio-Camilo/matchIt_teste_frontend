import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export default async function createCompany (formData : Company) {
    await api.post("/companies", formData)
}

export const getAllCompanies = async () => {
    const companies = await api.get("/companies", );
    return companies.data;
  }

export interface Company {
  name: string;
  cnpj: string;
  address: string;
}