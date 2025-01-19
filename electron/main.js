import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sequelize from './database.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

app.on('ready', async () => {

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
  } catch (error) {
    console.error(error);
  }

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // Optional if needed
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // During development, load the Nuxt dev server
  mainWindow.loadURL('http://localhost:3000');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    // Recreate window if closed on macOS
    createWindow();
  }
});