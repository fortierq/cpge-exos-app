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
                <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
                <img src="${file}" style="background-color:white;">
                </details>`
    }
    $("#exercises").html(exos);
    console.log(`exos: ${exos}`);
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
    $(".chosen-select").chosen({width: "100%"}); 
}

$(document).ready(_ => {
    fill_select();

    $("#search").click(search);
});
