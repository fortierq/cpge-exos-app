const url = "https://github.com/fortierq/exos/raw/main/exos"
const server = "http://localhost:3000"

async function search() {
    console.log(`exos: `);
    const subject = $('#subject').find(":selected").text()
    console.log(subject)
    const ans = await fetch(`${server}/search?subject=${subject}`)
    const data = await ans.json()
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

async function subjects() {
    const ans = await fetch(`${server}/subjects`)
    const data = await ans.json()
    for (const e of data) {
        $('#subject').append($('<option>', {
            value: e.name,
            text: e.name
        }));
    }
    $(".chosen-select").chosen();
}

$(document).ready(_ => {
    subjects();

    $("#search").click(search);
});
