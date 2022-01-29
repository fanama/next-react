import { Footer } from '../component/Footer'
import { Select } from '../component/Utils/Select'
import { Option } from '../component/Utils/Select/Option'

import { useState } from 'react'
import { Headder } from '../component/Headder/Headder'

function HomePage() {
    const [selected, setSelected] = useState({
        value: '1',
        label: 'Option 1',
    })

    const options = [
        {
            value: '1',
            label: 'Option 1',
        },
        {
            value: '2',
            label: 'Option 2',
        },
        {
            value: '3',
            label: 'Option 3',
        },
    ]

    return (
        <div style={{ margin: 'none' }}>
            <Headder />
            <h2>Select Box</h2>
            <Select value={selected} width="50%">
                {options.map((option, index) => {
                    return (
                        <Option key={index} value={option} setValue={setSelected}>
                            {option.label}
                        </Option>
                    )
                })}
            </Select>
            <h2>value: {selected.value}</h2>

            <Footer />
        </div>
    )
}

export default HomePage
