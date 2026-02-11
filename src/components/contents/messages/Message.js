import Chat from "./chat/chat";
import styles from "./Message.module.css";

export default function Message(){
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                test1
                
            </div>
            <div className={styles.rightContent}>
                tset2
                
            </div>
            
        </div>
        
    )
}