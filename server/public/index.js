const url = "https://github.com/fortierq/cpge-exos-info/raw/master/exos"

$(document).ready(_ => {
    fetch('http://localhost:3000/subjects')
        .then((response) => response.json())
        .then((data) => {
            for (const e of data) {
                $('#subject').append($('<option>', {
                    value: e.name,
                    text: e.name
                }));
            }
        });

    $("form").submit(_ => {
        const subject = $('#subject').find(":selected").text()
        console.log(subject)
        fetch(`http://localhost:3000/search?subject=${subject}`)
            .then((response) => response.json())
            .then((data) => {
                $('#exercises').empty();
                for (const e of data) {
                    const path = e.exercise_path;
                    $('#exercises').append($('<li>', {
                        text: path
                    }));
                    const file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}.png`
                    $('body').append(
                        `<details>
                            <summary>Exercice</summary>
                            <img src="${file}" style="background-color:white;">
                        </details>`)
                    // $('body').append(`<object data=${file} type="application/pdf">\n<iframe src=https://docs.google.com/viewer?url=${file}&embedded=true></iframe>\n</object>`)
                        // `<iframe src=https://mozilla.github.io/pdf.js/web/viewer.html?file=${file}#zoom=page-fit&pagemode=none height=500 width=100% allowfullscreen></iframe>`)
                }
            }
            );
        return false;
    });
});
