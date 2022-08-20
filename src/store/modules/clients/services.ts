import api from "axios";

export const getClients = async (params: any): Promise<any> =>
  api.get(`/api/files/documents/credentials/`, { params });
