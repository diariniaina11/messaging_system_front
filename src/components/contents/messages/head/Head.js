
import { useState } from "react";
import styles from "./Head.module.css";
export default function Head(){
    
    const [inputIsFocused, setInputIsFocused]=useState(false);
    const [buttonSelection, setButtonSelection]=useState({
        all:true,
        nSeen:false,
        favorite:false,
        group:false
    });


    function handleInputFocusStyle(state){
        setInputIsFocused(state)
    }
    function handleSelectedFilter(){}

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h3 className={styles.appName}>
                    WhatsApp
                </h3>
                
                <ul className={styles.ul}>
                    <li>
                        <img src="add_comment_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"/>
                    </li>
                    <li>
                        <img src="more_vert_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"/>
                        
                    </li>  
                </ul>  
            </div>
            <div className={styles.filter}>
                <div 
                    className={styles.searchInput} 
                    style={(inputIsFocused)? {border:'2px solid #20c063', background:'none'}:{border:'2px solid #2e2f2f'} }
                >
                    <img src="search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"/>
                    
                    <input 
                        onFocus={()=>{handleInputFocusStyle(true)}} 
                        onBlur={()=>{handleInputFocusStyle(false)}} 
                        style={(inputIsFocused)? {background:'none'}:{} }/>
                </div>
                
                <div className={styles.filterButtonContainer}>
                    <button className={styles.filterButton}><b>Toutes</b></button>
                    <button className={styles.filterButton}><b>Non lues</b></button>
                    <button className={styles.filterButton}><b>Favoris</b></button>
                    <button className={styles.filterButton}><b>Groupes</b></button>
                </div>
            </div>
        </div>
        
    );
}