<template>
  <q-input outlined dense :label="label" v-model="date" mask="date">
    <q-popup-proxy transition-show="scale" transition-hide="scale">
      <q-date
        minimal
        v-model="date"
        :locale="{
          days: days,
          monthsShort: monthsShort,
          daysShort: daysShort,
          months: months,
        }"
      >
        <div class="row items-center justify-end">
          <q-btn v-close-popup label="Fechar" color="primary" flat />
        </div>
      </q-date>
    </q-popup-proxy>
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const monthsShort = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];
const daysShort = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export default defineComponent({
  props: {
    value: { type: String, default: "10/08/2022" },
    label: { type: String, default: "" },
  },

  setup(props) {
    const date = ref(props.value);

    return { days, daysShort, months, monthsShort, date };
  },
});
</script>