import styles from "./AboutMe.module.scss";

export default function AbountMe() {
  return (
    <aside className={styles.sidebar}>
      <img src="/logo-grad.png" className={styles.image} />
      <div className={styles.name}>jyoloyG</div>
      <div className={styles.bio}>
        <div className={styles.section}>
          <div className={styles.heading}>
            ・事業会社・SIerでITエンジニアを経験
          </div>
          <div>
            事業会社では、VBAを用いたツール開発や業務パッケージシステム導入のPLなどを経験
          </div>
          <div>
            現在は主にTypeScript（Angular）、Python（Django）、SQLを用いたWebアプリケーション開発やコードレビューを担当
          </div>
          <div>
            サブリーダーとして5名体制のチームでタスク管理・技術フォローも担当
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.heading}>・資格で継続的な学習を実践</div>
          <div>
            基本情報・応用情報をはじめとする高度情報処理資格やAWS認定7冠など、
            スキルの裏付けとなる資格も多数取得
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.heading}>・個人開発に挑戦</div>
          個人開発ではインフラ構築にも取り組んでおり、フルスタックな技術領域に対応
        </div>
      </div>
    </aside>
  );
}
