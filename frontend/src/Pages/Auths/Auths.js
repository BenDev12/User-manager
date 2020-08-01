class Auths {
  constructor() {
    this.Authenticated = fales;
  }

  login(cb) {
    this.Authenticated = true;
    cb();
  }
  logout(cb) {
    this.Authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.Authenticated;
  }
}

export default new Auths();
