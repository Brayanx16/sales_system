<template>
  <div class="q-mb-xl row no-wrap justify-between items-center">
    <span>
      <h2>Adicionar Cliente</h2>
    </span>
    <span>
      <router-link class="link" :to="{ name: 'Clientes' }">
        <q-btn color="primary" label="Voltar" icon="arrow_back" no-caps />
      </router-link>
    </span>
  </div>
  <q-card style="border-radius: 8px">
    <q-item-section style="background-color: #e8f5ff">
      <span class="q-pa-md">Formulário de cadastro</span>
    </q-item-section>
    <q-separator />
    <q-card-section>
      <q-form>
        <div class="row q-pb-md">
          <div class="col-6">
            <q-input
              class="q-pr-md"
              outlined
              dense
              v-model="name"
              label="Nome"
              lazy-rules
            />
          </div>
          <div class="col-6">
            <q-input
              class="q-pl-md"
              outlined
              dense
              v-model="cpf"
              label="CPF"
              lazy-rules
              mask="###.###.###-##"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <q-input
              class="q-pr-md"
              outlined
              dense
              v-model="phone"
              label="Telefone"
              lazy-rules
              mask="## # ####-####"
            />
          </div>
          <div class="col-6">
            <q-select
              class="q-pl-md"
              label="Sexo"
              clearable
              dense
              outlined
              v-model="sex"
              :options="options"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>

    <q-separator />
    <q-card-actions class="row items-center justify-end">
      <q-btn
        class="q-mx-md"
        outline
        label="Cancelar"
        type="reset"
        color="primary"
        no-caps
      />
      <q-btn
        class="q-mx-md"
        label="Confirmar"
        type="submit"
        color="primary"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    return {
      name: ref(null),
      cpf: ref(null),
      sex: ref(null),
      phone: ref(null),
      options: ["Masculino", "Feminino", "Outros"],
    };
  },
};
</script>