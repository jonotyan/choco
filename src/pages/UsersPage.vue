<template>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-1"
  >
    <template v-slot:[`item.functions`]="{ item }">
      <v-chip
        color="green"
        dark
      >
        <button
          @click="editUser(item)"
        >
          {{ item.functions }}
        </button>
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { getDataFromPlaceHolder } from '@/api/users-requests';
import User from '@/components/User.vue';

export default {
  name: 'UsersPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { User },
  data: () => ({
    users: [],
    curName: null,
    mockup: {},
    editUserId: null,
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
      { text: 'Функции', value: 'functions' },
    ],
  }),
  created() {
    this.loadData();
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getDataFromPlaceHolder().then((data) => {
        this.users = data;
      });
    },
    editUser(user) {
      // this.userData = user;
      // console.log('ID:', user.id);
      this.$router.push({ name: 'UserProfileEdit', params: { id: user.id, userInfo: user } });
    },
  },
};
</script>

<style scoped>

</style>
