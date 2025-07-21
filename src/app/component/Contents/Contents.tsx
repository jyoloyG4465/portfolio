"use client";

import { useToc } from "@/app/context/TocContext";
import styles from "./Contents.module.scss";

export default function Contents() {
  const { headings } = useToc();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.toc}>
        <div className={styles.contents}>目次</div>
        <ul>
          {headings.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
