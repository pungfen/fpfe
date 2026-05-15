import * as vscode from 'vscode'

let sbi: vscode.StatusBarItem | null
export async function activate({ subscriptions }: vscode.ExtensionContext): Promise<void> {
  sbi = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100)
  subscriptions.push(sbi)
}

export async function deactivate(): Promise<void> {

}
