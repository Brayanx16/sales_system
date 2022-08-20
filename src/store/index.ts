import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

import ClientStore from "@/store/modules/clients";

import { IClientState } from "@/store/modules/clients/types";

export interface IRootState {
  utils: IClientState;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

const store = createStore<IRootState>({
  modules: {
    clients: ClientStore,
  },
});

export default store;
