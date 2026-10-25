# 📘 NestJS Project Setup — Full Reference (Windows)

This guide assumes you already have a **working plain TypeScript setup** at the root of your workspace (with `package.json`, `node_modules`, `typescript`, and `tsx` installed) so that you can run any `.ts` file with `npm run run "path\to\file.ts"`. This document adds NestJS **on top of that setup** in its own dedicated subfolder — without touching or breaking the plain TypeScript setup.

---

## Part 1 — Prerequisites (verify once)

**1.** Open PowerShell. From anywhere, run:
```
node --version
npm --version
```
Both must print version numbers. If not, install Node.js LTS first from https://nodejs.org.

---

## Part 2 — Install the Nest CLI globally (one-time, forever)

**1.** Navigate to your workspace root (the folder containing your plain TypeScript `package.json`):
```
cd "D:\path\to\your\workspace-root"
```

**2.** Install the Nest CLI globally:
```
npm install -g @nestjs/cli
```

**3.** Verify it works:
```
nest --version
```
Expected: a version number like `12.0.10`.

✅ This install is **machine-wide** — you never repeat it again, not even for future NestJS projects.

---

## Part 3 — Create a new NestJS project (one-time per project)

**1.** From the **workspace root** (the folder containing your plain TypeScript `package.json`):
```
nest new nest-api --package-manager npm --skip-git
```

**2.** The CLI will ask two questions. Answer them **exactly** like this:

- `Would you like to set up @nestjs/observe ...?` → type **`n`** and press Enter
- `Which module system would you like to use?` → press **↓ (Down Arrow)** to highlight **`CJS (CommonJS)`**, then press Enter

**3.** Wait 1–2 minutes. The output ends with:
```
🚀  Successfully created project nest-api
```

✅ A new folder `nest-api/` now exists inside the workspace root. Your plain TypeScript setup is untouched.

---

## Part 4 — Enter the project and start the dev server

**1.** From the workspace root, enter the project:
```
cd nest-api
```

**2.** Start the dev server:
```
npm run start:dev
```

**3.** Expected output (last few lines):
```
[Nest] ... LOG [RoutesResolver] AppController {/}: 
[Nest] ... LOG [RouterExplorer] Mapped {/, GET} route
[Nest] ... LOG [NestApplication] Nest application successfully started
```

It stays running — that's normal. The terminal is now watching for file changes.

---

## Part 5 — Test in the browser

**1.** Leave the terminal running. Open a browser.

**2.** Go to:
```
http://localhost:3000/
```

**3.** Expected output:
```
Hello World!
```

✅ Your backend is live and responding to real HTTP requests.

---

## Part 6 — Stop and restart the server

**Stop:**
- In the terminal running the server, press **Ctrl+C**.

**Restart:**
```
npm run start:dev
```

⚠️ Closing the browser tab does **not** stop the server. Only `Ctrl+C` or closing the terminal does.

---

## Part 7 — The edit → save → auto-reload loop

**1.** From inside `nest-api/`, open VS Code:
```
code .
```

**2.** In the Explorer panel, open `src/app.service.ts`. Its content:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

**3.** Change the string to something else, e.g. `'Hello from Nill!'`.

**4.** Save (**Ctrl+S**).

**5.** Watch the terminal — it recompiles automatically.

**6.** Refresh the browser at `http://localhost:3000/`. Expected:
```
Hello from Nill!
```

✅ That's the whole NestJS dev loop: **edit → save → recompile → refresh**.

---

## Part 8 — Verify the plain TypeScript setup still works

Once you've confirmed NestJS works, prove nothing was broken.

**1.** Stop the Nest server (Ctrl+C in its terminal).

**2.** Go back to the workspace root:
```
cd ..
```

**3.** Your prompt must end in the workspace root folder name. Then run any `.ts` file inside `Mid/` or `Final/`:
```
npm run run "Mid\Lab 2 - 7 Oct, 2026\1.ts"
```

**4.** Expected: the same output as before. If you see it — both setups coexist fine.

---

## Part 9 — Creating additional NestJS projects

Each NestJS app is a full project and needs its own folder. To create another one, run this from the **workspace root**:
```
nest new another-api --package-manager npm --skip-git
```

Answer **No** to `@nestjs/observe` and choose **CJS (CommonJS)**. Then:
```
cd another-api
npm run start:dev
```

⚠️ Only run **one** NestJS dev server at a time — otherwise port 3000 will already be in use (`EADDRINUSE` error). Stop one before starting another.

---

## Part 10 — Where to run each command (quick reference)

| Command | Run from |
|---|---|
| `npm install -g @nestjs/cli` | anywhere (one-time) |
| `nest --version` | anywhere |
| `nest new <name> --package-manager npm --skip-git` | workspace root |
| `cd <name>` | workspace root |
| `npm run start:dev` | inside the NestJS project folder |
| `code .` | inside the NestJS project folder |
| `cd ..` | anywhere (go one level up) |
| `npm run run "path\to\file.ts"` | workspace root (plain TS files only) |

---

## Part 11 — Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `nest : The term 'nest' is not recognized` | PATH not refreshed after global install | Close and reopen the terminal / VS Code, then retry `nest --version` |
| `EADDRINUSE: address already in use :::3000` | Another NestJS (or any) server is running on port 3000 | Find the old terminal and `Ctrl+C` it, or use `npm run start:dev -- --port 3001` |
| `npm.ps1 cannot be loaded` | PowerShell blocks npm scripts | Run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` in the current terminal |
| Browser shows "This site can't be reached" | Server not running / crashed | Check the terminal — press Ctrl+C and `npm run start:dev` again |
| The CLI prompts for a package manager | You forgot `--package-manager npm` | Always include that flag |
| A new project nests another inside `nest-api/` | You ran `nest new` from inside `nest-api/` | `cd ..` back to the workspace root first |

---

## 🧠 Quick cheat sheet

| Purpose | Command | Run from |
|---|---|---|
| Install Nest CLI (once, forever) | `npm install -g @nestjs/cli` | anywhere |
| Check CLI version | `nest --version` | anywhere |
| Create a new NestJS project | `nest new <name> --package-manager npm --skip-git` | workspace root |
| Enter the project | `cd <name>` | workspace root |
| Start dev server (auto-reload) | `npm run start:dev` | inside project folder |
| Open project in VS Code | `code .` | inside project folder |
| Test in browser | open `http://localhost:3000/` | browser |
| Stop server | `Ctrl+C` | the terminal running the server |
| Run plain TypeScript file | `npm run run "path\to\file.ts"` | workspace root |

---

## 🚫 Rules to never forget

- **One NestJS project = one folder.** Never create a new NestJS project inside another one. Always run `nest new ...` from the workspace root.
- **Only one dev server on port 3000 at a time.** Stop the previous one before starting another.
- **The plain TypeScript setup and NestJS never interfere** — as long as you don't delete the root `package.json`.
- **`npm tsx` ❌ — does not exist.** Use `npx tsx` ✅ or `npm run run` ✅ (for plain files only).
- **Check your prompt before every command.** It tells you which folder you're in — that's what determines which `package.json` / `nest-cli.json` the tool uses.
