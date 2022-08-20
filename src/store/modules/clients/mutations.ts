import * as types from "./types";

export default {
  setClients(state: types.IClientState, values: Array<any>) {
    state.clients = values;
  },
};
