// ========================================
// 基礎問題精講II・B SRS - config.js
// 作成日時: 2026-04-19T15:00:00+09:00
// テンプレート: ネクステタイプ v2.0
// ========================================
// ★ index.html は編集不要。教材固有設定はここに集約。
// ========================================

var APP_CONFIG = {

  // ========================================
  // 1. アプリ識別（★最重要: 他教材と重複するとデータ破壊）
  // ========================================
  APP_NAME: "基礎問題精講II・B SRS",          // ホーム画面タイトル
  STORAGE_KEY: "kisomon2b-srs-v1",            // localStorageキー（一意必須）
  EXPORT_PREFIX: "kisomon2b-srs",             // JSONエクスポートファイル名
  SW_CACHE_NAME: "kisomon2b-srs-v1",          // sw.jsのCACHE_NAMEと一致させる

  // ========================================
  // 2. クラウド同期
  // ========================================
  GAS_URL: "https://script.google.com/macros/s/AKfycbw0xao2W7RD2j5v4fyR3M_eQtCkKLyrmRSDrHvGx-2G4tHn6w_eT6RUALOZdUySUjwrCw/exec",  // GASデプロイURL（空文字ならローカルのみ）

  // ========================================
  // 3. 配色（基礎問題精講I・Aと同一。深緑ベース）
  // ========================================
  COLORS: {
    // ページ背景・カード
    pageBg:       "#F4F7F4",      // 緑がかったライトグレー（ページ全体）
    cardBorder:   "#C8D6C8",      // カード枠線（薄い緑グレー）
    cardBg:       "#FFFFFF",      // カード背景（白）

    // テキスト
    textPrimary:  "#1A2E1A",      // 主テキスト（深緑ベースのダーク）
    textSecondary:"#4A6B4A",      // 補足テキスト（中間緑）
    textMuted:    "#7A937A",      // 薄いテキスト（グレー緑）

    // ボタン
    btnPrimaryBg:    "#2D6A2D",   // プライマリボタン背景（表紙の深緑）
    btnPrimaryFg:    "#FFFFFF",   // プライマリボタン文字（白）
    btnSecondaryBg:  "#EDF3ED",   // セカンダリボタン背景（薄緑）
    btnSecondaryFg:  "#2D6A2D",   // セカンダリボタン文字（深緑）
    btnSecondaryBorder: "#B8CCB8",// セカンダリボタン枠線

    // 入力フィールド
    inputBorder:  "#B8CCB8",      // 入力枠線
    inputBg:      "#FAFCFA",      // 入力背景

    // ステータス
    statusOk:     "#2D8A2D",      // 正常（緑）
    statusError:  "#C53030",      // エラー（赤）
    statusMuted:  "#7A937A",      // 無効（グレー緑）

    // 判定ボタン（○わかった / ◎余裕）
    judgeCorrectBg:     "#D4EDDA",
    judgeCorrectFg:     "#155724",
    judgeCorrectBorder: "#A3D9A3",
    judgeEasyBg:        "#C3E6CB",
    judgeEasyFg:        "#0B4F1A",
    judgeEasyBorder:    "#82C891",

    // バッジ
    badgeNewBg:     "#E8F5E9",
    badgeNewFg:     "#2E7D32",
    badgeGradBg:    "#C8E6C9",
    badgeGradFg:    "#1B5E20",
    badgeNeutralBg: "#E8E8E8",
    badgeNeutralFg: "#666666",
    badgePendingBg: "#FFF3E0",
    badgePendingFg: "#E65100",

    // GAS接続状態
    gasOkBg:   "#E8F5E9",
    gasOkFg:   "#2E7D32",
    gasWarnBg: "#FFF3E0",
    gasWarnFg: "#E65100",

    // コード表示・診断
    codeBg:    "#F0F4F0",
    diagBg:    "#F5F5F5",
    diagFg:    "#333333",
    diagBorder:"#CCCCCC"
  },

  // ========================================
  // 4. UI文言（数学・基礎問題精講II・Bに最適化）
  // ========================================
  LABELS: {
    unitName:          "問題",
    registerBtn:       "問題を登録する",
    registerTitle:     "問題登録",
    idLabel:           "問題番号",
    idPlaceholder:     "例: 42, 例題3, P45",
    idHint:            "基礎問題精講II・Bの問題番号や例題番号を入力（50文字以内）",
    listTitle:         "登録一覧",
    listUnit:          "問",
    csvTitle:          "まとめて取り込み",
    reviewUnit:        "問",
    cardHint:          "基礎問題精講II・Bで該当の問題を解いてください",
    searchPlaceholder: "問題番号で検索..."
  }
};
