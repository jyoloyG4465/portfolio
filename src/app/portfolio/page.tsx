"use client"; // Contextのstateを操作するのでクライアントコンポーネントにする

import { useEffect } from "react";
import { useToc } from "../context/TocContext";
import Link from "next/link";

const headings = [
  { id: "introduction", title: "概要" },
  { id: "reason", title: "きっかけ" },
  { id: "skills", title: "技術スタック" },
  { id: "products", title: "開発の工夫点" },
  { id: "learnings", title: "得られた学び・感想" },
  { id: "closing", title: "おわりに" },
];

export default function PortfolioPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="product-title">本サイト</div>
      <div className="top-photo">
        <img src="/portfolio-top.jpg" />
      </div>
      <section id="introduction" className="page-section">
        <div className="section-title">概要</div>
        <div className="career-paragraph">
          このサイトは、私のスキルやこれまでに作成したプロジェクトを紹介するために作成しました。
          主に個人開発で取り組んだアプリケーションやツールを通して、技術的な関心、実装時の工夫点、
          そして開発を通じて得た学びについても掲載しています。
        </div>
      </section>

      <section id="reason" className="page-section">
        <div className="section-title">きっかけ</div>
        <div className="career-paragraph">
          このポートフォリオサイトは、自身のスキルや経験を整理・言語化し、体系的にまとめることを目的に作成しました。
          将来を見据えたアウトプットとして、これまでの取り組みを客観的に示せる場を設けたいと考えました。
        </div>
        <div className="career-paragraph">
          あわせて、Next.jsを用いた開発経験を積むことも、ひとつの動機となっています。
        </div>
      </section>

      <section id="skills" className="page-section">
        <div className="section-title">技術スタック</div>
        <ul className="section-list">
          <li>フロントエンド: Next.js (TypeScript) / SCSS </li>
          <li>インフラ/環境構築: github pages</li>
        </ul>
      </section>

      <section id="products" className="page-section">
        <div className="section-title">開発の工夫点</div>
        <div className="career-paragraph">
          開発にあたっては、視認性や情報の整理性を意識し、ブログサイトのレイアウトを参考にしながら全体の構成を設計しました。
        </div>
        <div className="career-paragraph">
          UIはページごとの役割に応じて、Header、AboutMe、Contentsといったコンポーネントに分割しました。結果として、構造が整理され、コード全体の見通しが良くなりました。
        </div>
      </section>

      <section id="learnings" className="page-section">
        <div className="section-title">得られた学び・感想</div>
        <div className="career-paragraph">
          今回、フロントエンドフレームワークを使って静的サイトを制作するのは初めての経験でしたが、ゼロから開発するよりも構造的で見通しの良いコードを書くことができました。
        </div>
        <div className="career-paragraph">
          特に、サイドバーに自己紹介と目次を固定表示するレイアウトは以前から試してみたいと思っていた構成で、この機会に実装できたのは良い学びとなりました。全体として、設計や実装の考え方を実践的に理解する貴重な経験になりました。
        </div>
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
        <div className="career-paragraph">
          私自身の経歴やアウトプットをただ紹介するだけでなく、それらをどう見せるかというUIを考えるプロセスを通じて、改めて自分のこれまでの歩みを振り返る良い機会となりました。
          普段の業務ではなかなか意識できない視点から自分と向き合えたことは新鮮であり、今後のキャリアやアウトプットの方向性を見つめ直すきっかけにもなったと感じています。
        </div>
      </section>

      <div className="link-right">
        <Link
          href="https://github.com/jyoloyG4465/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          GitHub リポジトリを見る
        </Link>
      </div>
    </div>
  );
}
