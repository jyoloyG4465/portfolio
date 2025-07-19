import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="/logo-white-circle.png"
        alt="プロフィール画像"
        className={styles.image}
      />
      <h2 className={styles.name}>山田 太郎</h2>
      <p className={styles.bio}>
        フロントエンドエンジニア。React / Next.js を中心に開発しています。
      </p>
    </aside>
  );
}
