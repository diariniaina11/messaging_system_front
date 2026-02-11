
import styles from './ChatList.module.css';

const chats = [
    {
        id: 1,
        name: "CMS-DAF-MEF",
        message: "~ Ronnah Airatiana: \uD83D\uDEAB Ce message a été supprimé", // blocked/deleted icon
        time: "18:50",
        unread: 202,
        avatarColor: "#00a884",
        isGroup: true
    },
    {
        id: 2,
        name: "Arson",
        message: "✓ 📝 saisie_v6.odt",
        time: "27/01/2026",
        unread: 0,
        avatarColor: "#dfe3e5"
    },
    {
        id: 3,
        name: "Plum Plum",
        message: "✓ Ok rall",
        time: "24/01/2026",
        unread: 0,
        avatarColor: "#ff9f1c"
    },
    {
        id: 4,
        name: "Instagram",
        message: "Cette entreprise utilise désormais un service sécurisé de la so...",
        time: "16/01/2026",
        unread: 1,
        avatarColor: "#E1306C"
    },
    {
        id: 5,
        name: "Evan",
        message: "📷 Photo",
        time: "31/12/2025",
        unread: 0,
        avatarColor: "#555"
    },
    {
        id: 6,
        name: "WhatsApp",
        message: "Nouveau : posez n'importe quelle question avec les sticke...",
        time: "25/12/2025",
        unread: 1,
        avatarColor: "#25D366"
    },
    {
        id: 7,
        name: "Cours Mr Mahera S6",
        message: "Vous avez été ajouté-e",
        time: "11/07/2025",
        unread: 0,
        avatarColor: "#777"
    },
    {
        id: 8,
        name: "★INFO PROM-13✓",
        message: "Vous avez été ajouté-e",
        time: "08/11/2024",
        unread: 0,
        avatarColor: "#888"
    },
    {
        id: 9,
        name: "CMS Interns",
        message: "Vous avez été ajouté-e",
        time: "10/10/2024",
        unread: 0,
        avatarColor: "#999"
    },
    {
        id: 10,
        name: "@CMS-INFO",
        message: "Vous avez été ajouté-e",
        time: "07/10/2024",
        unread: 0,
        avatarColor: "#aaa"
    }
];

export default function ChatList() {
    return (
        <div className={styles.chatList}>
            {chats.map((chat) => (
                <div key={chat.id} className={styles.chatItem}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar} style={{ backgroundColor: chat.avatarColor }}>
                            {/* Ideally an image here, using initials for fallback */}
                            {chat.name.substring(0, 1)}
                        </div>
                    </div>
                    <div className={styles.chatContent}>
                        <div className={styles.chatHeader}>
                            <span className={styles.chatName}>{chat.name}</span>
                            <span className={`${styles.chatTime} ${chat.unread > 0 ? styles.activeTime : ''}`}>{chat.time}</span>
                        </div>
                        <div className={styles.chatFooter}>
                            <div className={styles.messagePreview}>
                                {chat.message}
                            </div>
                            {chat.unread > 0 && (
                                <span className={styles.unreadBadge}>{chat.unread}</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
