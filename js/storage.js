export const session = {
    set: (key, value) => {
        window.sessionStorage.setItem(key, value);
    },
    get: (key) => {
        return window.sessionStorage.getItem(key);
    },
};