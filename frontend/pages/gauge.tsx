import { Footer } from '../component/Footer'
import { Headder } from '../component/Headder/Headder'
import { Gauge } from '../component/Utils/Gauge'

function HomePage() {
    return (
        <div style={{ margin: 'none' }}>
            <Headder />
            <Gauge />
            <Footer />
        </div>
    )
}

export default HomePage
