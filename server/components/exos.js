import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const url = "https://github.com/fortierq/exos/raw/main/exos"

export default ({ exos }) => {
    return (
        <div>
            {exos.map(({ name, path }) => {
                const src = `${url}/${path}/${path.substring(path.lastIndexOf('/') + 1)}.png`
                return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content">
                            {name}
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={src} />
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}
