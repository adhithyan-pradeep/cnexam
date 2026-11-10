# cnexam

React app with four code snippet boxes: **EXP5**, **EXP6**, **EXP8**, **EXP10**.

## Run

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (default `http://localhost:5173`).

## Add code

Each box reads from its own text file:

| Box   | File                      |
| ----- | ------------------------- |
| EXP5  | `src/snippets/EXP5.txt`   |
| EXP6  | `src/snippets/EXP6.txt`   |
| EXP8  | `src/snippets/EXP8.txt`   |
| EXP10 | `src/snippets/EXP10.txt`  |

Paste code into the matching file and save. The page hot-reloads and shows the
file exactly as written — spaces, tabs and blank lines preserved. No need to
escape backticks or quotes.

## Build

```bash
npm run build
npm run preview
```
