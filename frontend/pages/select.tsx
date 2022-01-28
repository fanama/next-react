import { Footer } from '../component/Footer'
import { Select } from '../component/Utils/Select'
import { Option } from '../component/Utils/Select/Option'

import { useState } from 'react'

function HomePage() {
    const [selected, setSelected] = useState('0')

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
            <h1>Select Box</h1>
            <Select value={selected}>
                {options.map((option, index) => {
                    return (
                        <Option key={index} value={option.value} setValue={setSelected}>
                            {option.label}
                        </Option>
                    )
                })}
            </Select>
            <Footer />
        </div>
    )
}

export default HomePage
