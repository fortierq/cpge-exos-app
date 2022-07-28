const url = "https://github.com/fortierq/exos/raw/main/exos"
const server = "http://localhost:3000"

$(document).ready(_ => {
    fetch(`${server}/subjects`)
    .then((response) => response.json())
    .then((data) => {
        for (const e of data) {
            $('#subject').append($('<option>', {
                value: e.name,
                text: e.name
            }));
        }
        $(".chosen-select").chosen();
    });
    
    $("#search").click(_ => {
        console.log(`exos: `);
        const subject = $('#subject').find(":selected").text()
        console.log(subject)
        fetch(`${server}/search?subject=${subject}`)
            .then((response) => response.json())
            .then((data) => {
                $('#exercises').empty();
                let exos = "";
                for (const e of data) {
                    const path = e.exercise_path;
                    fetch(`${server}/exercise?path=${path}`)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data)
                            const file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}.png`
                            exos += `<details>
                                <summary>${data[0].name}</summary>
                                <img src="${file}" style="background-color:white;">
                                </details>`
                        })
                }
                $("#exercises").html(exos);
                console.log(`exos: ${exos}`);
            }
            );
        return false;
    });
});
