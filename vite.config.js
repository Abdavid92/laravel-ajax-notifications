import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    build: {
        lib: {
            entry: resolve("./resources/js/ajax-notifications.js"),
            name: "ajax-notifications"
        },
    }
})
