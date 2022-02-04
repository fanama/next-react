import { Headder } from '../component/Headder/Headder'
import { TableMaker } from 'tablemaker'
import { useEffect, useState } from 'react'
import { Footer } from '../component/Footer'
import { checkToken } from '../tools/redirection'
import { Select, Option } from 'select-react-app'

function HomePage() {
    const [data, setData] = useState([
        { name: 'hero', age: '19' },
        { name: 'vilain', age: '50' },
        { name: 'vallager', age: '20' },
    ])
    const [value, setValue] = useState(data[0])
    useEffect(() => {
        checkToken()
    }, [])

    return (
        <div style={{ margin: 'none' }}>
            <Headder />
            <h2>Tableau hero : {value.name}</h2>
            <TableMaker attributes={data} />
            <Select value={value} displayValue="age">
                {data.map((item, index) => {
                    return (
                        <Option key={index} value={item} setValue={setValue}>
                            {item.name}
                        </Option>
                    )
                })}
            </Select>
            <Footer />
        </div>
    )
}

export default HomePage
