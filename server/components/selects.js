import Select from 'react-select'
import { useState, useEffect } from 'react'

export default ({ setAttributes }) => {
    const [selects, setSelects] = useState({})
    const [options, setOptions] = useState([])

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
                let t = []
                for (const { name } of v) {
                    t.push({ value: name, label: name })
                }
                return (
                    <Select
                        onChange={change(k)}
                        options={t}
                        placeholder={k}
                        isMulti
                    />
                )
            })}
        </div>
    )
}