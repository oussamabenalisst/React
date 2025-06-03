import { useRef } from 'react';
import styles from './page.module.css';
function Form(){
    const userinput=useRef<HTMLInputElement>(null)
    const passinput=useRef<HTMLInputElement>(null)
    const affich=()=>{
        if(userinput.current){
            if (userinput.current.value==="") {
                userinput.current.focus()
            }else{
                if(passinput.current)
                if(passinput.current.value==="")
                    passinput.current.focus()
                else
                alert(userinput.current.value+"-"+passinput.current.value)
            }

        }
    }
    return(
        <main>
            <fieldset name="ff">
                <legend>Form</legend>
                <input type="text" ref={userinput} />
                <br />
                <input type="password" ref={passinput}  />
                <br />
                <br />
                <button className={styles.button} onClick={affich} >Submit</button>
            </fieldset>
        </main>
    )
}
export default Form; 