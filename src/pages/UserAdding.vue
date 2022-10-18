<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="curUser.name"
    :counter="30"
    :rules="curUser.nameRules"
      label="Имя"
      required
    ></v-text-field>

    <v-text-field
      v-model="curUser.username"
      :counter="30"
      :rules="curUser.nameRules"
      label="username"
      required
    ></v-text-field>

    <v-text-field
      v-model="curUser.email"
      :rules="curUser.emailRules"
      label="Почта"
      required
    ></v-text-field>

    <v-text-field
      v-model="curUser.phone"
      label="Телефон"
      required
    ></v-text-field>

    <v-text-field
      v-model="curUser.website"
      label="Веб-сайт"
      required
    ></v-text-field>

    <v-btn
      @click="back"
      class="mr-4"
    >
      назад
    </v-btn>

    <v-btn
      color="success"
      class="mr-4"
      @click="submit"
    >
      Добавить
    </v-btn>

    <v-btn
      @click="reset"
      class="mr-4"
    >
      Очистить
    </v-btn>
  </v-form>
</template>

<script>

import { deSerializeUser } from '@/serializers/userDeserialize';
import { postRequestUser } from '@/api/users-requests';

export default {
  name: 'UserAdding',
  data: () => ({
    valid: false,
    updatedData: {},
    curUser: {
      id: null,
      name: ' ',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 31) || 'Name must be less than 30 characters',
      ],
      username: 'store.getters.USERNAME',
      email: ' ',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone: ' ',
      website: ' ',
    },
  }),
  mounted() {
    const user = this.$route.params.userInfo;
    if (user !== undefined) {
      this.loadData(user);
      return;
    }
    this.createData();
  },
  methods: {
    loadData(user) {
      this.curUser.id = user.id;
      this.curUser.name = user.name;
      this.curUser.username = user.username;
      this.curUser.email = user.email;
      this.curUser.phone = user.phone;
      this.curUser.website = user.website;
    },
    createData() {
      this.curUser.name = ' ';
      this.curUser.username = ' ';
      this.curUser.email = ' ';
      this.curUser.phone = ' ';
      this.curUser.website = ' ';
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    updateUser() {
      this.updatedData = {
        id: this.curUser.id,
        name: this.curUser.name,
        username: this.curUser.username,
        email: this.curUser.email,
        phone: this.curUser.phone,
        website: this.curUser.website,
      };
    },
    submit() {
      // console.log('ID:', this.curUser.id);
      this.updateUser();
      const deserializedData = deSerializeUser(this.updatedData);
      postRequestUser(deserializedData);
      this.$router.push({ name: 'users' });
    },
    back() {
      this.$router.push({ name: 'users' });
    },
  },
};
</script>

<style scoped>

</style>
