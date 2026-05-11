import * as vscode from "vscode"

export async function activate (context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('fpfe.helloword', () => {
    vscode.window.showInformationMessage('Hello World from fpfe')
  })

  context.subscriptions.push(disposable)
}

export async function deactivate () {
  
}