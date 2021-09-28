import React, {useState} from 'react'
import ModalStart from '../../components/ModalStart';
const ModalNhanDo: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);


    function handleOpenModal() {
        setOpenModal(true)
    }

    return (
        <div className="container">
            <h1>Hello Modal</h1>
            {
                openModal ?
                    <ModalStart
                        isVisible={openModal}
                        // onOk={() => {console.log("onOK RUN")}}
                        onCancel={() => setOpenModal(false)}
                        // isRenderHeader={true}
                        // isRenderCloseIcon={false}
                        // btnOkText="Submit"
                    >
                        <h1>Demo Modal</h1>

                        <form>
                            <input type="text" />
                        </form>
                    </ModalStart>
                    :
                    null
            }

            <button
                onClick={handleOpenModal}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "lightblue",
                    borderRadius: 10,
                    borderColor: "transparent",
                    cursor: "pointer"
                }}
            >
                Open Modal
            </button>
        </div>
    )
}

export default ModalNhanDo;