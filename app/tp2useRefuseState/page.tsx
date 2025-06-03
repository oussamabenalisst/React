'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';
import Form from "./form";


function Home(){
    const [score , setscore] =useState(0);
    const [test,settest]=useState(false);
    const scores=()=>{
        setscore(score+1);
        if(score === 10){
            alert("yes")
            settest(true);
        }
    }
    useEffect(()=>{
        console.log("useEffect called")

    },[test]);
    return(
        <main className={styles.container}>
            <h2 className={styles.title}>Hooks</h2>
            <div className={styles.scoreText}>score = {score}</div>
            <button className={styles.button} onClick={scores}>push score</button>
            <br />
            <br />
            <Form />
        </main>
    )
}
export default Home;