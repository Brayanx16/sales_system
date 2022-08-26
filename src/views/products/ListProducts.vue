<template>
  <div class="q-mb-xl row no-wrap justify-between items-center">
    <span>
      <h2>Produtos</h2>
    </span>
    <span>
      <router-link class="link" :to="{ name: 'Cadastrar produto' }">
        <q-btn color="primary" label="Cadastrar produto" icon="add" no-caps />
      </router-link>
    </span>
  </div>
  <q-card style="border-radius: 8px">
    <q-card-section>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[10, 20, 30]"
        rows-per-page-label="por página"
      >
        <template v-slot:top-right>
          <q-input
            dense
            debounce="300"
            outlined
            v-model="filter"
            placeholder="Buscar"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:bottom>
          <div class="q-pa-md">
            <q-select dense outlined v-model="model" :options="options" />
          </div>
          <div>
            <q-pagination v-model="current" :max="5" boundary-numbers />
          </div>
        </template>
        <template v-slot:no-data>
          <div class="full-width row flex-center text-primary">
            <span> Nenhum registro encontrado. </span>
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const columns = [
  { name: "id", field: "id", label: "Nª", align: "left", sortable: true },
  {
    name: "name",
    field: "name",
    label: "Nome do produto",
    align: "left",
    sortable: true,
  },
  {
    name: "due_date_formated",
    field: "due_date_formated",
    label: "Data de vencimento",
    align: "center",
    sortable: true,
  },
  {
    name: "quantity",
    field: "quantity",
    label: "Quantidade",
    align: "center",
    sortable: true,
  },
  {
    name: "value",
    field: "value",
    label: "Valor do Produto",
    align: "center",
    sortable: true,
  },
];

export default defineComponent({
  setup() {
    return {
      rows: ref([]),
      columns,
      filter: ref(""),
      current: ref(1),
      model: ref("5/pagina"),
      options: ["5/pagina", "10/pagina", "20/pagina", "30/pagina", "50/pagina"],
    };
  },
});
</script>