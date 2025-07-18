import Link from "next/link";
import styles from "./header.module.scss"; // SCSS モジュールを読み込む

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>My Portfolio</div>
      <nav className={styles.nav}>
        <Link href="/home">ホーム</Link> |{" "}
        <Link href="/history-view-tools">視聴履歴分析</Link> |{" "}
        <Link href="/date-calculation">日数計算</Link> |{" "}
        <Link href="/home">営業成績集計</Link> |{" "}
        <Link href="/portfolio">このサイト</Link>
      </nav>
    </div>
  );
}
