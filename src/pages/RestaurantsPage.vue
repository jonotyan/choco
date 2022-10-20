<template>
    <v-container>
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
                :index="index"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
  </v-container>
</template>

<script>
import RestaurantComp from '@/components/RestaurantComp.vue';
import { getRestaurants } from '@/api/choco-requests';

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
  mounted() {
    getRestaurants().then((restaurantData) => {
      this.restaurants = restaurantData;
    });
    // console.log(this.restaurants);
  },
};
</script>

<style scoped>

</style>
