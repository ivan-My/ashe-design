export function copyCodeHtml(code: string, callback: any): void {
    const oInput = document.createElement('textarea')
    oInput.value = code
    document.body.appendChild(oInput)
    oInput.select() // 选择对象
    document.execCommand('Copy') // 执行浏览器复制命令
    oInput.className = 'oInput'
    oInput.style.display = 'none'
    oInput.setSelectionRange(0, 9999)
    callback()
}
