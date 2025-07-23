"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useToc } from "@/app/context/TocContext";
import styles from "./DateCalculation.module.scss";

const headings = [
  { id: "introduction", title: "概要" },
  { id: "reason", title: "きっかけ" },
  { id: "skills", title: "技術スタック" },
  { id: "products", title: "開発の工夫点" },
  { id: "certifications", title: "スクリーンショット" },
  { id: "learnings", title: "得られた学び・感想" },
  { id: "closing", title: "おわりに" },
];

export default function DateCalculationPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="product-title">date-calculation</div>
      <div className="top-photo">
        <img src="/date-calculation-top.png" />
      </div>

      <section id="introduction" className="page-section">
        <div className="section-title">概要</div>
        <div className="career-paragraph">
          このツールは、開始日と終了日を指定することで、日数・週数・月数の差を自動で計算できるウェブアプリケーションです。
          シンプルで直感的なUIを提供し、日常的な予定管理や比較に役立てることを目的としています。
        </div>
        <div className="career-paragraph">
          歯車ボタンを押すことでメニューが表示され、日付情報をブラウザのローカルストレージに保存・呼出することが可能です。
          次回アクセス時にも引き継がれるため特定の日付で固定しておきたい時に使用します。
        </div>
        <div className="career-paragraph">
          以下のURLにアクセスするとAWSでデプロイ済みのアプリケーションを使用可能です。
        </div>
      </section>

      <section id="reason" className="page-section">
        <div className="section-title">きっかけ</div>
        <div className="career-paragraph">
          自分が欲しいと思ったためです。似たようなアプリ自体は大量に出てくるのですが、毎回決まった日付を設定することが面倒だと感じていました。
          固定の日付を保持しておいて入力の手間を省ける機能を搭載したものを作ろうと思いました。
        </div>
        <div className="career-paragraph">
          また、生成AI活用が勤務先でも流行っていたことから、AIと協力してアプリを作ってみようと思い始めました。
        </div>
      </section>

      <section id="skills" className="page-section">
        <div className="section-title">技術スタック</div>
        <ul className={styles.list}>
          <li>フロントエンド: HTML / CSS / JavaScript</li>
          <li>インフラ: AWS（ S3 / Route53 / CloudFront / ACM ）</li>
          <li>LocalStorage API を使用したデータ保存機能</li>
        </ul>
      </section>

      <section id="products" className="page-section">
        <div className="section-title">開発の工夫点</div>
        <div className="career-paragraph">
          機能面では、「今日の日付」をワンクリックで入力できる機能を実装し、日付の手入力の手間を減らしています。
          また、ローカルストレージを活用して日付情報を永続化することで、次回アクセス時にも再利用が可能となっています。
        </div>
        <div className="career-paragraph">
          さらに、西暦1900年以降の半角数字のみを許容するバリデーションを設け、不正な入力を防ぎつつ、安心して使える仕様にしました。
          出力結果は日数・週数・月数の3形式で表示され、ユーザーが用途に応じて直感的に確認できるよう配慮しています。
        </div>
        <div className="career-paragraph">
          また、上の画像がAWS構成図になっています。S3、CloudFront、Route
          53、ACMを活用した静的ホスティングを利用して家族や知人にも利用されるようにしています。
        </div>
      </section>

      <section id="certifications" className="page-section">
        <div className="section-title">スクリーンショット</div>
        <div>・一連の正常な操作</div>
        <video src="/date-calculation-use.mp4" controls className="video">
          お使いのブラウザは video タグをサポートしていません。
        </video>
        <div>・不正な日付を入力</div>
        <video src="/date-calculation-error.mp4" controls className="video">
          お使いのブラウザは video タグをサポートしていません。
        </video>
      </section>

      <section id="learnings" className="page-section">
        <div className="section-title">得られた学び・感想</div>
        <div className="career-paragraph">
          実装の多くは生成AIを活用しながら進めたのですが、効率的に開発を進められることや、アイデアを形にするスピードが格段に上がることを実感しました。
        </div>
        <div className="career-paragraph">
          また、AIと協働しながら進める中で、プロンプトの工夫やコードの取捨選択など、自分自身の判断力や設計意識も磨かれたと感じています。
        </div>
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
        <div className="career-paragraph">
          ここで紹介しているものの中で私が最も使用しているアプリです。
          「日数計算ツール」は、自分自身のちょっとした不便から生まれたアプリケーションであり、
          同じようなニーズを持つ人にも役立つツールとして活用していただければ嬉しいです。
        </div>
      </section>

      <div className={styles.linkRight}>
        <Link
          href="https://github.com/jyoloyG4465/date-calculation"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub リポジトリを見る
        </Link>
      </div>
    </div>
  );
}
