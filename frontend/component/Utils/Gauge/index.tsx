import * as React from 'react'

const { useState, useEffect } = React

export function Gauge() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(100)
    const [current, setCurrent] = useState<number>(0)
    const [sites, setSites] = useState<string[]>(['site1', 'site2', 'site3'])
    const [site, setSite] = useState<string>('')
    const [date, setDate] = useState('25/07/1996')

    const [color, setColor] = useState<string>('#008000')

    useEffect(() => {
        if (current / max >= 1) {
            setColor('#ff0200')
        } else if (current / max < 0.75) {
            setColor('#01ff42')
        } else {
            setColor('#ffd801')
        }
    }, [current])

    const list = sites.map((site) => (
        <option key={site} value={site}>
            {site}
        </option>
    ))

    const autorisé = () => {
        let res = max - current > 0 && current >= 0 ? max - current : max

        if (max - current <= 0) {
            return 0
        }

        return res
    }

    return (
        <div className="Gauge-app">
            <div className="data headder">
                <select
                    value={site}
                    onChange={(e) => {
                        setSite(e.target.value)
                    }}
                    className="data-title"
                >
                    {list}
                </select>
                <input type="number" onChange={(e) => setCurrent(parseInt(e.target.value))} />
                <h1 className="data-title"> {date}</h1>
            </div>
            <div className="data">
                <Meter min={min} max={max} current={current} color={color} />
            </div>

            <div className="data">
                {/* <div className="data-element" style={{ backgroundColor: color }}> */}
                {/*     min */}
                {/*     <input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value))} /> */}
                {/* </div> */}

                <div className="data-element">
                    Nombre de personnes autorisées à entrer
                    {/* <div>{max}/{current}</div> */}
                    <div>{autorisé()}</div>
                </div>

                {/* <div className="data-element" style={{ backgroundColor: color }}> */}
                {/*     max */}
                {/*     <input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value))} /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

interface meter {
    min: number
    max: number
    current: number
    color: string
}

const Meter = (props: meter) => {
    const { max, min, current, color } = props

    const [gauge, setGauge] = useState<string>('Meter')

    const rotation = () => {
        if (current / max >= 1) {
            return `rotate(${max / (2 * max)}turn)`
        } else if (current < 0) {
            return `rotate(0turn)`
        } else {
            return `rotate(${current / (2 * max)}turn)`
        }
    }

    return (
        <div className={gauge}>
            <div className="meter-body">
                <div className="gauge_fill" style={{ transform: rotation(), backgroundColor: color }}></div>
                <div className="gauge_cover" style={{ color }}>
                    <div>Nombre d'occupants:</div>
                    <div className="number">{current > 0 ? current : 0}</div>
                </div>
            </div>
        </div>
    )
}
