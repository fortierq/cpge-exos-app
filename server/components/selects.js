// import Select from 'react-select'
import { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ attributes, setAttributes }) => {
    const [selects, setSelects] = useState({})

    function change(attribute) {
        return (event, value) => {
            console.log("CHANGE")
            console.log(value)
            setAttributes(att => {
                let a = { ...att, [attribute]: value }
                if (value.length == 0) {
                    delete a[attribute]
                }
                return a
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
        <Stack spacing={1.5}>
            {Object.entries(selects).map(([k, v]) => {
                let options = v.map(e => e.name)
                let a = attributes[k]
                let values = (a === undefined ? [] : (typeof a === 'string' ? [a] : a))
                return (

                    <Autocomplete
                        disableCloseOnSelect
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                              <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                              />
                              {option}
                            </li>
                          )}
                        labelId={`label_${k}`}
                        options={options}
                        onChange={change(k)}
                        multiple
                        renderInput={(params) => <TextField {...params} label={k} />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {options.map(name => {
                            return <MenuItem value={name}>{name}</MenuItem>
                        })}
                    </Autocomplete>
                )
            })}
        </Stack>
    )
}