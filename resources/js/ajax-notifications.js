import axios from "axios";

/**
 * @type {{listeners: *[], removeListener(*): void, launchNotification(*): void, addListener(*): void}}
 */
const AjaxNotifications = {
    listeners: [],
    addListener(listener) {
        this.listeners.push(listener)
    },
    removeListener(listener) {

        let index = this.listeners.findIndex(l => l === listener)

        if (index !== -1) {

            this.listeners.splice(index, 1)
        }
    },
    launchNotification(notification) {

        this.listeners.forEach(listener => {
            listener(notification)
        })
    }
}

window.AjaxNotifications = AjaxNotifications

async function fetchNotifications() {

    try {

        let response = await axios.get('/ajax-notifications')

        if (debug) {
            console.log(response)
        }

        if (response.status === 200) {

            response.data.forEach(notification => {
                AjaxNotifications.launchNotification(notification)
            })
        }

    } catch (e) {

        if (debug) {
            console.log(e.message)
        }
    }
}

document.addEventListener("readystatechange", () => {

    if (document.readyState === "complete") {
        setInterval(fetchNotifications, interval)
    }
})