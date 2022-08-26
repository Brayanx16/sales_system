<template>
  <div class="q-mb-xl row no-wrap justify-between items-center">
    <span>
      <h2>Adicionar Produto</h2>
    </span>
    <span>
      <router-link class="link" :to="{ name: 'Produtos' }">
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
              v-model="quantity"
              label="Quantidade"
              lazy-rules
              mask="###.###.###-##"
            />
          </div>
        </div>
        <div class="row q-pb-md">
          <div class="col-6">
            <date-picker
              class="q-pr-md"
              label="Data de aquisição"
              :value="date_of_acquisition"
            />
          </div>
          <div class="col-6">
            <date-picker
              class="q-pl-md"
              label="Data de vencimento"
              :value="due_date"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <q-input
              class="q-pr-md"
              outlined
              dense
              v-model="purchase_price"
              label="Valor de compra"
            />
          </div>
          <div class="col-6">
            <q-input
              class="q-pl-md"
              outlined
              dense
              v-model="value"
              label="Valor de venda"
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
import { defineComponent, ref } from "vue";
import DatePicker from "@/components/DatePicker.vue";

export default defineComponent({
  components: {
    "date-picker": DatePicker,
  },

  setup() {
    return {
      name: ref(null),
      cpf: ref(null),
      sex: ref(null),
      phone: ref(null),
      options: ["Masculino", "Feminino", "Outros"],
      due_date: ref(null),
      date_of_acquisition: ref(null),
      quantity: ref(null),
      purchase_price: ref(null),
      value: ref(null),
    };
  },
});
</script>