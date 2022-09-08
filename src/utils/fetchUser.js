export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') && localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    return userInfo;
}