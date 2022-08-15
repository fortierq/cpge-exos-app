// import Select from 'react-select'
import { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default ({ attributes, setAttributes }) => {
    const [selects, setSelects] = useState({})

    function change(attribute) {
        return ({ target: { value } }) => {
            setAttributes(att => {
                return { ...att, [attribute]: value }
            })
        }
    }

    useEffect(() => {
        async function fetchData() {
            const ans = await fetch(`api/attributes`)
            const selects_dict = await ans.json()
            setSelects(selects_dict)
        }
        fetchData()
    }, [])

    return (
        <div>
            {Object.entries(selects).map(([k, v]) => {
                let a = attributes[k]
                let value = (a === undefined ? [] : (typeof a === 'string' ? [a] : a))
                return (
                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel id={`label_${k}`}>{k}</InputLabel>
                        <Select
                            labelId={`label_${k}`}
                            value={value}
                            input={<OutlinedInput label={k} />}
                            onChange={change(k)}
                            multiple
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            {v.map(({ name }) => {
                                return <MenuItem value={name}>{name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                )
            })}
        </div>
    )
}