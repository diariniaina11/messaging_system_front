import styles from "./Head.module.css"
export default function Head(){
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
                <h1>

                </h1>

            </div>
        </div>
        
    );
}