class User {
  constructor(user = {}) {
    this.name = user?.name || ' ';
    this.username = user?.username || ' ';
    this.email = user?.email || ' ';
    // this.city = user?.address?.city || ' ';
    this.phone = user?.phone || ' ';
    this.website = user?.website || ' ';
    // this.companyName = user?.company?.name || ' ';
    this.functions = 'edit';
  }
}

export const serializeUser = (user) => new User(user);
export const serializeUsers = (data) => data.map(serializeUser);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeUsers,
};
