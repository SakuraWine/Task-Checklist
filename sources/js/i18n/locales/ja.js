// --- sources/js/i18n/locales/ja.js ---
// 日本語 — active translation. Empty ("") or missing keys fall back to en.js
// (see ../i18n.js), so anything left blank shows the English default.
//
// 日本語訳。空 ("") または未定義のキーは en.js / 元データ（英語）にフォールバックします。
// 固有名詞は日本語クライアントの表記に合わせています（参考: https://wikiwiki.jp/warframe/ ）。
// 日本語クライアントでも英語表記のもの（Nightwave、Baro Ki'Teer、Warframe名、多くのNPC名など）は英語のままにしています。
import { factionIcon } from "../../functions.js";

const _baseOfOperationsTooltip = "<span title=\"オービター、漂流者のキャンプ、またはバックルーム\">拠点</span>";

const _factions = `<p>抗争シンジケートは
                 ${factionIcon("FactionSigilRebels.png")}スティール・メリディアン、
                 ${factionIcon("FactionSigilJudge.png")}アービターズ・オブ・ヘクシス、
                 ${factionIcon("FactionSigilOracle.png")}セファロン・スーダ、
                 ${factionIcon("FactionSigilBusiness.png")}ペリン・シークエンス、
                 ${factionIcon("FactionSigilAssassins.png")}レッド・ベール、
                 ${factionIcon("FactionSigilChurch.png")}ニュー・ロカ の6つです。</p>
                 <p>${_baseOfOperationsTooltip}のシンジケート端末で、抗争シンジケートに忠誠を誓いましょう。</p>`;

export default {
    meta: { code: "ja", label: "日本語", htmlLang: "ja", ready: true },

    ui: {
        "document.title": "Warframe タスクチェックリスト",
        "app.title": "Warframe タスクチェックリスト",
        "app.description": "Warframe のデイリー・ウィークリー・その他のタスクを管理しよう。",

        // aria-labels
        "aria.toggleTheme": "テーマを切り替え",
        "aria.openMenu": "メニューを開く",
        "aria.closeError": "エラーメッセージを閉じる",
        "aria.closeMenu": "メニューを閉じる",
        "aria.closeSchedule": "閉じる",
        "aria.selectLanguage": "言語を選択",

        // language switcher
        "lang.helpTranslate": "GitHub で翻訳に協力する",

        // error display banner
        "error.copy": "コピー",
        "error.copied": "コピーしました！",
        "error.failed": "失敗しました",

        // task sections
        "section.daily": "デイリータスク",
        "section.weekly": "ウィークリータスク",
        "section.other": "その他のタスク",
        "section.hide": "セクションを非表示",

        // reset / countdown timers ({timer} is the highlighted countdown span)
        "countdown.resetEllipsis": "（リセットまで …）",
        "countdown.loading": "（読み込み中…）",
        "countdown.resetsInTimer": "（リセットまで {timer}）",
        "countdown.availableForTimer": "（残り {timer}）",
        "countdown.availableInTimer": "（{timer} 後に出現）",
        "countdown.dailyFallback": "（毎日 9:00 JST にリセット）",
        "countdown.weeklyFallback": "（毎週月曜 9:00 JST にリセット）",

        // save status
        "save.saved": "保存しました！",
        "save.loading": "読み込み中…",
        "save.storageNotice": "進捗はこのブラウザ内に保存されます。",
        "save.lastSaved": "最終保存：{time}",
        "save.never": "なし",

        "reminder": "※ 全部こなす必要はありません！今の目標や進み具合に合わせて、優先順位をつけましょう。",

        // footer
        "footer.appVersion": "アプリバージョン",
        "footer.warframeVersion": "Warframe バージョン {version}",
        "footer.license": "ライセンス (GPLv3)",
        "footer.disclaimer": "これは非公式のファンメイドツールです。Warframe および関連するすべてのアセットは Digital Extremes Ltd. の知的財産です。本プロジェクトは Digital Extremes Ltd. とは無関係であり、同社による承認・後援を受けたものではありません。",
        "footer.forkNotice": "このサイトは <a href=\"https://github.com/warframe-tools/Task-Checklist\" target=\"_blank\" rel=\"noopener noreferrer\">warframe-tools/Task-Checklist</a> を日本語化したフォーク版です。",

        // options menu + reset confirmation buttons
        "menu.options": "オプション",
        "menu.hideCompleted": "完了したタスクを隠す",
        "menu.resetDaily": "デイリーのチェックをリセット",
        "menu.resetWeekly": "ウィークリーのチェックをリセット",
        "menu.resetAll": "すべてのチェックをリセット",
        "menu.unhideAll": "非表示のタスクをすべて再表示",
        "menu.confirm": "本当によろしいですか？",

        // cycle schedule dialog
        "schedule.title": "{title}のスケジュール",
        "schedule.date": "日付",
        "schedule.now": "現在",
        "schedule.cycleRepeats": "（以降、繰り返し）",

        // info line (labels are icon tooltips; buttons use &nbsp; to avoid wrapping)
        "info.location": "場所",
        "info.npc": "NPC",
        "info.terminal": "端末",
        "info.requirements": "前提条件",
        "info.info": "情報",
        "info.showSchedule": "スケジュールを表示",
        "info.moreInfo": "詳細",

        // current-cycle prefixes (rendered as HTML; &nbsp; keeps them on one line)
        "cycle.thisWeek": "今週",
        "cycle.today": "今日",
        "cycle.currentCycle": "現在のサイクル",
        "cycle.nextCycle": "次のサイクル",

        "baseOfOperations.label": "拠点",
        "baseOfOperations.tooltip": "オービター、漂流者のキャンプ、またはバックルーム",

        // desktop notifications + permission prompts
        "notif.toggleFor": "{name} の通知を切り替え",
        "notif.hideTask": "タスクを非表示：{name}",
        "notif.leavingSoonTitle": "{name} がまもなく去ります！",
        "notif.leavingSoonBody": "残り約 {minutes} 分です。",
        "notif.resetTitle": "{name} がリセットされました！",
        "notif.resetBody": "品揃えが更新されているかもしれません。",
        "notif.noSupport": "このブラウザはデスクトップ通知に対応していません。",
        "notif.denied": "通知が許可されませんでした。ブラウザの設定から有効にできます。",
        "notif.deniedPersist": "通知がブロックされています。通知を受け取りたい場合は、ブラウザの設定から許可してください。",

        // task controls (skip/hide buttons, collapsed parent badge)
        "task.skipToday": "今日はスキップ：{name}",
        "task.skipThisWeek": "今週はスキップ：{name}",
        "task.skipThisCycle": "このサイクルはスキップ：{name}",
        "task.hideUntilAvailable": "出現するまで非表示：{name}",
        "task.incompleteSubtasks": "{name} の未完了サブタスク：{count} 件",
        "task.uncheck": "チェックを外す：{name}",
        "task.unskip": "スキップを取り消す：{name}",
        "task.unhide": "再表示する：{name}",

        // task list stats + the dialog listing completed/skipped/hidden tasks ({title} is the section or parent task name)
        "stats.completed": "完了",
        "stats.skipped": "スキップ",
        "stats.hidden": "非表示",
        "sectionName.daily": "デイリー",
        "sectionName.weekly": "ウィークリー",
        "sectionName.other": "その他の",
        "hiddenList.subtasks": "{title} のサブタスク（{stat}）",
        "hiddenList.section": "{title}タスク（{stat}）",

        // save/load/startup errors
        "errors.saveFailed": "進捗を保存できませんでした。",
        "errors.saveFailedQuota": "進捗を保存できませんでした。ブラウザのストレージがいっぱいの可能性があります。",
        "errors.loadFailed": "保存された進捗を読み込めませんでした。データが破損している可能性があります。",
        "errors.themeSaveFailed": "テーマ設定を保存できませんでした。",
        "errors.critical": "起動中に重大なエラーが発生しました。コンソールを確認してください。",
    },

    tasks: {
        // --- daily ---
        daily_login: { title: "ログイン", text: "デイリーログイン報酬を受け取る。" },
        daily_craft_forma: { title: "製作（フォーマ）", text: "新しいフォーマの製作を始める（完成したものも回収する）。", location: "拠点", terminal: "ファウンドリ" },
        daily_craft_other: { title: "製作（その他）", text: "再利用できる設計図で、毎日作れる素材やアイテムを製作する（ファウンドリやコンパニオンアプリで確認）。", location: "拠点", terminal: "ファウンドリ" },
        daily_first_win_bonus: { title: "デイリー初勝利ボーナス", text: "その日最初のミッションで、基本クレジット報酬が2倍になる。", location: "拠点", terminal: "星系マップ" },
        daily_syndicate_gain: { title: "抗争シンジケート", text: "忠誠を誓ったシンジケートの地位ポイントを、1日の上限まで稼ぐ。", prereq: "マスタリーランク 3", info: "どのミッションでもアフィニティを稼ぐと地位ポイントが上がる" },
        daily_syndicate_spend: { title: "抗争シンジケート", text: "地位ポイントが上限に達していたら使う（VOIDレリックパック、ヴォスフォルパックなど）。", location: "拠点/いずれかのテンノリレー", terminal: "シンジケート", prereq: "マスタリーランク 3" },
        daily_world_syndicate_parent: { title: "中立シンジケート", text: "地位ポイントを稼ぐ。" },
        daily_world_syndicate_simaris: { title: "セファロン・シマリス", location: "いずれかのテンノリレー" },
        daily_world_syndicate_ostron: { title: "オストロン", location: "地球、シータス", prereq: "Sayaの眼" },
        daily_world_syndicate_quills: { title: "クイル", location: "地球、シータス", prereq: "内なる紛争" },
        daily_world_syndicate_solaris: { title: "ソラリス連合", location: "金星、フォーチュナー", prereq: "Vox Solaris（クエスト）" },
        daily_world_syndicate_vox: { location: "金星、フォーチュナー", prereq: "内なる紛争" },
        daily_world_syndicate_ventkids: { title: "ベントキッド", location: "金星、フォーチュナー", prereq: "Vox Solaris（クエスト）" },
        daily_world_syndicate_entrati: { title: "エントラティ", location: "ダイモス、ネクロリスク", prereq: "ダイモスの心臓" },
        daily_world_syndicate_necraloid: { title: "ネクロロイド", location: "ダイモス、ネクロリスク", prereq: "内なる紛争" },
        daily_world_syndicate_holdfasts: { title: "ホールドファスト", location: "Zariman、クリサリス", prereq: "Zarimanの天使" },
        daily_world_syndicate_cavia: { title: "カビア", location: "ダイモス、サンクタム・アナトミカ", prereq: "壁の中の囁き" },
        daily_world_syndicate_hex: { title: "ヘックス", location: "ホルバニア セントラルモール", prereq: "ヘックス（クエスト）" },
        daily_nightwave: { text: "デイリーのNightwaveアクトをこなす。" },
        daily_sortie: { title: "ソーティー", text: "デイリーのソーティー3ミッションをクリアする。", location: "拠点", terminal: "星系マップ", prereq: "内なる紛争" },
        daily_focus: { title: "フォーカス", text: "1日のフォーカス獲得上限まで稼ぐ（サンクチュアリ交戦など）。", prereq: "二番目の夢" },
        daily_steel_path: { title: "鋼の道のり襲撃", text: "デイリーの鋼の道のりミッションをクリアして、スティール・エッセンスを入手する。", prereq: "鋼の道のりの解放" },
        daily_kim_parent: { text: "Protoframeとのデイリーチャットを済ませる。", location: "拠点", terminal: "Pom-2 PC" },
        daily_kim_hex_parent: { title: "ヘックス", prereq: "ヘックス（クエスト）" },
        daily_kim_roundtable_parent: { title: "ラウンドテーブル", prereq: "ヘックス フィナーレ" },
        daily_kim_flare: { prereq: "ヘックス ランク4「アツアツ」" },
        daily_kim_minerva_velimir: { prereq: "ヘックス ランク5「ピザパーティー」" },
        daily_kim_kaya: { prereq: "ヘックス ランク5「ピザパーティー」" },
        daily_kim_devils_triad_parent: { title: "悪魔の大三角", prereq: "古の同盟" },
        daily_kim_lyon: { prereq: "Marieの好感度「好感」" },
        daily_kim_fables: { prereq: "Amirの好感度「親密」" },
        daily_vendors: { title: "商人" },
        daily_acrithis: { text: "デイリーのアルケインとキャプチュラの品揃えを確認する。", location: "デュヴィリ/ドルムゾーン", prereq: "漂流者性能値：好機 ランク9（アルケインの場合）" },
        daily_ticker_crew: { text: "雇えるレールジャッククルーを確認する。", location: "金星、フォーチュナー", prereq: "流転する形勢 ＆ レールジャック性能値：指揮 1" },
        daily_marie: { text: "テクトリストアーティファクト（MOD、アルケイン）と、ペリタの乱/ディセンディアの素材を購入する。", location: "大聖堂（ダイモス、サンクタム・アナトミカ）", prereq: "古の同盟" },

        // --- weekly ---
        weekly_nightwave_complete: { text: "必要なウィークリーのNightwaveアクトをこなす。" },
        weekly_nightwave_spend: { title: "Nightwave（消費）", text: "必要に応じてクレドを使う（オーラMOD、オロキン カタリスト/リアクターなど）。" },
        weekly_ayatan: { title: "アヤタントレジャー", text: "Marooのウィークリーミッションをクリアして、AYATAN像を入手する。", location: "火星、Marooのバザー" },
        weekly_clem: { title: "CLEMのお手伝い", text: "Clemのウィークリー耐久ミッションを手伝う。さもないと彼は死んでしまう。", location: "いずれかのテンノリレー", prereq: "寡黙な人物" },
        weekly_kahl_garrison: { title: "ナルメル破壊ミッション", text: "Kahlのウィークリーミッションをクリアして、ストックを入手する。", location: "地球、漂流者のキャンプ", prereq: "ベールブレイカー" },
        weekly_archon_hunt: { title: "アルコン討伐戦", text: "ウィークリーのアルコン討伐戦をクリアして、アルコンの欠片を確定で入手する。", location: "拠点", terminal: "星系マップ", prereq: "新たな大戦" },
        weekly_duviri_circuit: { title: "デュヴィリ サーキット（通常）", text: "今週選べるWarframeを確認し、必要ならサーキットを周回する。", location: "拠点/ドルムゾーン", terminal: "星系マップ", prereq: "デュヴィリ・パラドックス" },
        weekly_duviri_circuit_sp: { title: "デュヴィリ サーキット（鋼の道のり）", text: "今週のIncarnonアダプターを確認し、必要ならサーキットを周回する。", location: "拠点/ドルムゾーン", terminal: "星系マップ", prereq: "鋼の道のりの解放 ＆ デュヴィリ・パラドックス" },
        weekly_search_pulses: { title: "サーチパルス", text: "週5回のサーチパルスを、ネットセルとアルキメデアに使う。" },
        weekly_netracells: { title: "ネットセル", text: "週最大5回のネットセルミッションをクリアして、アルコンの欠片を狙う。", location: "ダイモス、サンクタム・アナトミカ", prereq: "壁の中の囁き", info: "ミッション成功ごとにサーチパルスを1消費" },
        weekly_eda: { title: "深淵アルキメデア（上級）", text: "ウィークリーの上級深淵アルキメデアに挑み、高確率でアルコンの欠片を狙う（最上級のエンドコンテンツ）。", location: "ダイモス、サンクタム・アナトミカ", npc: "Loid（ネクロロイド）", prereq: "カビア ランク5「啓蒙者」", info: "その週の解放にサーチパルスを2消費" },
        weekly_eta: { title: "次元アルキメデア（上級）", text: "ウィークリーの上級次元アルキメデアに挑み、高確率でアルコンの欠片を狙う（最上級のエンドコンテンツ）。", location: "ホルバニア セントラルモール", npc: "Kaya", prereq: "ヘックス ランク5「ピザパーティー」", info: "その週の解放にサーチパルスを2消費" },
        weekly_cryobells: { title: "クライオベル", text: "ユヴァン峰でクライオベルを3つ採取する。", location: "地球、ユヴァン峰", prereq: "Zarimanの天使 ＆ 壁の中の囁き", info: "クライオベルは最大6個まで貯めておける" },
        weekly_icebind: { title: "氷河の縛り", text: "クライオベルを使って、6人用の氷河の縛りミッションに挑む。", location: "地球、ユヴァン峰", prereq: "Zarimanの天使、壁の中の囁き、<span title=\"深淵アルキメデア（上級）\">EDA</span> または <span title=\"次元アルキメデア（上級）\">ETA</span> の解放", info: "ミッション成功ごとに、プレイヤー1人につきクライオベルを1消費" },
        weekly_calendar: { title: "1999年のカレンダー", text: "ウィークリーのカレンダー課題をこなす。", location: "拠点", terminal: "Pom-2 PC", prereq: "ヘックス" },
        weekly_invigorations: { text: "ウィークリーの活性化を使う。", location: "拠点", prereq: "エントラティ ランク5" },
        weekly_descendia: { title: "ディセンディア（通常）", text: "さまざまな素材が手に入る、ウィークリーの塔ゲームモード。", location: "拠点 または ダイモス、サンクタム・アナトミカ" },
        weekly_descendia_sp: { title: "ディセンディア（鋼の道のり）", text: "さまざまな素材が手に入る、ウィークリーの塔ゲームモード。", location: "拠点 または ダイモス、サンクタム・アナトミカ" },
        weekly_oops_all_eximus: { text: "サージ エクシマスを抹殺して、サージ エクシマスのスペクター設計図を入手する。", location: "ホルバニア セントラルモール", npc: "Amir（ホルバンデイム）", prereq: "KIM の Fables &amp; Frontiers ストーリーを6日分すべて完了" },
        weekly_clan_initiative: { title: "クラン ウィークリー個人報酬", text: "クランメンバーと一緒にプレイして報酬を獲得する。", location: "任意のミッション*", terminal: "ESCメニュー &#x1F782; コミュニケーション &#x1F782; クラン", prereq: "クランへの所属" },
        weekly_vendors: { title: "商人" },
        weekly_iron_wake: { text: "Rivenの破片を交換する。", location: "地球、アイアン・ウェイク", prereq: "Harrowの鎖" },
        weekly_yonta: { text: "ヴォイドプルームで、ウィークリーのクバを購入する。", location: "Zariman、クリサリス", prereq: "Zarimanの天使" },
        weekly_acrithis: { text: "品揃えを確認し、必要ならパトス・クランプを使う（必要ならオロキン カタリスト/リアクターがおすすめ）。ハッチリングの外殻でクバを購入する。", location: "デュヴィリ/ドルムゾーン", prereq: "デュヴィリ・パラドックス" },
        weekly_teshin: { title: "Teshin（鋼の道のり）", text: "Teshinの鋼の道のり勲章を確認する（特に8週ごとに並ぶUmbra フォーマの設計図）。", location: "いずれかのテンノリレー", prereq: "鋼の道のりの解放" },
        weekly_bird3: { title: "Bird3", text: "カビアの地位ポイント 30,000 で、ウィークリーのアルコンの欠片を購入する。", location: "ダイモス、サンクタム・アナトミカ", npc: "Bird3", prereq: "カビア ランク5「啓蒙者」" },
        weekly_kaya: { text: "ピクチャチップをアルケインと交換する。", location: "ホルバニア セントラルモール", npc: "Kaya", prereq: "次元アルキメデア（上級）" },
        weekly_nightcap: { text: "ファーゴライトを、クバやAYATAN像と交換する。", location: "金星、フォーチュナー", prereq: "新たな大戦" },
        weekly_zorba: { text: "アトラメンタムをクバと交換する。", location: "いずれかのテンノリレー", prereq: "Harrowの鎖" },
        weekly_hunhow: { text: "エメラルド・タレントとクリムゾン・タレントをクバと交換する。", location: "天王星、ポンティス・タワー", prereq: "翡翠の影：星座" },
        weekly_melica: { text: "エントロピック・クバをクバと交換する。", location: "地球、ユヴァン峰", prereq: "Zarimanの天使 ＆ 壁の中の囁き" },

        // --- other ---
        other_baro: { text: "Baro Ki'Teerの品揃えを確認し、欲しいアイテムをデュカットで購入する（Primeパーツはデュカットに交換できる）。", location: "シンボルのあるテンノリレー" },
        other_grandmother_tokens: { title: "家族の絆", text: "Grandmotherからファミリートークンを購入する。", location: "ダイモス、ネクロリスク", prereq: "ダイモスの心臓" },
        other_yonta_voidplumes: { title: "ヴォイドプルームの交換", location: "Zariman、クリサリス", prereq: "Zarimanの天使" },
        other_loid_voca: { title: "ヴォカの交換", location: "ダイモス、サンクタム・アナトミカ", prereq: "壁の中の囁き" },
        other_glast: { title: "Tenet武器", text: "Ergo Glastのショップで、良いダメージボーナスの武器を確認する。", location: "いずれかのテンノリレー", prereq: "アークウイング ＋ マスタリーランク 14" },
        other_eleanor: { title: "Coda武器", text: "Eleanorのショップで、良いダメージボーナスの武器を確認する。", location: "ホルバニア セントラルモール", npc: "Eleanor", prereq: "ヘックス（クエスト）" },
    },

    // keys must exactly match the English source text in cycles.json
    cycles: {
        // column names
        "Boss": "ボス",
        "Coda Weapons": "Coda武器",
        "Increased Spawns": "出現増加",
        "Item": "アイテム",
        "Items": "アイテム",
        "Location": "場所",
        "Mission": "ミッション",
        "Price": "価格",
        "Season": "季節",
        "Tileset": "タイルセット",

        // ayatan
        "Ayatan Sah Sculpture": "AYATAN像（Sah）",
        "Ayatan Ayr Sculpture": "AYATAN像（Ayr）",
        "Ayatan Orta Sculpture": "AYATAN像（Orta）",
        "Ayatan Vaya Sculpture": "AYATAN像（Vaya）",
        "Ayatan Piv Sculpture": "AYATAN像（Piv）",
        "Ayatan Valana Sculpture": "AYATAN像（Valana）",

        // tilesets / locations
        "Orokin Derelict (Deimos)": "遺跡船（ダイモス）",
        "Orokin Tower (Void)": "オロキンタワー（VOID）",
        "Spaceport (Orb Vallis, Venus)": "スペースポート（オーブ峡谷、金星）",
        "Grineer Forest (Earth)": "グリニア森林（地球）",
        "Grineer Settlement (Mars)": "グリニア居住区（火星）",
        "Corpus Gas City (Jupiter)": "コーパス ガスシティ（木星）",
        "Murex": "ミュレックス監獄",
        "Strata Relay, Earth": "Strata リレー（地球）",
        "Kronia Relay, Saturn": "Kronia リレー（土星）",
        "Larunda Relay, Mercury": "Larunda リレー（水星）",
        "Orcus Relay, Pluto (MR 8+)": "Orcus リレー（冥王星、MR 8以上）",

        // kahl's garrison
        "Sneaky Sabotage": "潜入＆妨害",
        "Junk Run": "ジャンク回収",
        "Prison Break": "脱獄",

        // archon hunt
        "Azure Archon Shard": "アルコンの欠片「蒼天」",
        "Crimson Archon Shard": "アルコンの欠片「真紅」",
        "Amber Archon Shard": "アルコンの欠片「琥珀」",
        "🦉 Archon Boreal": "🦉 BOREALアルコン",
        "🐺 Archon Amar": "🐺 AMARアルコン",
        "🐍 Archon Nira": "🐍 NIRAアルコン",

        // eximus
        "❄️ Arctic Eximus": "❄️ アークティック エクシマス",
        "🔥 Arson Eximus": "🔥 アーソン エクシマス",
        "🟢 Jade Light Eximus": "🟢 ジェイドライト エクシマス",
        "🧲 Energy Leech Eximus": "🧲 エネルギーリーチ エクシマス",

        // seasons
        "Spring": "春",
        "Summer": "夏",
        "Autumn": "秋",
        "Winter": "冬",

        // rewards
        "30,000 Endo": "30,000 ENDO",
        "50,000 Kuva": "50,000 クバ",
        "3x Built Forma": "フォーマ（完成品）×3",
        "Umbra Forma Blueprint": "Umbra フォーマの設計図",
        "Kitgun Riven Mod": "Kitgun Riven Mod",
        "Rifle Riven Mod": "ライフル Riven Mod",
        "Shotgun Riven Mod": "ショットガン Riven Mod",
        "Zaw Riven Mod": "Zaw Riven Mod",

        // duviri circuit warframes (Warframe names stay in English in the Japanese client)
        "Blueprints for Excalibur, Trinity, or Ember": "Excalibur、Trinity、Ember の設計図",
        "Blueprints for Loki, Mag, or Rhino": "Loki、Mag、Rhino の設計図",
        "Blueprints for Ash, Frost, or Nyx": "Ash、Frost、Nyx の設計図",
        "Blueprints for Saryn, Vauban, or Nova": "Saryn、Vauban、Nova の設計図",
        "Blueprints for Nekros, Valkyr, or Oberon": "Nekros、Valkyr、Oberon の設計図",
        "Blueprints for Hydroid, Mirage, or Limbo": "Hydroid、Mirage、Limbo の設計図",
        "Blueprints for Mesa, Chroma, or Atlas": "Mesa、Chroma、Atlas の設計図",
        "Blueprints for Ivara, Inaros, or Titania": "Ivara、Inaros、Titania の設計図",
        "Blueprints for Nidus, Octavia, or Harrow": "Nidus、Octavia、Harrow の設計図",
        "Blueprints for Gara, Khora, or Revenant": "Gara、Khora、Revenant の設計図",
        "Blueprints for Garuda, Baruuk, or Hildryn": "Garuda、Baruuk、Hildryn の設計図",

        // duviri circuit incarnon adapters (weapon names stay in English in the Japanese client)
        "Incarnon Adapters for Braton, Kunai, Lato, Paris, and Skana": "Braton、Kunai、Lato、Paris、Skana の Incarnonアダプター",
        "Incarnon Adapters for Bo, Furax, Furis, Latron, and Strun": "Bo、Furax、Furis、Latron、Strun の Incarnonアダプター",
        "Incarnon Adapters for Boltor, Bronco, Ceramic Dagger, Lex, and Magistar": "Boltor、Bronco、Ceramic Dagger、Lex、Magistar の Incarnonアダプター",
        "Incarnon Adapters for Angstrum, Anku, Boar, Gammacor, and Gorgon": "Angstrum、Anku、Boar、Gammacor、Gorgon の Incarnonアダプター",
        "Incarnon Adapters for Atomos, Dual Ichor, Dual Toxocyst, Miter, and Torid": "Atomos、Dual Ichor、Dual Toxocyst、Miter、Torid の Incarnonアダプター",
        "Incarnon Adapters for Ack &amp; Brunt, Burston, Nami Solo, Soma, and Vasto": "Ack &amp; Brunt、Burston、Nami Solo、Soma、Vasto の Incarnonアダプター",
        "Incarnon Adapters for Ballistica, Destreza, Obex, Stug, and Vectis": "Ballistica、Destreza、Obex、Stug、Vectis の Incarnonアダプター",
        "Incarnon Adapters for Cestra, Dera, Okina, Sicarus, and Sybaris": "Cestra、Dera、Okina、Sicarus、Sybaris の Incarnonアダプター",
        "Incarnon Adapters for Despair, Dread, Hate, Sibear, and Zylok": "Despair、Dread、Hate、Sibear、Zylok の Incarnonアダプター",

        // coda weapons (weapon names stay in English in the Japanese client)
        "Hema, Sporothrix, Catabolyst, Pox, Dual Torxica, Mire, and Motovore": "Hema、Sporothrix、Catabolyst、Pox、Dual Torxica、Mire、Motovore",
        "Bassocyst, Bubonico, Synapse, Tysis, Caustacyst, Hirudo, and Pathocyst": "Bassocyst、Bubonico、Synapse、Tysis、Caustacyst、Hirudo、Pathocyst",
    },

    moreInfo: {
        daily_first_win_bonus: `<p>デイリーリセット後に最初にクリアしたミッションでは、<em>基本クレジット報酬</em>が2倍になります。対象はミッション終了時のボーナスのみで、ミッション中に拾ったクレジットは<strong>対象外</strong>です。</p>
    <p>また、以下のミッションタイプや場所も<strong>対象外</strong>です：</p>
    <ul>
        <li><strong>インデックス</strong></li>
        <li>オープンワールド（プロフィット・テイカーを含む）</li>
        <li>Zariman</li>
        <li>ホルバニア（テックロットの金庫を含む）</li>
    </ul>
    <p>これらのミッションをクリアすると、追加クレジットはもらえずにボーナスだけが消費されます。</p>
    <p>ボーナスはクレジットブースター、クレジットの祝福、クレジット2倍イベントと<strong>重複します</strong>。リレーなどミッション以外のエリアに移動しても、ボーナスは<strong>消費されません</strong>。</p>
    <p>ボーナスを使うのにおすすめのミッション：</p>
    <table>
        <thead><tr>
            <th>名前</th>
            <th>タイプ</th>
            <th>基本クレジット</th>
            <th>敵レベル</th>
        </tr></thead>
        <tbody>
            <tr>
                <td>Tikal（地球）</td>
                <td>ダークセクター 発掘</td>
                <td>13,500</td>
                <td>6 - 16</td>
            </tr>
            <tr>
                <td>Gabii（ケレス）</td>
                <td>ダークセクター 耐久</td>
                <td>22,400</td>
                <td>15 - 25</td>
            </tr>
            <tr>
                <td>Bendar Cluster（地球プロキシマ）</td>
                <td>レールジャック 小戦</td>
                <td>48,800</td>
                <td>29 - 36</td>
            </tr>
            <tr>
                <td>Sabmir Cloud（ベールプロキシマ）</td>
                <td>レールジャック 潜入</td>
                <td>156,600</td>
                <td>56 - 60</td>
            </tr>
        </tbody>
    </table>
    <p>詳しくは wiki（英語）の <a href="https://wiki.warframe.com/w/Daily_Tribute#Daily_First_Win_Bonus">Daily First Win Bonus</a>、<a href="https://wiki.warframe.com/w/Dark_Sectors">Dark Sectors</a>、<a href="https://wiki.warframe.com/w/Mission#Locations">Mission</a> を参照してください。</p>
    <p>（現在、ミッション完了画面にボーナス分のクレジットが表示されない表示上の不具合があります。クレジット自体はきちんとアカウントに加算されています。）</p>`,

        daily_syndicate_gain: _factions,
        daily_syndicate_spend: _factions,

        weekly_clan_initiative: `<p>クランのメンバーと分隊を組んでプレイすると、クラン貯蔵庫にボーナス素材が入ります。ボーナス素材は、その週のウィークリー個人報酬の進行にもカウントされます。進行度は、クランメンバーと一緒のミッションで集めた素材の量で決まります。</p>
    <p>毎週ランダムに選ばれる惑星（ウィークリー惑星ボーナス）では、そこでプレイしたミッションのボーナス素材量と個人報酬の進行度が2倍になります。</p>
    <p>今週のボーナス惑星と報酬の進行度は、クランメニューで確認できます。</p>
    <p><strong>注意：</strong>マッチメイキングの「クランのみ」設定でクランや連盟のメンバーと分隊を組めますが、連盟メンバーとのプレイではボーナス素材や報酬の進行は<em>得られません</em>。</p>
    <p>* ディセンディアのミッションは、クラン ウィークリー個人報酬の対象外です。</p>`,
    },
};
