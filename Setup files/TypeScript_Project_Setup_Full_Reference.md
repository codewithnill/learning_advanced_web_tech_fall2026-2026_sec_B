# 📘 TypeScript Project Setup — Full Reference

---

## Part 1 — Setup Commands (one-time per project)

**1.** Open PowerShell and go to the folder where the new project will live
```
cd "D:\path\to\parent\folder"
```

**2.** Create the project folder and enter it
```
mkdir my-ts-project
cd my-ts-project
```

**3.** Initialize the project (creates `package.json`)
```
npm init -y
```

**4.** Install TypeScript and tsx locally
```
npm install -D typescript tsx
```

**5.** If npm blocks `esbuild`'s install script (you'll see a warning), approve it
```
npm install-scripts approve esbuild
```

**6.** Open the folder in VS Code
```
code .
```

**7.** In VS Code, edit `package.json` and replace the `"scripts"` block with:
```json
"scripts": {
  "run": "tsx"
}
```
Save (**Ctrl+S**).

**8.** In the terminal (VS Code or PowerShell, inside the project folder), confirm everything works
```
npx tsx --version
```
Expected: `tsx v4.x.x` (plus Node version line).

✅ **Setup done.** This is a **one-time** thing per project. You never repeat it for new `.ts` files.

---

## Part 2 — Running any `.ts` file (per file)

**1.** Create your `.ts` file anywhere inside the project folder (root, subfolder, anywhere)
```
ni myfile.ts
```
Or right-click in VS Code → **New File**.

**2.** Write code in the file, save.

**3.** Run from the **project root** (the folder containing `package.json`) — the prompt must end in `\my-ts-project>`
```
npm run run "relative\path\to\myfile.ts"
```
or equivalently:
```
npx tsx "relative\path\to\myfile.ts"
```

📌 **Rules to never forget**
- The prompt must end in the **project root** folder name (the one with `package.json`).
- Path to file is **relative** to that root.
- `npm tsx` ❌ — does not exist. Use `npx tsx` ✅ or `npm run run` ✅.
- If you see `>>` at the start of a line, press **Ctrl+C** and paste commands one at a time.

---

## Part 3 — Short code sample

Create `demo.ts` in the project root with:

```typescript
const name: string = "Nill";
const age: number = 22;
const skills: string[] = ["TypeScript", "Node.js"];

function greet(person: string, years: number): string {
  return `Hello ${person}, you are ${years} years old.`;
}

console.log(greet(name, age));
console.log("Skills:", skills.join(", "));

export {};
```

---

## Part 4 — Running the sample

From the project root:

```
npm run run demo.ts
```

or

```
npx tsx demo.ts
```

---

## Part 5 — Expected output

```
Hello Nill, you are 22 years old.
Skills: TypeScript, Node.js
```

---

## 🧠 Quick cheat sheet

| Purpose | Command | Run from |
|---|---|---|
| One-time setup | `npm init -y` + `npm install -D typescript tsx` | new project folder |
| Approve esbuild (if warned) | `npm install-scripts approve esbuild` | project folder |
| Add run script | edit `package.json` `"scripts": { "run": "tsx" }` | VS Code |
| Run a file | `npm run run path\to\file.ts` | project root |
| Run a file (alt) | `npx tsx path\to\file.ts` | project root |
| Check tsx | `npx tsx --version` | project folder |
| If prompt shows `>>` | `Ctrl+C` | terminal |
| If `ENOENT package.json` | you're in wrong folder — `cd` back to project root | terminal |
