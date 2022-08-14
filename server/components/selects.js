import Select from 'react-select'
import { useState, useEffect } from 'react';

export default ({ setAttributes }) => {
    const [selects, setSelects] = useState([]);

    function change(attribute) {
        return value => {
            setAttributes(att => {
                return { ...att, [attribute]: value }
            });
        }
    }

    useEffect(() => {
        async function fetchData() {
            const ans = await fetch(`api/attributes`);
            const selects_dict = await ans.json();
            var selects_array = [];
            for (const [k, v] of Object.entries(selects_dict)) {
                let t = [];
                for (const { name } of v) {
                    t.push({ value: name, label: name });
                }
                selects_array.push(
                    <Select 
                        onChange={change(k)}
                        options={t}
                        placeholder={k} 
                        isMulti 
                    />
                );
            }
            setSelects(selects_array);
        }
        fetchData();
    }, []);

    return (
        <div>
            {selects}
        </div>
    )
}