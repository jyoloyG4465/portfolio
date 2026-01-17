import type { Metadata } from "next";
import "./globals.scss";
import Header from "./component/Header/Header";
import AboutMe from "./component/AboutMe/AboutMe";
import styles from "./layout.module.scss"; // ← SCSS モジュールを読み込む
import { TocProvider } from "./context/TocContext";
import Contents from "./component/Contents/Contents";

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
        <TocProvider>
          <Header />
          <div className={styles.layout}>
            <main className={styles.main}>{children}</main>
            <div className={styles.sidebar}>
              <div className={styles.section}>
                <AboutMe />
              </div>
              <div className={styles.section}>
                <Contents />
              </div>
            </div>
          </div>
        </TocProvider>
      </body>
    </html>
  );
}
