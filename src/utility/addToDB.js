const getStoredApps = () => {
    const storedAppStr = localStorage.getItem("apps");
    if (storedAppStr) {
        const storedApp = JSON.parse(storedAppStr);
        return storedApp;
    } else {
        return [];
    }
};

const addToStoreDb = (id) => {
    const storedApps = getStoredApps();
    if (storedApps.includes(id)) {
        return false; 
    } else {
        storedApps.push(id);
        const data = JSON.stringify(storedApps);
        localStorage.setItem("apps", data);
        return true; 
    }
};

const removeFromStoreDb = (id) => {
    const storedApps = getStoredApps();
    const remaining = storedApps.filter(appId => appId !== id);
    const data = JSON.stringify(remaining);
    localStorage.setItem("apps", data);
};

export { addToStoreDb, getStoredApps, removeFromStoreDb };