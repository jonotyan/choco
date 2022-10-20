class User {
  constructor(user = {}) {
    this.id = user.id;
    this.name = user.name || '';
    this.username = user.user_name || user.username || '';
    this.email = user.email_address || user.email || '';
    this.phone = user.phone_number || user.phone || '';
    this.website = user.website_url || user.website || '';
    this.functions = ['edit', 'del'];
    console.log('id', this.id);
    console.log('username', this.username);
    console.log('mail', this.email);
    console.log('num', this.phone);
    console.log('site', this.website);
  }

  deserialize() {
    return {
      id: this.id || '',
      name: this.name || '',
      user_name: this.username || this.user_name || '',
      email_address: this.email || this.email_address || '',
      phone_number: this.phone || this.phone_number || '',
      website_url: this.website || this.website_url || '',
    };
  }
}

export const serializeUser = (user) => new User(user);
export const serializeUsers = (data) => data.map(serializeUser);
export const deserializeUser = (user) => serializeUser(user).deserialize();
export const deserializeUsers = (data) => data.map(deserializeUser);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeUsers,
};
