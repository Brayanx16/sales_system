<template>
  <q-layout view="lHh LpR lFf" class="shadow-2 rounded-borders">
    <q-header elevated style="background-color: #fff">
      <q-toolbar>
        <q-btn
          flat
          style="color: #171919"
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-footer style="background-color: #fff" elevated>
      <q-toolbar>
        <q-toolbar-title style="color: #171919">Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="drawer"
      class="text-black"
      show-if-above
      :width="200"
      :breakpoint="700"
      elevated
    >
      <q-scroll-area style="background-color: #fff" class="fit">
        <q-list>
          <q-item
            style="color: #171919; justify-content: center; align-items: center"
          >
            <q-img
              class="quasar-logo__logotype"
              height="60%"
              width="80%"
              src="https://cdn.quasar.dev/logo-v2/svg/logotype.svg"
            />
          </q-item>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page style="padding: 32px">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from "vue";

const menuList = [
  {
    icon: "dashboard",
    label: "Dashboard",
    separator: true,
  },
  {
    icon: "group",
    label: "Clientes",
    separator: false,
  },
  {
    icon: "inventory",
    label: "Produtos",
    separator: false,
  },
  {
    icon: "assignment",
    label: "Relatório",
    separator: false,
  },
];

export default {
  name: "BasePage",

  setup() {
    return {
      drawer: ref(false),
      menuList,
    };
  },
};
</script>