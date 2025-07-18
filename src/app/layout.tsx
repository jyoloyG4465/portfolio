import type { Metadata } from "next";
import "./globals.scss";
import Header from "./header/header";
import styles from "./layout.module.scss"; // ← SCSS モジュールを読み込む

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
    <html lang="en">
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
