interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'eRniOE8RQiYkCeTjaQQwnFCFY7gEjnT0',
  domain: 'prefabsoft.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
