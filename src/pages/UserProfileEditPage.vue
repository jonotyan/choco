<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="user.name"
      :counter="30"
      :rules="rules.name"
      label="Имя"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.username"
      :counter="30"
      :rules="rules.name"
      label="username"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.email"
      :rules="rules.email"
      label="Почта"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.phone"
      label="Телефон"
      requireduser
    ></v-text-field>

    <v-text-field
      v-model="user.website"
      label="Веб-сайт"
      required
    ></v-text-field>

    <v-btn
      @click="back"
      class="mr-4"
    >
      назад
    </v-btn>

    <template v-if="mode==='edit'">
    <v-btn
      color="success"
      class="mr-4"
      @click="resave"
    >
      Сохранить
    </v-btn>
    </template>

    <template v-else>
      <v-btn
        color="success"
        class="mr-4"
        @click="addBtn"
      >
        Добавить
      </v-btn>
    </template>

    <v-btn
      @click="reset"
      class="mr-4"
    >
      Очистить
    </v-btn>

    <v-btn
      color="red lighten-2"
      class="mr-4"
      @click="deleteBtn"
    >
      Удалить
    </v-btn>
  </v-form>
</template>

<script>

import { deserializeUser } from '@/serializers/userSerializer';
import { patchUser, deleteUser, postUser } from '@/api/users-requests';

export default {
  name: 'UserProfileEditPage',
  data: () => ({
    mode: '',
    valid: false,
    user: {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    },
    rules: {
      name: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 31) || 'Name must be less than 30 characters',
      ],
      email: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    },
  }),
  mounted() {
    const user = this.$route.params.userInfo?.item || this.user;
    if (Object.keys(user).length > 6) {
      this.mode = 'edit';
    } else {
      this.mode = 'add';
    }
    console.log(this.mode);
    this.loadData(user);
  },
  methods: {
    loadData(user) {
      if (user) {
        this.user = user;
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resave() {
      patchUser(deserializeUser(this.user))
        .then(() => {
          this.$router.push({ name: 'users' });
        });
    },
    addBtn() {
      console.log(this.user);
      console.log(deserializeUser(this.user));
      postUser(deserializeUser(this.user))
        .then(() => {
          this.$router.push({ name: 'users' });
        });
    },
    deleteBtn() {
      deleteUser(this.user)
        .then(() => {
          this.$router.push({ name: 'users' });
        });
    },
    back() {
      this.$router.push({ name: 'users' });
    },
  },
};
</script>

<style scoped>

</style>
