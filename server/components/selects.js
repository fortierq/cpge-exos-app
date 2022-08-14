import Select from 'react-select'
import { useState, useEffect } from 'react'

export default ({ setAttributes }) => {
    const [selects, setSelects] = useState({})

    function change(attribute) {
        return value => {
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
                return (
                    <Select
                        onChange={change(k)}
                        options={v.map(({ name }) => ({ value: name, label: name }))}
                        placeholder={k}
                        isMulti
                    />
                )
            })}
        </div>
    )
}