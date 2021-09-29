export const getTime = () => {
    const now = new Date();
    return {
        // get 12 hour format without having to deal with toLocaleString()
        hours: now.getHours() <= 13 ? now.getHours() : Math.floor((now.getHours() / 2)),
        minutes: now.getMinutes(),
    };
};