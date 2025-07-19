"use client";

import { useToc } from "@/app/context/TocContext";
import styles from "./Contents.module.scss";

export default function Contents() {
  const { headings } = useToc();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.toc}>
        <h3>目次</h3>
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
