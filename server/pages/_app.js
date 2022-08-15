import { useState } from 'react'
import 'bulma/css/bulma.min.css'
import '../css/style.css'
import { Columns } from 'react-bulma-components'
import Button from '../components/button'
import Selects from '../components/selects'
import Exos from '../components/exos'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const server = "http://127.0.0.1:3000"

export default () => {
    const [attributes, setAttributes] = useState({})
    const [exos, setExos] = useState([])

    return (
        <div className='form'>
            <h1>Exercices d'informatique</h1> <hr />

            <Columns>
                <Columns.Column size="one-third">
                    <Selects attributes={attributes} setAttributes={setAttributes} />
                    <div className='has-text-centered'>
                        <Button attributes={attributes} setExos={setExos} />
                    </div>
                </Columns.Column>

                <Columns.Column>
                    <Exos exos={exos} />
                </Columns.Column>
            </Columns>
        </div>
    )
}
