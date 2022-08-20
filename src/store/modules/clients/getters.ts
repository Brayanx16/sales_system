import * as types from "./types";

export default {
  getClient(state: types.IClientState): Array<any> {
    return state.clients;
  },
};
