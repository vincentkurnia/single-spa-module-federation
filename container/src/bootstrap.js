import { registerApplication, start } from "single-spa";

// registerApplication(
//     "navbar",
//     () => import("navigation/Navbar"),
//     (location) => location.pathname.startsWith("/")
// );

// registerApplication(
//     "home",
//     () => import("navigation/Home"),
//     (location) => location.pathname.startsWith("/")
// );

// registerApplication(
//     "demo",
//     () => import("demo/Demo"),
//     (location) => location.pathname.startsWith("/demo")
// );

// registerApplication(
//     "another",
//     () => import("another/Another"),
//     (location) => location.pathname.startsWith("/another")
// );

registerApplication({
    name: "navbar",
    app: () => import("navigation/Navbar"),
    activeWhen: ["/"]
});

registerApplication({
    name: "home",
    app: () => import("navigation/Home"),
    activeWhen: ["/"]
});

registerApplication({
    name: "demo",
    app: () => import("demo/Demo"),
    activeWhen: ["/demo"]
});

registerApplication({
    name: "another",
    app: () => import("another/Another"),
    activeWhen: ["/another"]
});


start({
    urlRerouteOnly: true
});