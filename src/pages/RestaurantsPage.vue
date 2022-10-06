<template>
    <v-container>
      <v-item-group multiple>
        <v-container>
          <v-row>
            <v-col
              v-for="n in 12"
              :key="n"
              cols="12"
              md="4"
            >
              <restaurant-comp />
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
  </v-container>
</template>

<script>
import RestaurantComp from '@/components/RestaurantComp.vue';
// import { getDataFromEndPoint } from '@/api/api';

export default {
  name: 'RestaurantsPage',

  components: {
    RestaurantComp,
  },
  restaurants: null,
};
</script>

<style scoped>

</style>
