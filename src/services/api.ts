import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export async function createCompany (formData : Company) {
    await api.post("/companies", formData)
}

export const getAllCompanies = async () => {
    const companies = await api.get("/companies", );
    return companies.data;
  }

export async function removeCompany(id : number) {
  await api.delete(`/companies/${id}`);
}

export async function updateCompany(formData : Company, id : any) {
  await api.put(`/companies/${id}`,formData)
}

export interface Company {
  name: string;
  cnpj: string;
  address: string;
}