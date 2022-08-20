import * as clientsService from "./services";
import { ActionContext } from "vuex";
import { IRootState } from "@/store";
import * as types from "./types";

export default {
  async fetchClients(
    context: ActionContext<types.IClientState, IRootState>,
    payload: any
  ) {
    const response = await clientsService.getClients(payload);
    if (response.status === "success") {
      context.commit("setClients", response.data);
      return response.data;
    } else {
      console.error("🚀 ~ file: actions.ts ~ line 16 ~ response", response);
      return response;
    }
  },
};
