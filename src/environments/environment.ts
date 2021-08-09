// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultLanguage: "ar",// ar or en 
  arTitle: "العنوان ",
  enTitle: "Title",
  // BASE_URL: "http://localhost:3000/",
  BASE_URL: "https://sport-api.dev.evento.sa/",
  CHECKOUT: "https://www.sport-checkout.dev.evento.sa/buy/",
  TEAM_ID: '007684bf-e762-4d30-bdaa-a27d7e6f2a48',
  HOSTED_SESSION: "https://test-gateway.mastercard.com/form/version/60/merchant/TEST3000000016/session.js?lang=ar",
  MERCHANT_ID: 'TEST3000000016',          // DEV
  MERCHANT_JS: "https://test-gateway.mastercard.com/checkout/version/60/checkout.js", // DEV
  MAX_TICKET: 5

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
