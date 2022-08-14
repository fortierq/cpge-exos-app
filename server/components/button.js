import Button from '@mui/material/Button';


export default function Search() {
    // constructor(props) {
    //     super(props);

    //     this.search = this.search.bind(this);
    //     this.exo_show = this.exo_show.bind(this);
    // }

    // exo_show(path, cor = false) {
    //     let file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}`
    //     if (cor)
    //         file += '_cor'
    //     file += '.png'
    //     const id_exo = path.replace('/', '_')
    //     $(`#${id_exo}`).attr("src", file)

    //     const id = `#${id_exo}` + (cor ? '_cor' : '_enonce')
    //     if (!$(id).hasClass("is-active")) {
    //         $(`#${id_exo}_cor`).toggleClass("is-active")
    //         $(`#${id_exo}_enonce`).toggleClass("is-active")
    //     }
    // }

    async function search() {
        console.log("search")
        //     let att = {}
        //     for (const a of attributes) {
        //         att[a] = $(`#${a}`).val()
        //     }
        //     const ans = await fetch(`${server}/search`, {
        //         "method": "POST",
        //         "credentials": 'same-origin',
        //         "headers": {
        //             "Content-Type": "application/json"
        //         },
        //         "body": JSON.stringify(att)
        //     })
        //     const data = await ans.json()
        //     $('#exercises').empty()
        //     let exos = ""
        //     for (const e of data) {
        //         const path = e.exercise_path;
        //         const ans = await fetch(`${server}/exercise?path=${path}`)
        //         const data = await ans.json()
        //         const id_exo = path.replace('/', '_')
        //         const file = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}`
        //         let tabs = (
        //         <div class="tabs">
        //         <ul>
        //             <li id="${id_exo}_enonce" class="is-active" onClick={this.exo_show(path)}><a>Énoncé</a></li>
        //             <li id="${id_exo}_cor" onClick="this.exo_show('${path}', true)"><a>Solution</a></li>
        //         </ul>
        //         </div>)
        //         exos += `
        //     <details>
        //         <summary>${data[0].name}</summary>
        //         ${tabs}
        //         <img id=${id_exo} src="${file}" style="background-color:white;">
        //     </details>`
        //     }
        //     $("#exercises").html(exos);
    }

    return (
        <div className='has-text-centered'>
            <Button variant="outlined"
                onClick={search}>
                Chercher
            </Button>
        </div>
    );
}
