import { Footer } from '../component/Footer'
// import { Select, Option } from '../component/Utils/Select'
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
        {
            value: '4',
            label: 'Option 4',
        },
        {
            value: '5',
            label: 'Option 5',
        },
        {
            value: '6',
            label: 'Option 6',
        },
        {
            value: '7',
            label: 'Option 7',
        },
        {
            value: '8',
            label: 'Option 8',
        },
        {
            value: '9',
            label: 'Option 9',
        },
        {
            value: '10',
            label: 'Option 10',
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
