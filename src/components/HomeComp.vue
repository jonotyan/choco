<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="3"
          md="1"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="100"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="text-h4 flex-grow-1 text-center"
                >
                  Tap
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.container, .restaurant-info{
  margin-top: 30px;
}
</style>
