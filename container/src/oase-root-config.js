import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

/*registerApplication({
  name: "another",
  app: () => System.import("@oase/another-mfe"),
  activeWhen: ["/"]
});

registerApplication({
  name: "demo",
  app: () => System.import("@oase/spa-mfe"),
  activeWhen: ["/demo"]
});*/

registerApplication({
  name: "navigation",
  app: () => import("navigation/Navigation"),
  activeWhen: ["/"]
});

// registerApplication({
//   name: "demo",
//   app: () => import("demo/Demo"),
//   activeWhen: ["/demo"]
// });

// registerApplication({
//   name: "navigation",
//   app: () => import("another/Another"),
//   activeWhen: ["/another"]
// });

start({
  urlRerouteOnly: true,
});
