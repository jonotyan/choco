<template>
  <div class="container">
    <v-card
      shaped
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="300px"
      ></v-img>

      <v-card-title>
        {{ items[1].restaurantTitle }}
      </v-card-title>

      <v-card-subtitle>
        {{ items[1].city }}
      </v-card-subtitle>

      <v-card-actions>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Подробнее
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              s
            </v-card-title>

            <v-card-text class="restaurant-info">
              <span class="text--primary">Город: {{ items[1].city }}</span><br>
              <span class="text--primary">Адрес: {{ items[1].location }} </span><br>
              <span class="text--primary">Рейтинг: {{ items[1].rating }} </span><br>
              <span class="text--primary">Статус: {{ items[1].status }} </span><br>
              <span class="text--primary">Контактное лицо: {{ items[1].phone.name }} </span>
              <br>
              <span class="text--primary">Телефон: {{ items[1].phone.number }} </span><br>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Закрыть
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { getDataFromEndPoint } from '../api/api';
// import getOneRestaurantInfo from '../api/helpers';

export default {
  name: 'RestaurantComp',
  // props: ['items'],
  data() {
    return {
      dialog: false,
      items: {},
    };
  },
  created() {
    getDataFromEndPoint().then((restaurantData) => {
      console.log('this is ', restaurantData[1]);
      this.items = restaurantData;
    });
  },
};
</script>

<style scoped>
.container, .restaurant-info{
  margin-top: 30px;
}
</style>
