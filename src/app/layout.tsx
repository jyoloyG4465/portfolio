import type { Metadata } from "next";
import "./globals.scss";
import Header from "./component/Header/Header";
import styles from "./layout.module.scss"; // ← SCSS モジュールを読み込む
import Sidebar from "./component/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className={styles.layout}>
          <main className={styles.main}>{children}</main>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
