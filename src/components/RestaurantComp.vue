<template>
  <div class="container">
    <v-card
      shaped
      class="mx-auto card"
      max-width="344"
    >
      <v-img
        v-bind:src="restaurant.image"
        height="300px"
      ></v-img>

      <v-card-title>
        {{ restaurant.restaurantTitleMin }}...
      </v-card-title>

      <v-card-subtitle>
        {{ restaurant.city.name }}
      </v-card-subtitle>

      <v-card-actions>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="btn-more"
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
              {{ restaurant.restaurantTitle }}
            </v-card-title>

            <v-card-text class="restaurant-info">
              <span class="text--primary">Город: {{ restaurant.city.name }}</span><br>
              <span class="text--primary">Адрес: {{ restaurant.location.locationText }} </span><br>
              <span class="text--primary">Рейтинг: {{ restaurant.rating }} </span><br>
              <span class="text--primary">Статус: {{ restaurant.status }} </span><br>
              <ul> {{ initPhones() }}
                <li v-for="phoneId in phones.length" :key="phoneId">
                  <span class="text--primary">
                    Контактное лицо: {{ restaurant.phoneInfo[phoneId - 1].name }}
                  </span><br>
                  <span class="text--primary">
                    Телефон: {{ restaurant.phoneInfo[phoneId - 1].number }}
                  </span>
                </li>
              </ul>
              <br>
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

export default {
  name: 'RestaurantComp',
  phones: 0,
  props: {
    restaurant: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    initPhones() {
      this.phones = this.restaurant.phoneInfo;
    },
  },
};
</script>

<style scoped>
.container, .restaurant-info {
  margin-top: 30px;
}
.card:hover {
  box-shadow: black 1px 1px 8px 1px;
}
.btn-more{
  margin: 0 0 12px 0;
}
</style>
