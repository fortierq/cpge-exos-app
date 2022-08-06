const url = "https://github.com/fortierq/exos/raw/main/exos"
const server = "http://127.0.0.1:3000"
const attributes = ["ds", "subject", "language", "algorithm", "class"]

function exo_show(path, cor=false) {
    let file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}`
    if (cor) 
        file += '_cor'
    file += '.png'
    const id_exo = path.replace('/', '_')
    $(`#${id_exo}`).attr("src", file)
    
    const id = `#${id_exo}` + (cor ? '_cor' : '_enonce')
    if (!$(id).hasClass("is-active")) {
        $(`#${id_exo}_cor`).toggleClass("is-active")
        $(`#${id_exo}_enonce`).toggleClass("is-active")
    }
}

async function search() {
    console.log(`exos: `);
    let att = {}
    for (const a of attributes) {
        att[a] = $(`#${a}`).val()
    }
    const ans = await fetch(`${server}/search`, {
        "method": "POST",
        "credentials": 'same-origin',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(att)
    })
    // const ans = await fetch(`${server}/search?subjects=${subjects.join()}`)
    const data = await ans.json()
    console.log("data " + data)
    $('#exercises').empty();
    let exos = "";
    for (const e of data) {
        const path = e.exercise_path;
        const ans = await fetch(`${server}/exercise?path=${path}`)
        const data = await ans.json()
        const id_exo = path.replace('/', '_')
        let file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}`
        let file_cor = `${file}_cor.png`
        file += '.png'
        console.log("SEARCH")
        exos += `
        <details>
            <summary>${data[0].name}</summary>
            <div class="tabs">
            <ul>
                <li id="${id_exo}_enonce" class="is-active" onClick="exo_show('${path}')"><a>Énoncé</a></li>
                <li id="${id_exo}_cor" onClick="exo_show('${path}', true)"><a>Solution</a></li>
            </ul>
            </div>
            <img style="width: expression(this.width > 500 ? 500: this.width);" id=${id_exo} src="${file}" style="background-color:white;">
        </details>`
    }
    $("#exercises").html(exos);

    return false;
}

async function fill_select() {
    const ans = await fetch(`${server}/attributes`)
    const data = await ans.json()
    for (const a of attributes) {
        const select = $(`#${a}`)
        for (const d of data[a]) {
            select.append(`<option value="${d.name}">${d.name}</option>`)
        }
    }
    $(".chosen-select").chosen({ width: "100%" });
}

$(document).ready(_ => {
    fill_select();

    $("#search").click(search);
});
