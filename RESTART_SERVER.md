# 🔄 How to Restart the Dev Server

## Quick Steps:

### 1. Stop the Server
- Look at your terminal window
- Press: **`Ctrl + C`** (hold Ctrl, press C)
- Wait until you see the command prompt again

### 2. Start the Server Again
- Type: **`npm run dev`**
- Press Enter
- Wait for it to start (you'll see "Local: http://localhost:3000")

### 3. Refresh Your Browser
- Go to your browser
- Press **F5** or click the refresh button
- The app should now work!

---

## Visual Guide:

```
Terminal Before:
─────────────────────────────────
> npm run dev
  VITE v5.0.8  ready in 500 ms
  ➜  Local:   http://localhost:3000/
─────────────────────────────────

[Press Ctrl + C]

Terminal After Stopping:
─────────────────────────────────
> npm run dev
  VITE v5.0.8  ready in 500 ms
  ➜  Local:   http://localhost:3000/
^C
> _  ← Server stopped, ready for new command
─────────────────────────────────

[Type: npm run dev]

Terminal After Restarting:
─────────────────────────────────
> npm run dev
  VITE v5.0.8  ready in 500 ms
  ➜  Local:   http://localhost:3000/
─────────────────────────────────
```

---

## Common Questions:

**Q: What if Ctrl+C doesn't work?**
- Try pressing it a few times
- Or close the terminal window and open a new one

**Q: Do I need to restart after changing .env file?**
- Yes! Always restart after changing environment variables

**Q: Can I just refresh the browser?**
- No, you need to restart the server for .env changes to take effect

---

## When to Restart:

✅ After changing `.env` file
✅ After installing new packages (`npm install`)
✅ If the app stops working
✅ After making config changes

---

**That's it! Just Ctrl+C, then npm run dev** 🚀

