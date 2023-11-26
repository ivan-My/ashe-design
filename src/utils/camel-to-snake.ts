// 驼峰命名转小写下划线命名
// myVariableName -->my-variable-name
export function camelToSnake(camelCase: string): string {
    return camelCase.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
}
