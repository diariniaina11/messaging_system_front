import styles from "./sideBar.module.css"
export default function SideBar()
{
    return (
        <div className={styles.sidebarContainer}>
            <ul className={styles.topElement}>
                <li className={`${styles.li}`}>
                    <img src="business_messages_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                    <li className={`${styles.badge}`}><b>1</b></li>
                </li>
                <li className={`${styles.li}`}>
                    <img src="circle_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                </li>
                <li className={`${styles.li}`}>
                    <img src="bigtop_updates_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                </li>
                <li className={`${styles.li}`}>
                    <img src="groups_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                    <li className={`${styles.badge}`}>1</li>
                </li>
                
            </ul>
            <ul className={styles.bottomElement}>
                <li className={`${styles.li}`}>
                    <img src="art_track_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                </li>
                <li className={`${styles.li}`}>
                    <img src="settings_b_roll_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                </li>
                <li className={`${styles.li}`}>
                    <img src="account_box_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></img>
                </li>
                
            </ul>
        </div>   
    )
}