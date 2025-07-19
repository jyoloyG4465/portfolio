import Link from "next/link";
import styles from "./Header.module.scss"; // SCSS モジュールを読み込む

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Link href="/home" className={styles.link}>
          <img src="/logo-white-circle.png" className={styles.logo} />
          <span>My Portfolio</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/home">ホーム</Link> |{" "}
        <Link href="/history-view-tools">視聴履歴分析</Link> |{" "}
        <Link href="/date-calculation">日数計算</Link> |{" "}
        <Link href="/sales-report">営業成績集計</Link> |{" "}
        <Link href="/portfolio">このサイト</Link>
      </nav>
    </div>
  );
}
