# Select-React-App

## Install

- > npm install select-react-app

## How to use

- Example : 
  
  ```ts
  import { Select, Option } from 'select-react-app'

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
        }
    ]

    return (
            <Select value={selected} width="50%">
                {options.map((option, index) => {
                    return (
                        <Option key={index} value={option} setValue={setSelected}>
                            {option.label}
                        </Option>
                    )
                })}
            </Select>
                )
}

  ```
