import axios from "axios";

var ajaxNotificationsRunning = true

/**
 * @type {{listeners: *[], get(*): Promise<AxiosResponse<any>>, removeListener(*): void, delete(*): Promise<AxiosResponse<any>>, launchNotification(*): void, addListener(*): void}}
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
    },
    async get(id) {
        return await axios.get('/ajax-notifications/' + id)
    },
    async delete(id) {
        return await axios.delete('/ajax-notifications/' + id)
    }
}

window.AjaxNotifications = AjaxNotifications

async function fetchNotifications() {

    if (ajaxNotificationsRunning) {
        
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
}

document.addEventListener("readystatechange", () => {

    if (document.readyState === "complete") {
        setInterval(fetchNotifications, interval)
        document.addEventListener("visibilitychange", () => {
            ajaxNotificationsRunning = !document.hidden
        })
    }
})