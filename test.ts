import { yap, yappatron, hack } from "./index";

yap("Hello, world!");
yap.warn("This is a warning");
yap.error("This is an error");

try {
  yappatron("Something went wrong");
} catch (e) {
  yap.error("Caught error:", e);
}

hack(() => {
  throw new Error("Something failed");
}).tuah((err) => {
  yap.error("Caught error with hack:", err.message);
});
