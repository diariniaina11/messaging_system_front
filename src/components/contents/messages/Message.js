import Chat from "./chat/chat";
import styles from "./Message.module.css";
import Head from "./head/Head";

export default function Message(){
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <Head>
                    
                </Head>
                
            </div>
            <div className={styles.rightContent}>
                tset2
                
            </div>
            
        </div>
        
    )
}