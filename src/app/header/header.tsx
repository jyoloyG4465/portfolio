import Link from "next/link";

export default function Header() {
  return (
    <div
      className="header"
      style={{
        padding: "1rem",
        backgroundColor: "#08E8DE",
        color: "#000",
        textAlign: "center",
        height: "150px",
      }}
    >
      <div
        className="title"
        style={{
          fontSize: "48px",
        }}
      >
        My Portfolio
      </div>
      <nav
        style={{
          marginTop: "16px",
          fontSize: "18px",
        }}
      >
        <Link href="/home">ホーム</Link> |{" "}
        <Link href="/history-view-tools">視聴履歴分析</Link> |{" "}
        <Link href="/date-calculation">日数計算</Link> |{" "}
        <Link href="/home">営業成績集計</Link> |{" "}
        <Link href="/portfolio">このサイト</Link>
      </nav>
    </div>
  );
}
