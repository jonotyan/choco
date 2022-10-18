class User {
  constructor(user = {}) {
    this.id = user.id;
    this.name = user?.name || ' ';
    this.user_name = user?.username || ' ';
    this.email_address = user?.email || ' ';
    this.phone_number = user?.phone || ' ';
    this.website_url = user?.website || ' ';
  }
}

export const deSerializeUser = (user) => new User(user);

export default {
  // eslint-disable-next-line import/prefer-default-export
  deSerializeUser,
};
