
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