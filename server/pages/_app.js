import { useState } from 'react'
import 'bulma/css/bulma.min.css'
import { Columns } from 'react-bulma-components'
import Button from '../components/button'
import Selects from '../components/selects'
import Exos from '../components/exos'

const url = "https://github.com/fortierq/exos/raw/main/exos"
const server = "http://127.0.0.1:3000"

export default () => {
    const [attributes, setAttributes] = useState({})
    const [exos, setExos] = useState([])

    return (
        <div className='form'>
            <h1>Exercices d'informatique</h1> <hr />

            <Columns>
                <Columns.Column size="one-third">
                    <Selects setAttributes={setAttributes} />
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
