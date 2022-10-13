<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
    :counter="30"
    :rules="nameRules"
      label="name"
      required
    ></v-text-field>

    <v-text-field
      v-model="username"
      :counter="30"
      :rules="nameRules"
      label="username"
      required
    ></v-text-field>

    <v-text-field
      v-model="mail"
      :rules="emailRules"
      label="mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="phone"
      label="phone"
      required
    ></v-text-field>

    <v-text-field
      v-model="web"
      label="web"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="submit"
    >
      Сохранить
    </v-btn>

    <v-btn
      @click="reset"
    >
      Очистить
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'UserProfileEdit',
  data: () => ({
    valid: false,
    updatedData: {},
    name: ' ',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 31) || 'Name must be less than 30 characters',
    ],
    username: 'store.getters.USERNAME',
    mail: ' ',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phone: ' ',
    web: ' ',

  }),
  created() {
    this.name = this.$store.getters.NAME;
    this.username = this.$store.getters.USERNAME;
    this.mail = this.$store.getters.EMAIL;
    this.phone = this.$store.getters.PHONE;
    this.web = this.$store.getters.WEB;
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      this.updatedData = {
        name: this.name,
        username: this.username,
        email: this.mail,
        phone: this.phone,
        web: this.web,
      };
      this.$store.dispatch('UPDATE_DATA', this.updatedData);
      this.$router.push({ name: 'users' });
    },
  },
};

</script>

<style scoped>

</style>
