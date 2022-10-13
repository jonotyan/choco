<template>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-1"
  >
    <template v-slot:[`item.btn`]="{ item }">
      <v-chip
        :color="getColor()"
        dark
      >
        <button
          @click="cur_name = item.name; editUser()"
        >
          {{ item.btn }}
        </button>
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import User from '@/components/User.vue';
// import { getDataFromPlaceHolder } from '@/api/users-requests';
// import { serializeUsers } from '@/serializers/userSerializer';

export default {
  name: 'UsersPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { User },
  data: () => ({
    users: [],
    cur_name: null,
    headers: [
      {
        text: 'Имя',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Никнейм', value: 'username' },
      { text: 'Почта', value: 'email' },
      { text: 'Телефон', value: 'phone' },
      { text: 'Сайт', value: 'website' },
      { text: 'Функции', value: 'btn' },
    ],
  }),
  created() {
    if (this.$store.getters.IS_START) {
      this.$store.dispatch('TURN_STARTER_OFF');
      this.$store.dispatch('SET_DATA');
    }
    this.users = this.$store.getters.USERS;
  },
  methods: {
    editUser() {
      if (this.cur_name !== null) {
        for (let i = 0; i < this.users.length; i += 1) {
          if (this.cur_name === this.users[i].name) {
            // console.log(this.users[i].name);
            this.$store.dispatch('CHANGE_USER_ID', i);
            // console.log(this.$store.getters.NAME);
            break;
          }
        }
      }
      this.$router.push({ name: 'UserProfileEdit' });
    },
    getColor() {
      return 'green';
    },
    show() {
      console.log(this.cur_id);
    },
  },
};
</script>

<style scoped>

</style>
