export const LS = {
    setItem: (key: string, value: any) => localStorage.setItem(key, value),
    getItem: (key: string) => localStorage.getItem(key)
}