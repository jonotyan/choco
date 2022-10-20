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
          @click="editUser({item})"
        >
          {{ item.functions[0] }}
        </button>
      </v-chip>
      <v-dialog
        v-model="dialog"
        :retain-focus="false"
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            color="red"
            dark
          >
            <button
              v-bind="attrs"
              v-on="on"
              @click="user=item"
            >
              {{ item.functions[1] }}
            </button>
          </v-chip>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Подвтверждение
          </v-card-title>
          <v-card-text>Вы действительно хотите удалить {{ user.name }}?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Отмена
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="confirmDelete()"
            >
              Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-data-table>
</template>

<script>
import { getUsers, deleteUser } from '@/api/users-requests';
import User from '@/components/User.vue';

export default {
  name: 'UsersPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { User },
  data: () => ({
    dialog: false,
    users: [],
    user: {},
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
    buttons: [
      { title: 'Добавить', icon: '', addressPage: '/add-profile/-1' },
    ],
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getUsers().then((data) => {
        this.users = data;
      });
    },
    confirmDelete() {
      this.dialog = false;
      deleteUser(this.user)
        .then(() => {
          this.loadData();
        });
    },
    editUser(user) {
      this.$router.push({ name: 'UserProfileEdit', params: { id: user.item.id, userInfo: user } });
    },
  },
};
</script>

<style scoped>

</style>
