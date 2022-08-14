import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import Search from '../components/button';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const url = "https://github.com/fortierq/exos/raw/main/exos"
const server = "http://127.0.0.1:3000"
const attributes = ["ds", "subject", "language", "algorithm", "class"]

export default () => {
    const [selects, setCount] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ans = await fetch(`api/attributes`);
            const selects_dict = await ans.json();
            console.log(selects_dict)
            var selects_array = [];
            for (const [k, v] of Object.entries(selects_dict)) {
                let t = [];
                console.log(v)
                for (const { name } of v) {
                    t.push({ value: name, label: name });
                }
                selects_array.push(
                    <Select options={t} placeholder={k} isMulti />);
            }
            setCount(selects_array);
        }
        fetchData();
    }, []);

    return (
        <div className='form'>
            <CssBaseline />
            <h1>Exercices d'informatique</h1> <hr />
            <Columns>
                <Columns.Column size="one-quarter">
                    {selects}
                    <Search />
                </Columns.Column>
                <Columns.Column>
                    
                </Columns.Column>
            </Columns>
        </div>
    )
}
