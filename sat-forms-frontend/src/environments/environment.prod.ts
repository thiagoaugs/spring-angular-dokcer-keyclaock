export const environment = {
  production: true,
  ambiente: "prod",
  serverUrl: '/api',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://auth-dev.satsolucoes.com.br/auth',
    // Realm
    realm: 'sat-forms',
    clientId: 'sat-forms-front',
  },
};
