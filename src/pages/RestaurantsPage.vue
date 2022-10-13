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
};
</script>

<style scoped>

</style>
