const url = "https://github.com/fortierq/exos/raw/main/exos"
const server = "http://127.0.0.1:3000"
const attributes = ["ds", "subject", "language", "algorithm", "class"]

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
        console.log(data)
        const file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}.png`
        exos += `<details>
                <summary>${data[0].name}</summary>
                <img src="${file}" style="background-color:white;">
                </details>`
    }
    $("#exercises").html(exos);
    console.log(`exos: ${exos}`);
    return false;
}

async function fill_select() {
    for (const a of attributes) {
        const ans = await fetch(`${server}/values/${a}`)
        const data = await ans.json()
        for (const e of data) {
            $(`#${a}`).append($('<option>', {
                value: e.name,
                text: e.name
            }));
        }
    }
    $(".chosen-select").chosen({width: "90%"}); 
}

$(document).ready(_ => {
    fill_select();

    $("#search").click(search);
});
