interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  audience: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'eRniOE8RQiYkCeTjaQQwnFCFY7gEjnT0',
  domain: 'prefabsoft.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  audience: 'http://localhost:3000/secure',
  apiUrl: 'http://localhost:3000'
};
