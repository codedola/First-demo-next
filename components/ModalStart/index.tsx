import React, {useEffect, useState} from "react";

type ModalProps = {
    isVisible?: boolean,
    onOk?: () => void,
    onCancel?: () => void,
    isRenderHeader?: boolean,
    isRenderCloseIcon?: boolean,
    renderFooter?: () => JSX.Element,
    btnCancelText?: string,
    btnOkText?: string
}

// let classDefault = "tcl-modal__wrapper";
const CLASS_DEFAULT = "tcl-modal__wrapper"
const ModalStart: React.FC<ModalProps> = ({
    children, isRenderCloseIcon,btnOkText, btnCancelText,
    isRenderHeader, isVisible: isVisibleOutside, onOk, onCancel, renderFooter
}) => {
    const [classDefault, setClassDefault] = useState(CLASS_DEFAULT);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(function () {
        function hanlderEvent(evt: any) {
            if (evt.code === "Escape") {
                if(onCancel){
                    onCancel();
                } else {
                    setIsVisible(false)
                }
                
            }
        }
        document.addEventListener("keyup", hanlderEvent);

        return () => {
            document.removeEventListener("keyup", hanlderEvent)
        }
    }, [onCancel])

    useEffect(function () {
        if (isVisible === true) {
            // setClassDefault(classDefault + " show") // sai
            // Sai vì useEffect sẽ có thêm 1 biến deps
            setClassDefault((oldClass) => oldClass + " show" )
            document.querySelector("body").classList.add("tcl-modal__open");
        } else {
            setClassDefault(CLASS_DEFAULT)
            document.querySelector("body").classList.remove("tcl-modal__open");
        }
    }, [isVisible]);

    useEffect(function () {
        setIsVisible(isVisibleOutside)
    }, [isVisibleOutside])

    const _renderFooter = (): JSX.Element => {
        if (renderFooter) {
            return renderFooter();
        }

        return (
            <>
                <button
                    onClick={onCancel}
                    className="tcl-modal__cancel"
                >
                    {btnCancelText}
                </button>
                <button
                    onClick={onOk}
                    className="tcl-modal__ok"
                >
                    {btnOkText}
                </button>
            </>
        )
    }

    const _onCancel: () => void = () => {
        if(onCancel){
            onCancel();
        } else {
            setIsVisible(false)
        }
    }

    if(isVisible ===  false) return null
  
    return (
        <div className={ classDefault }>
            <div className="tcl-mask" onClick={ _onCancel}></div>
            <div className="tcl-dialog">
                <div className="tcl-modal__content">
                    {
                        isRenderHeader &&
                            (<div className="tcl-modal__header">
                            Title demo
                                {
                                    isRenderCloseIcon &&
                                    <button className="tcl-modal__close" onClick={ _onCancel}>X</button>
                                }
                            </div>)
                        
                    }
                    
                    <div className="tcl-modal__body">
                        {children}
                    </div>

                    <div className="tcl-modal__footer">
                        {
                            _renderFooter()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalStart.defaultProps = {
    isVisible: false,
    isRenderCloseIcon: true,
    isRenderHeader: true,
    btnCancelText: "Cancel",
    btnOkText: "Ok"
}


export default ModalStart;