/**
 * @typedef {Object} Player
 * 
 * @property {Number} rank
 * @property {String} uuid
 * 
 * @property {Number} total_time
 * @property {Number} gates_solved
 * @property {Number} total_keys
 * 
 * @property {String} username_raw
 * @property {String} username_html
 */

/**
 * @typedef {Object} Leaderboard
 * 
 * @property {Number} total
 * @property {Player[]} results
 */

/**
 * @returns {Promise<Leaderboard>}
 */
async function fetchLeaderboard() {
    let url = "res/leaderboard.json"

    let request = await fetch(url)
    let leaderboard = await request.json()

    return leaderboard
}

/**
 * @param {Number} time 
 * @returns {String}
 */
function parseTime(time) {
    let seconds = Math.floor(time / 1000)

    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60

    let hours = Math.floor(minutes / 60)
    minutes = minutes % 60

    seconds = seconds.toString().padStart(2, "0")
    minutes = minutes.toString().padStart(2, "0")
    hours = hours.toString().padStart(2, "0")
    
    return `${hours}:${minutes}:${seconds}`
}

async function renderLeaderboard() {
    let leaderboard = await fetchLeaderboard()

    let table = document.querySelector("table.leaderboard")

    leaderboard.results.forEach((player, i) => {
        let tr = document.createElement("tr")
        if (i < 10) tr.classList.add("top10")

        let time = parseTime(player.total_time)

        tr.innerHTML = `<td class="place">#${player.rank}</td>
        <td class="name">${player.username_html}</td>
        <td class="gates"><img src="res/images/gate.svg"> ${player.gates_solved}</td>
        <td class="keys"><img src="res/images/key.svg"> ${player.total_keys}</td>
        <td class="time"><img src="res/images/timer.svg"> ${time}</td>`

        table.appendChild(tr)
    })
}

renderLeaderboard()