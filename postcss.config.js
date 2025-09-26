import autoprefixer from "autoprefixer";

export default {
    plugin: {
        autoprefixer: {
            overrideBrowserslist:['>0.1%', 'last 2 versions', 'not dead']
        }
    }
}