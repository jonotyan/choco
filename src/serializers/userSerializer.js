class User {
  constructor(user = {}) {
    this.id = user.id;
    this.name = user?.name || ' ';
    this.username = user?.user_name || ' ';
    this.email = user?.email_address || ' ';
    this.phone = user?.phone_number || ' ';
    this.website = user?.website_url || ' ';
    this.functions = 'edit';
  }
}

export const serializeUser = (user) => new User(user);
export const serializeUsers = (data) => data.map(serializeUser);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeUsers,
};
