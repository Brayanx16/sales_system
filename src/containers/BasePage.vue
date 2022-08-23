<template>
  <q-layout view="lHh LpR lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          class="text-grey-5"
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-footer class="bg-grey-3" elevated>
      <q-toolbar>
        <q-toolbar-title class="text-grey-5">Footer</q-toolbar-title>
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
      <q-scroll-area class="fit s-vertical-line--right">
        <q-list>
          <q-item class="s-item__logo">
            <q-img
              height="60%"
              width="80%"
              src="https://cdn.quasar.dev/logo-v2/svg/logotype.svg"
            />
          </q-item>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <router-link class="router-link" :to="{ name: menuItem.name }">
              <q-item>
                <q-item-section avatar>
                  <q-icon size="1rem" :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </router-link>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-lg bg-grey-2">
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
    name: "Inicio",
    separator: false,
  },
  {
    icon: "group",
    label: "Clientes",
    name: "Clientes",
    separator: false,
  },
  // {
  //   icon: "inventory",
  //   label: "Produtos",
  //   name: "",
  //   separator: false,
  // },
  // {
  //   icon: "assignment",
  //   label: "Relatório",
  //   name: "",
  //   separator: false,
  // },
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

<style lang="scss">
// $

@import "@/assets/css/base-page.scss";
</style>