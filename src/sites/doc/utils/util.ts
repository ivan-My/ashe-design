import { nav } from '@/config.json'

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

/**
 * @description 查找组件名字
 * @param {string} name
 * @return {string}
 */
export const findComponentName = (name: string): string => {
    let result = ''
    for (let item of nav) {
        const foundItem = item.packages.find(
            (i) => i.name.toLocaleLowerCase() === name
        )
        if (foundItem) {
            result = foundItem.cName
            break
        }
    }
    return result
}
