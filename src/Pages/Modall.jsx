import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styleModall from "./styleModall.module.scss"

const modalRootElement = document.querySelector("#modal")
const Modall = (props) => {
    const {open, onClose} = props;
    const element = useMemo(() => document.createElement("div"), [])
    useEffect(() => {
        if(open) {
            modalRootElement.appendChild(element)
        return () => {
            modalRootElement.removeChild(element)
        }
        }
    }, [])

    if (open) {
        return createPortal(
            <div className={styleModall.modal_background} onClick={onClose}>
                <div className={styleModall.modal_cart}>{props.children}</div>
            </div>,
            modalRootElement
        );
    }
    return null;
    
}
export default Modall;