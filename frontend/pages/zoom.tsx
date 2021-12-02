import {Headder} from '../component/Headder/Headder'
import {Main} from '../component/main'
import {useEffect, useState} from 'react'
import { Footer } from '../component/Footer'
import { checkToken } from '../tools/redirection'
import { Zoom } from '../component/Utils/Zoom'
import { ZoomProvider } from '../component/Utils/Zoom/Context'

function HomePage() {

    const [zoomLocked, setZoomLocked] = useState(true)

    useEffect(() => {

        checkToken()
    }, [])

    return <div style={{margin:'none'}}>
          <Headder />

            <h2>Zoom</h2>
            <input type="checkbox"  className="zoom-locked" onClick={() => setZoomLocked(!zoomLocked)} />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} >

            <ZoomProvider>
                <Zoom image={"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"} WIDTH={640} HEIGHT={480} zoomLock={zoomLocked} />
            </ZoomProvider>
        
        </div>
          
          <Footer/>
      </div>
  }
  
  export default HomePage