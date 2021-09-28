/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect, useMemo, useRef} from 'react'
import useConstructor from "../../../custom-hook/useConstructor"
interface IProps {
}

const HookPg: React.FC = ({ }: IProps) => {
    useMemo(function () {
        console.log("Contructor hook runnnnn useMemo");
    }, [])
    useConstructor(function () {
        console.log("useConstructor is built on Custom-Hook")
    })

    const [counter, setCounter] = useState<number>(0);
    const [urlReviewBase64, setUrlReviewBase64] = useState<any>("")
    const isRunHook = useRef(false);

    if (isRunHook.current === false) {
        console.log("Constructor cách 2, useRef");
        isRunHook.current = true;
    }


    useEffect(() => {console.log("run everytime when function re-render")})
    useEffect(() => { console.log("hello world useEffect") }, [])
    console.log("render run")

    function handleLoadFileInput() {
        const inputObj = document.querySelector("input[type='file']") as HTMLInputElement;
        inputObj.click();
    }

    function handleReadFileInput(evt) {
        const file = evt.target.files[0]
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            const base46Url: any = reader.result;
            setUrlReviewBase64(base46Url) 
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    return (
        <div>
            <h1>Couter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)} >Increate Counter</button>
            <hr />
            <div>
                <input type="file" onChange={handleReadFileInput}/>
                <button
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        backgroundColor: "lightblue"
                    }}
                    onClick={handleLoadFileInput}
                >
                    Click File
                </button>

                <div>
                    <img src={urlReviewBase64} alt="image" />
                </div>
            </div>
            
        </div>
    )
}
export default HookPg;