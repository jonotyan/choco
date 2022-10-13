<template>
  <v-app>
    <v-navigation-drawer
      class="v-navigation-drawer--fixed"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Навигация</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <template v-if="item.title !== 'Пользователи'">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link class="text-decoration-none grey--text" v-bind:to="item.addressPage">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <!-- -->
      <div class="text-center">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="red lighten-2"
          @click.stop="drawer = !drawer"
        >
          <v-icon
            dark
            small
            color="pink lighten-5">
            mdi-format-list-bulleted-square
          </v-icon>
        </v-btn>
        <router-link v-bind:to="items[2].addressPage">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="blue lighten-1"
          >
            <v-icon
              dark
              color="pink lighten-5">
              mdi-human-edit
            </v-icon>
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    items: [
      { title: 'Главная', icon: 'mdi-home', addressPage: '/' },
      { title: 'Рестораны', icon: 'mdi-hail', addressPage: '/restaurants' },
      { title: 'Пользователи', icon: ' ', addressPage: '/users' },
    ],
  }),
};
</script>

<style scoped>

</style>
