import { useState } from 'react'
import '../css/style.css'
import Button from '../components/button'
import Selects from '../components/selects'
import Exos from '../components/exos'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default () => {
    const [attributes, setAttributes] = useState({})
    const [exos, setExos] = useState([])

    return (
        <div>
            <h1>Exercices d'informatique</h1> <br />

            <Grid container spacing={2}>
                <Grid md={4} xs={12}>
                    <Stack spacing={2}>
                        <Selects attributes={attributes} setAttributes={setAttributes} />
                        <div style={{ textAlign: "center" }}>
                            <Button attributes={attributes} setExos={setExos} />
                        </div>
                    </Stack>
                </Grid>

                <Grid md={8} xs={12}>
                    <Exos exos={exos} />
                </Grid>
            </Grid>
        </div>
    )
}
