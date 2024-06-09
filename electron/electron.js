/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { app, BrowserWindow, session, ipcMain } = require("electron");
const path = require("path");
//const { electron } = require("process");

//const isDev = process.env.IS_DEV === "true";
const isDev = true;

function createWindow() {
  const mainWindow = new BrowserWindow({
    maximizable: true,
    fullscreenable: true,
    fullscreen: false,
    width: 1080,
    height: 720,
    minWidth: 1080,
    minHeight: 720,
    icon: path.join(__dirname, "icon.png"),
    autoHideMenuBar: true,
    resizable: true,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000/login"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: "deny" };
  });

  function handleAuthentication() {
    session.defaultSession.cookies
      .get({ name: "Token" })
      .then((cookies) => {
        if (cookies.length === 0) {
          mainWindow.loadURL("http://localhost:3000/login");
        } else {
          mainWindow.loadURL("http://localhost:3000/");
        }
      })
      .catch((error) => {
        console.error(error);
        mainWindow.loadURL("http://localhost:3000/login");
      });
  }

  handleAuthentication();

  if (isDev) {
    // mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("set-cookie", (event, { name, value, days }) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  session.defaultSession.cookies
    .set({
      url: "http://localhost",
      name: name,
      value: value,
      expirationDate: expires.getTime() / 1000,
    })
    .then(() => {
      console.log("Cookie set successfully");
    })
    .catch((error) => {
      console.error("Failed to set cookie", error);
    });
});
