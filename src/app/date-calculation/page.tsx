"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useToc } from "@/app/context/TocContext";
import { asset } from "@/lib/asset";

const headings = [
  { id: "overview", title: "概要" },
  { id: "motivation", title: "作ったきっかけ" },
  { id: "tech-stack", title: "技術スタック" },
  { id: "improvements", title: "開発の工夫点" },
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
      <div className="product-title">日数計算</div>
      <div className="top-photo">
        <img src={asset("/date-calculation-top.png")} />
      </div>

      <section id="overview" className="page-section">
        <div className="section-title">概要</div>
        <div className="career-paragraph">
          日付に関する計算機能を提供するウェブアプリケーションです。日数差計算、N日後計算、問い合わせフォームの3つの機能を備えています。
          シンプルで直感的なUIを提供し、日常的な予定管理や比較に役立てることを目的としています。
        </div>
        <div className="career-paragraph">
          入力した日付情報はブラウザのローカルストレージに保存され、次回アクセス時にも再利用できます。
          歯車ボタンからメニューを開いて保存・呼出ができるため、特定の日付で固定しておきたい時に便利です。
        </div>
        <div className="career-paragraph">
          以下のURLにアクセスするとVercelでデプロイ済みのアプリケーションを使用可能です。
        </div>
        <div className="career-paragraph">
          <Link
            href="https://www.jyoloyg-nissu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="page-link"
          >
            https://www.jyoloyg-nissu.com/
          </Link>
        </div>
      </section>

      <section id="motivation" className="page-section">
        <div className="section-title">作ったきっかけ</div>
        <div className="career-paragraph">
          自分が欲しいと思ったためです。似たようなアプリ自体は大量に出てくるのですが、毎回決まった日付を設定することが面倒だと感じていました。
          固定の日付を保持しておいて入力の手間を省ける機能を搭載したものを作ろうと思いました。
        </div>
        <div className="career-paragraph">
          また、生成AI活用が勤務先でも流行っていたことから、AIと協力してアプリを作ってみようと思い始めました。
        </div>
      </section>


      <section id="tech-stack" className="page-section">
        <div className="section-title">技術スタック</div>
        <ul className="section-list">
          <li>
            フレームワーク: Next.js 16 (App Router) / React 19 / TypeScript
          </li>
          <li>UIライブラリ: MUI (Material-UI) + Emotion</li>
          <li>テスト: Jest + Testing Library</li>
          <li>メール送信: Resend</li>
          <li>状態管理: React Context + useState</li>
          <li>デプロイ: Vercel</li>
          <li>インフラ: AWS CDK（オプション）</li>
        </ul>
      </section>

      <section id="improvements" className="page-section">
        <div className="section-title">開発の工夫点</div>
        <div className="career-paragraph">
          アーキテクチャはVercelにNext.jsアプリをデプロイするシンプルな構成です。
          ユーザーはブラウザからVercel上のWebアプリにアクセスし、日数差計算・N日後計算・問い合わせフォームの3機能を利用できます。
          問い合わせフォームはServer
          Actionsを通じてResendのAPIを呼び出し、メール送信を行います。
          日付データはブラウザのLocalStorageに保存されるため、サーバーへのデータ保存は不要な軽量な構成となっています。
        </div>
        <div className="architecture">
          <img src={asset("/date-calculation-draw.png")} />
        </div>
        <div className="career-paragraph">
          <strong>コンポーネント設計</strong>
        </div>
        <ul className="section-list">
          <li>単一責任の原則: 各コンポーネントは1つの役割に集中</li>
          <li>再利用性: DateFieldは各ページで共通利用</li>
          <li>MUIの活用: 一貫性のあるUIとアクセシビリティを実現</li>
        </ul>
        <div className="career-paragraph">
          <strong>日付計算ロジック</strong>
        </div>
        <ul className="section-list">
          <li>純粋関数: 計算ロジックをutilsに分離し、テスト容易性を確保</li>
          <li>月末考慮: 1/31→2/28のような月末計算を正確に処理</li>
          <li>
            ヘルパー関数: getLastDayOfMonth, isEndOfMonth, addMonthsで可読性向上
          </li>
        </ul>
        <div className="career-paragraph">
          <strong>UX改善</strong>
        </div>
        <ul className="section-list">
          <li>コンテキストメニュー: 歯車ボタンで保存/呼出メニューを表示</li>
          <li>オーバーレイ方式: メニュー外クリックで自然に閉じる</li>
          <li>トースト通知: 保存/呼出の結果をフィードバック</li>
        </ul>
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
          「日数計算」は、自分自身のちょっとした不便から生まれたアプリケーションであり、
          同じようなニーズを持つ人にも役立つツールとして活用していただければ嬉しいです。
        </div>
      </section>

      <div className="link-right">
        <Link
          href="https://github.com/jyoloyG4465/date-calculation"
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
