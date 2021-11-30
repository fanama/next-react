import {Headder} from '../component/Headder/Headder'
import {Main} from '../component/main'
import {useEffect} from 'react'
import { Footer } from '../component/Footer'
import { checkToken } from '../tools/redirection'
import { Zoom } from '../component/Utils/Zoom'

function HomePage() {

    useEffect(() => {

        checkToken()
    }, [])

    return <div style={{margin:'none'}}>
          <Headder />

            <h2>Zoom</h2>

          <Zoom image={"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"} />
          <Footer/>
      </div>
  }
  
  export default HomePage