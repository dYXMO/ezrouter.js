const routes = [];
const ezrouter = function (path, callback) {
    const keys = [];
    const regex = path.replace(/:(\w+)/g, (match, key) => {
        keys.push({ name: key });
        return '([^/]+)';
    });
    routes.push({ regex: new RegExp(`^${regex}$`), keys, callback });
};

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    for (const route of routes) {
        const match = hash.match(route.regex);
        if (match) {
            const params = {};
            const keys = route.keys;
            for (let i = 0; i < keys.length; i++) {
                params[keys[i].name] = match[i + 1];
            }
            route.callback(params);
            return;
        }
    }
});

