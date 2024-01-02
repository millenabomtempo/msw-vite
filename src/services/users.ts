import { getAxios } from "../hooks/useAxios";
import { ENDPOINTS } from "./endpoints";

export interface IUser {
  id: number,
  nome: string
}

export const getUsers = async (): Promise<IUser[]> => {
	const api = getAxios();
	const response = await api.get(ENDPOINTS.users);
	return response.data;
};

