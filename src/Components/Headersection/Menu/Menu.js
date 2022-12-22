import React , {useContext} from "react"
import { searchContext } from "../../constjs/const"
import "./Menu.css"

export default function Menu(){
    const {setmenuuserwish} = useContext(searchContext)
    return(
        <>
            <div className="menu-section">
            <h2 className="menu-cat">Explore Your <b>Passion</b></h2>
                <div className="menu-container">
                    <div className="menu-area" onClick={()=>setmenuuserwish ("self_development")}>
                        <div className="menu-background self">
                            <h3 className="menu-title">SELF-DEVELOPMENT</h3>
                        </div>

                    </div>
                    <div className="menu-area" onClick={()=>setmenuuserwish ("Comics")}>
                        <div className="menu-background COMIC">
                            <h3 className="menu-title">FANTASY COMICS & NOVELS</h3>
                        </div>

                    </div>
                    <div className="menu-area"onClick={()=>setmenuuserwish ("Bussiness_success")}>
                        <div className="menu-background BUSI">
                            <h3 className="menu-title">BUSINESS SUCCESS</h3>
                        </div>

                    </div>
                    

                </div>

            </div>
        </>
    )
}