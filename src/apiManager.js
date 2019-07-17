const currentURL = "http://localhost:5002"

    export default {
        getAll(element) {
            return fetch(`${currentURL}/${element}`)
            .then( e => e.json())
    },

        deleteAndList(element, id) {
            return fetch(`${currentURL}/${element}/${id}`, {
            method: "DELETE"})
            .then(e => e.json())
            .then( () => {
                return this.getAll(element)
            })
        }
}