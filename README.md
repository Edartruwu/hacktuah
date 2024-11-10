# Hacktuah 📢

**Hacktuah**: The ultimate Gen Z toolkit for error handling, logging, and throwing sassier errors than your ex's text messages! 🚀

Whether you're just casually vibing in the console or getting serious with error handling, `hacktuah` has you covered. It's got that Gen Z twist to keep things interesting while making sure your JavaScript and TypeScript code is the _chef's kiss_ of readability and style.

---

## 💡 What’s Hacktuah?

**Hacktuah** is a JavaScript/TypeScript utility that adds some much-needed humor (and functionality!) to the typical `try/catch` blocks and console logs. We’re throwing more than errors here—we’re throwing attitude! Say goodbye to boring error handling and say hello to `yappatron` and `hack` for error-catching, plus `yap` for all your logging needs.

---

## 📦 Installation

Pop this into your project with a quick npm/yarn/pnpm install:

```bash
npm install hacktuah
```

Or, if you're feeling fancy:

```bash
bun add hacktuah
```

---

## 🔧 Usage

So, how do you add some Gen Z flavor to your code? It’s easy—let’s dive in!

### 1. Import It

First things first, bring `hacktuah` into your project:

```javascript
import { yap, yappatron, hack } from "hacktuah";
```

### 2. Log Like a Legend with `yap`

Stop using basic `console.log` and start `yap`-ping.

```javascript
yap("👋 Hello, world!"); // Logs a message with style
yap.warn("😬 Something might go wrong here..."); // Warning vibes
yap.error("💀 Oops! That's an error."); // Error vibes
yap.info("ℹ️ Just a heads-up!"); // Info vibes
```

### 3. Throw Spicier Errors with `yappatron`

Want to throw an error that makes your dev friends giggle? Meet `yappatron`:

```javascript
yappatron("Bruh, you really messed this one up."); // Throws an error with sass
```

When you need to throw an error, make it unforgettable.

### 4. Handle Errors Like a Boss with `hack` and `tuah`

Say goodbye to boring try/catch blocks. With `hack` and `tuah`, you get style AND functionality:

```javascript
hack(() => {
  // Try something risky here 👀
  throw new Error("Oopsies!");
}).tuah((error) => {
  yap.error("Caught it with style:", error.message); // Handle the error with elegance
});
```

Now, that’s error handling that slaps.

---

## 🔥 API Documentation

### `yap` (Logging Utility)

A fun and flexible wrapper around `console` that logs with **major vibes**.

- **`yap(...params)`**: Logs a standard message.
- **`yap.warn(...params)`**: Logs a warning.
- **`yap.error(...params)`**: Logs an error.
- **`yap.info(...params)`**: Logs informational messages.

### `yappatron(message)`

Throws an error with a custom message, Gen Z style. Great for when you just need to throw shade and stop execution.

- **Parameters**:
  - `message` (string): The error message to sass up your error throwing.

### `hack(tryBlock)`

Handles risky code blocks with style, letting you chain on a `tuah` method for error-catching.

- **Parameters**:

  - `tryBlock` (Function): The function to execute in a try block.

- **Returns**: An object with a `tuah` method for catching errors.

### `tuah(catchBlock)`

The catch handler for `hack`. If an error is caught, `tuah` runs with the error as a parameter.

- **Parameters**:
  - `catchBlock` (Function): The function that handles the caught error.

---

## ⚡ TypeScript Support

Hacktuah is 100% TypeScript-friendly! You'll get full type hints, auto-completion, and error-checking without any hassle.

---

## 🤘 Contributing

We’re all about the vibes here! If you want to make `hacktuah` even more extra, fork the repo, make some edits, and open a PR. All contributions welcome (especially if they’re hilarious).

---

## 💬 Support

Found a bug or just want to share the love? Drop an issue on [GitHub](https://github.com/Edartruwu/hacktuah/issues). We’re here for it!

---

_Hacktuah: Making your JavaScript sassy and unforgettable, one error at a time._ 🌟

```
---
```
