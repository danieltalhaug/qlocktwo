export const getTime = () => {
    const now = new Date();
    return {
        // get 12 hour format without having to deal with toLocaleString()
        hours: now.getHours() % 12 || 12,
        minutes: now.getMinutes(),
    };
};