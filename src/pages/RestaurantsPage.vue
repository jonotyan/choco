<template>
    <v-container>
      <v-btn
            class="mx-2"
            fab
            dark
            small
            color="purple lighten-1"
            @click="deserialize()"
          >
            <v-icon
              dark
              color="red lighten-5">
              mdi-file-document-multiple
            </v-icon>
          </v-btn>
      <v-item-group multiple>
        <v-container>
          <v-row>
            <v-col
              v-for="(restaurant,index) in restaurants"
              :key="index"
              cols="12"
              md="4"
            >
              <restaurant-comp
                :restaurant="restaurant"
              />
<!--              :items="items"-->
<!--              :index="indexes"-->
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
  </v-container>
</template>

<script>
import RestaurantComp from '@/components/RestaurantComp.vue';
import { getDataFromEndPoint } from '@/api/choco-requests';
import { deserializeRestaurantInfoList } from '../serializers/deserializeRestaurant';
// import { getDataFromEndPoint } from '@/api/api';
// import { deserialize } from '@/serializers/restaurantsDeserializer';

export default {
  name: 'RestaurantsPage',

  components: {
    RestaurantComp,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  // indexes: ,
  created() {
    getDataFromEndPoint().then((restaurantData) => {
      this.restaurants = restaurantData;
      this.indexes = restaurantData.length;
      // eslint-disable-next-line no-console
      // console.log(restaurantData);
    });
  },
  methods: {
    deserialize() {
      console.log(deserializeRestaurantInfoList(this.restaurants));
    },
  },
};
</script>

<style scoped>

</style>
