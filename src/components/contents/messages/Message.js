import styles from "./Message.module.css";
import Head from "./head/Head";
import EmptyState from "./EmptyState";
import ChatList from "./ChatList";

export default function Message() {
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <Head />
                <ChatList />
            </div>
            <div className={styles.rightContent}>
                <EmptyState />
            </div>
        </div>
    )
}