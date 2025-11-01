// eslint-disable-next-line no-unused-vars
const oAuth2 = {
  /**
   * Initialize
   */
  init() {
    this.KEY = 'leethub_token';
    this.ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
    this.AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';
    // TODO: Replace with your own GitHub OAuth App credentials
    // Get them from: https://github.com/settings/developers
    this.CLIENT_ID = 'Ov23li4XG6jlemStB9QT';
    this.CLIENT_SECRET = '6df2c42a02218c9f15b2b529d03ac0bf6be06811';
    this.REDIRECT_URL = 'https://github.com/'; // Authorization callback URL from your OAuth App
    this.SCOPES = ['repo'];
  },

  /**
   * Begin
   */
  begin() {
    this.init(); // secure token params.

    let url = `${this.AUTHORIZATION_URL}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URL}&scope=`;

    for (let i = 0; i < this.SCOPES.length; i += 1) {
      url += this.SCOPES[i];
    }

    chrome.storage.local.set({ pipe_leethub: true }, () => {
      // opening pipe temporarily, redirects to github
      chrome.tabs.create({ url, active: true }, function () {});
    });
  },
};
