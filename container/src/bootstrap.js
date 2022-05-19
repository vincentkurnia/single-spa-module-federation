import { registerApplication, start } from "single-spa";

registerApplication(
    "navbar",
    () => import("navigation/Navbar"),
    (location) => location.pathname.startsWith("/")
);

registerApplication(
    "home",
    () => import("navigation/Home"),
    (location) => location.pathname.startsWith("/")
);

registerApplication(
    "demo",
    () => import("demo/Demo"),
    (location) => location.pathname.startsWith("/demo")
);

registerApplication(
    "another",
    () => import("another/Another"),
    (location) => location.pathname.startsWith("/another")
);

start();