const { BrowserWindow } = require('electron')

// ���ߴ���Ⱦ������ʹ�� `remote`.
// const { BrowserWindow } = require('electron').remote

let win = new BrowserWindow({ width: 800, height: 600 })
win.on('closed', () => {
  win = null
})

// ����Զ��URL
win.loadURL('https://www.szchenxi.cf/')
