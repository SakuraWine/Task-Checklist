// --- sources/js/i18n/locales/ja.js ---
// 日本語 — active translation. Empty ("") or missing keys fall back to en.js
// (see ../i18n.js), so anything left blank shows the English default.
//
// 日本語訳。空 ("") または未定義のキーは en.js / 元データ（英語）にフォールバックします。
// 固有名詞はゲーム内の日本語表記に合わせる方針です。表記の誤りに気づいたら修正してください。
import { factionIcon } from "../../functions.js";

const _baseOfOperationsTooltip = "<span title=\"オービター、ドリフターのキャンプ、またはバックルーム\">拠点</span>";

const _factions = `<p>勢力シンジケートは
                 ${factionIcon("FactionSigilRebels.png")}スチール・メリディアン、
                 ${factionIcon("FactionSigilJudge.png")}アービター・オブ・ヘクシス、
                 ${factionIcon("FactionSigilOracle.png")}セファロン・スダ、
                 ${factionIcon("FactionSigilBusiness.png")}ペリン・シーケンス、
                 ${factionIcon("FactionSigilAssassins.png")}レッドヴェイル、
                 ${factionIcon("FactionSigilChurch.png")}ニューロカ の6つです。</p>
                 <p>${_baseOfOperationsTooltip}のシンジケート端末で、勢力シンジケートに忠誠を誓いましょう。</p>`;

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
        "baseOfOperations.tooltip": "オービター、ドリフターのキャンプ、またはバックルーム",

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
        daily_craft_forma: { title: "製作（フォーマ）", text: "新しいフォーマの製作を始める（完成したものも回収する）。", location: "拠点", terminal: "鋳造所" },
        daily_craft_other: { title: "製作（その他）", text: "再利用できる設計図で、毎日作れる資源やアイテムを製作する（鋳造所やコンパニオンアプリで確認）。", location: "拠点", terminal: "鋳造所" },
        daily_first_win_bonus: { title: "デイリー初勝利ボーナス", text: "その日最初のミッションで、基本クレジット報酬が2倍になる。", location: "拠点", terminal: "ナビゲーション" },
        daily_syndicate_gain: { title: "勢力シンジケート", text: "忠誠を誓ったシンジケートの名声を、1日の上限まで稼ぐ。", prereq: "マスタリーランク 3", info: "どのミッションでもアフィニティを稼ぐと勢力の名声が上がる" },
        daily_syndicate_spend: { title: "勢力シンジケート", text: "名声が上限に達していたら使う（レリックパック、ヴォスフォーパックなど）。", location: "拠点/任意のリレー", terminal: "シンジケート", prereq: "マスタリーランク 3" },
        daily_world_syndicate_parent: { title: "ワールドシンジケート", text: "名声を稼ぐ。" },
        daily_world_syndicate_simaris: { title: "セファロン・シマリス", location: "任意のリレー" },
        daily_world_syndicate_ostron: { title: "オストロン", location: "地球、シータス", prereq: "サヤの不寝番" },
        daily_world_syndicate_quills: { title: "クイル", location: "地球、シータス", prereq: "内なる戦い" },
        daily_world_syndicate_solaris: { title: "ソラリス・ユナイテッド", location: "金星、フォーチュナ", prereq: "ヴォックス・ソラリス（クエスト）" },
        daily_world_syndicate_vox: { title: "ヴォックス・ソラリス", location: "金星、フォーチュナ", prereq: "内なる戦い" },
        daily_world_syndicate_ventkids: { title: "ベントキッズ", location: "金星、フォーチュナ", prereq: "ヴォックス・ソラリス（クエスト）" },
        daily_world_syndicate_entrati: { title: "エントラティ", location: "ダイモス、ネクラリスク", prereq: "ダイモスの心臓" },
        daily_world_syndicate_necraloid: { title: "ネクラロイド", location: "ダイモス、ネクラリスク", prereq: "内なる戦い" },
        daily_world_syndicate_holdfasts: { title: "ホールドファスト", location: "ザリマン、クリサリス", prereq: "ザリマンの天使" },
        daily_world_syndicate_cavia: { title: "カヴィア", location: "ダイモス、サンクタム・アナトミカ", prereq: "壁の中の囁き" },
        daily_world_syndicate_hex: { title: "ヘックス", location: "ホルヴァニア・セントラルモール", prereq: "ヘックス（クエスト）" },
        daily_nightwave: { title: "ナイトウェイブ", text: "デイリーのナイトウェイブ課題をこなす。" },
        daily_sortie: { title: "ソーティ", text: "デイリーのソーティ3ミッションをクリアする。", location: "拠点", terminal: "ナビゲーション", prereq: "内なる戦い" },
        daily_focus: { title: "フォーカス", text: "1日のフォーカス獲得上限まで稼ぐ（サンクチュアリ・オンスロートなど）。", prereq: "第二の夢" },
        daily_steel_path: { title: "鋼の道インカージョン", text: "デイリーの鋼の道ミッションをクリアして、鋼のエッセンスを入手する。", prereq: "鋼の道の解放" },
        daily_kim_parent: { title: "KIM", text: "プロトフレームとのデイリーチャットを済ませる。", location: "拠点", terminal: "POM-2 PC" },
        daily_kim_hex_parent: { title: "ヘックス", prereq: "ヘックス（クエスト）" },
        daily_kim_roundtable_parent: { title: "ラウンドテーブル", prereq: "ヘックス（クエスト）のフィナーレ" },
        daily_kim_flare: { prereq: "ヘックス ランク4" },
        daily_kim_minerva_velimir: { prereq: "ヘックス ランク5" },
        daily_kim_kaya: { prereq: "ヘックス ランク5" },
        daily_kim_devils_triad_parent: { title: "デビルズ・トライアド", prereq: "旧き平和" },
        daily_kim_marie: { title: "マリー" },
        daily_kim_roathe: { title: "ロース" },
        daily_kim_lyon: { title: "リヨン", prereq: "マリーの好感度「Liked」" },
        daily_kim_fables: { prereq: "アミールの好感度「Close」" },
        daily_vendors: { title: "商人" },
        daily_acrithis: { title: "アクリシス", text: "デイリーのアルケインとキャプチュラの品揃えを確認する。", location: "デュヴィリ/ドーミゾーン", npc: "アクリシス", prereq: "ドリフター固有能力：オポチュニティ ランク9（アルケインの場合）" },
        daily_ticker_crew: { title: "ティッカー", text: "雇えるレールジャックの乗組員を確認する。", location: "金星、フォーチュナ", npc: "ティッカー", prereq: "ライジング・タイド ＆ コマンド固有能力 1" },
        daily_marie: { title: "マリー", text: "テクトリストMOD、アルケイン、ペリタ/ディセンディア用の資源を購入する。", location: "ラ・カテドラル（ダイモス、サンクタム・アナトミカ）", npc: "マリー", prereq: "旧き平和" },

        // --- weekly ---
        weekly_nightwave_complete: { title: "ナイトウェイブ", text: "必要なウィークリーのナイトウェイブ課題をこなす。" },
        weekly_nightwave_spend: { title: "ナイトウェイブ（消費）", text: "必要に応じてナイトウェイブクレジットを使う（オーラMOD、カタリスト/リアクターなど）。" },
        weekly_ayatan: { title: "アヤタン宝探し", text: "マルーのウィークリーミッションをクリアして、アヤタン彫像を入手する。", location: "火星、マルーのバザー", npc: "マルー" },
        weekly_clem: { title: "クレムを助けよ", text: "クレムのウィークリー耐久ミッションを手伝う。さもないと彼は死んでしまう。", location: "任意のリレー", npc: "ダルヴォ", prereq: "寡黙な男" },
        weekly_kahl_garrison: { title: "ナルメルを打ち破れ", text: "カールのウィークリーミッションをクリアして、ストックを入手する。", location: "地球、ドリフターのキャンプ", npc: "カール", prereq: "ヴェールブレイカー" },
        weekly_archon_hunt: { title: "アルコンハント", text: "ウィークリーのアルコンハントをクリアして、アルコンの欠片を確定で入手する。", location: "拠点", terminal: "ナビゲーション", prereq: "新たなる戦争" },
        weekly_duviri_circuit: { title: "デュヴィリ・サーキット（通常）", text: "今週選べるWarframeを確認し、必要ならサーキットを周回する。", location: "拠点/ドーミゾーン", terminal: "ナビゲーション", prereq: "デュヴィリ・パラドックス" },
        weekly_duviri_circuit_sp: { title: "デュヴィリ・サーキット（鋼の道）", text: "今週のインカーノンアダプターを確認し、必要ならサーキットを周回する。", location: "拠点/ドーミゾーン", terminal: "ナビゲーション", prereq: "鋼の道の解放 ＆ デュヴィリ・パラドックス" },
        weekly_search_pulses: { title: "サーチパルス", text: "週5回のサーチパルスを、ネトラセルとアルキメデアに使う。" },
        weekly_netracells: { title: "ネトラセル", text: "週最大5回のネトラセルミッションをクリアして、アルコンの欠片を狙う。", location: "ダイモス、サンクタム・アナトミカ", npc: "タグファー", prereq: "壁の中の囁き", info: "ミッション成功ごとにサーチパルスを1消費" },
        weekly_eda: { title: "エリート・ディープ・アルキメデア", text: "ウィークリーのエリート・ディープ・アルキメデアに挑み、高確率でアルコンの欠片を狙う（最上級のエンドコンテンツ）。", location: "ダイモス、サンクタム・アナトミカ", npc: "ネクラロイド", prereq: "カヴィア ランク5", info: "その週の解放にサーチパルスを2消費" },
        weekly_eta: { title: "エリート・テンポラル・アルキメデア", text: "ウィークリーのエリート・テンポラル・アルキメデアに挑み、高確率でアルコンの欠片を狙う（最上級のエンドコンテンツ）。", location: "ホルヴァニア・セントラルモール", npc: "カヤ・ベラスコ", prereq: "ヘックス ランク5", info: "その週の解放にサーチパルスを2消費" },
        weekly_cryobells: { title: "クライオベル", text: "ユーヴァン山頂でクライオベルを3つ採取する。", location: "地球、ユーヴァン山頂", prereq: "ザリマンの天使 ＆ 壁の中の囁き", info: "クライオベルは同時に6つまで所持できる" },
        weekly_icebind: { title: "アイスバインド", text: "クライオベルを使って、6人用のアイスバインドミッションに挑む。", location: "地球、ユーヴァン山頂", npc: "セファロン・メリカ", prereq: "ザリマンの天使、壁の中の囁き、<span title=\"エリート・ディープ・アルキメデア\">EDA</span> または <span title=\"エリート・テンポラル・アルキメデア\">ETA</span> の解放", info: "ミッション成功ごとに、プレイヤー1人につきクライオベルを1消費" },
        weekly_calendar: { title: "1999 カレンダー", text: "ウィークリーのカレンダー課題をこなす。", location: "拠点", terminal: "POM-2 PC", prereq: "ヘックス" },
        weekly_invigorations: { title: "ヘルミンス", text: "ウィークリーのインヴィゴレーションを使う。", location: "拠点", npc: "ヘルミンス", prereq: "エントラティ ランク5" },
        weekly_descendia: { title: "ディセンディア（通常）", text: "さまざまな資源が手に入る、ウィークリーの塔ゲームモード。", location: "拠点 または ダイモス、サンクタム・アナトミカ", terminal: "ダーク・リフラクトリー" },
        weekly_descendia_sp: { title: "ディセンディア（鋼の道）", text: "さまざまな資源が手に入る、ウィークリーの塔ゲームモード。", location: "拠点 または ダイモス、サンクタム・アナトミカ", terminal: "ダーク・リフラクトリー" },
        weekly_oops_all_eximus: { text: "サージ・エクシマスを殲滅して、サージ・エクシマス・スペクターの設計図を入手する。", location: "ホルヴァニア・セントラルモール", npc: "アミール（ホルヴァンデイム）", prereq: "KIM の Fables &amp; Frontiers ストーリーを6日分すべて完了" },
        weekly_clan_initiative: { title: "クラン・ウィークリー・イニシアチブ", text: "クランメンバーと一緒にプレイして報酬を獲得する。", location: "任意のミッション*", terminal: "メニュー &#x1F782; コミュニケーション &#x1F782; クラン", prereq: "クランへの所属" },
        weekly_vendors: { title: "商人" },
        weekly_iron_wake: { title: "パラディーノ", text: "リヴンの欠片を交換する。", location: "地球、アイアン・ウェイク", npc: "パラディーノ", prereq: "ハロウの鎖" },
        weekly_yonta: { title: "アルキメデアン・ヨンタ", text: "ヴォイドプルームで、ウィークリーのクバを購入する。", location: "ザリマン、クリサリス", npc: "ヨンタ", prereq: "ザリマンの天使" },
        weekly_acrithis: { title: "アクリシス", text: "品揃えを確認し、必要ならパトスクランプを使う（必要ならカタリスト/リアクターがおすすめ）。スカトラーの殻でクバを購入する。", location: "デュヴィリ/ドーミゾーン", npc: "アクリシス", prereq: "デュヴィリ・パラドックス" },
        weekly_teshin: { title: "テシン（鋼の道）", text: "テシンの鋼のエッセンスショップを確認する（特に8週ごとに並ぶアンブラフォーマ）。", location: "任意のリレー", npc: "テシン", prereq: "鋼の道の解放" },
        weekly_bird3: { title: "バード3", text: "カヴィアの名声 30,000 で、ウィークリーのアルコンの欠片を購入する。", location: "ダイモス、サンクタム・アナトミカ", npc: "バード3", prereq: "カヴィア ランク5" },
        weekly_kaya: { title: "カヤ", text: "ピクスチップをアルケインと交換する。", location: "ホルヴァニア・セントラルモール", npc: "カヤ・ベラスコ", prereq: "エリート・テンポラル・アルキメデア" },
        weekly_nightcap: { title: "ナイトキャップ", text: "ファーゴライトを、クバやアヤタン彫像と交換する。", location: "金星、フォーチュナ", npc: "ナイトキャップ", prereq: "新たなる戦争" },
        weekly_zorba: { title: "アスピラント・ゾルバ", text: "アトラメンタムをクバと交換する。", location: "任意のリレー", npc: "アスピラント・ゾルバ", prereq: "ハロウの鎖" },
        weekly_hunhow: { title: "ハンハウ", text: "エメラルドとクリムゾンのタレントをクバと交換する。", location: "天王星、ポンティス・タワー", npc: "ハンハウ", prereq: "ジェイドの影：星座" },
        weekly_melica: { title: "セファロン・メリカ", text: "エントロピック・クバをクバと交換する。", location: "地球、ユーヴァン山頂", npc: "セファロン・メリカ", prereq: "ザリマンの天使 ＆ 壁の中の囁き" },

        // --- other ---
        other_baro: { title: "バロ・キティア", text: "バロ・キティアの品揃えを確認し、欲しいアイテムをデュカットで購入する（プライムパーツはデュカットに交換できる）。", location: "シンボルのあるリレー", npc: "バロ・キティア" },
        other_grandmother_tokens: { title: "家族の絆", text: "グランマザーからファミリートークンを購入する。", location: "ダイモス、ネクラリスク", prereq: "ダイモスの心臓" },
        other_yonta_voidplumes: { title: "ヴォイドプルームの交換", location: "ザリマン、クリサリス", npc: "ヨンタ", prereq: "ザリマンの天使" },
        other_loid_voca: { title: "ヴォカの交換", location: "ダイモス、サンクタム・アナトミカ", npc: "ロイド", prereq: "壁の中の囁き" },
        other_glast: { title: "テネット武器", text: "エルゴ・グラストのショップで、良いヴァレンスボーナスの武器を確認する。", location: "任意のリレー", npc: "エルゴ・グラスト", prereq: "アークウィング ＋ マスタリーランク 14" },
        other_eleanor: { title: "コーダ武器", text: "エレノアのショップで、良いヴァレンスボーナスの武器を確認する。", location: "ホルヴァニア・セントラルモール", npc: "エレノア・ナイチンゲール", prereq: "ヘックス（クエスト）" },
    },

    // keys must exactly match the English source text in cycles.json
    cycles: {
        // column names
        "Boss": "ボス",
        "Coda Weapons": "コーダ武器",
        "Increased Spawns": "出現増加",
        "Item": "アイテム",
        "Items": "アイテム",
        "Location": "場所",
        "Mission": "ミッション",
        "Price": "価格",
        "Season": "季節",
        "Tileset": "タイルセット",

        // ayatan
        "Ayatan Sah Sculpture": "アヤタン・サー彫像",
        "Ayatan Ayr Sculpture": "アヤタン・エアー彫像",
        "Ayatan Orta Sculpture": "アヤタン・オルタ彫像",
        "Ayatan Vaya Sculpture": "アヤタン・ヴァヤ彫像",
        "Ayatan Piv Sculpture": "アヤタン・ピヴ彫像",
        "Ayatan Valana Sculpture": "アヤタン・ヴァラナ彫像",

        // tilesets / locations
        "Orokin Derelict (Deimos)": "オロキン遺棄船（ダイモス）",
        "Orokin Tower (Void)": "オロキンタワー（ボイド）",
        "Spaceport (Orb Vallis, Venus)": "宇宙港（オーブ峡谷、金星）",
        "Grineer Forest (Earth)": "グリニア森林（地球）",
        "Grineer Settlement (Mars)": "グリニア居住区（火星）",
        "Corpus Gas City (Jupiter)": "コーパス・ガスシティ（木星）",
        "Murex": "ミュレックス",
        "Strata Relay, Earth": "ストラタ・リレー（地球）",
        "Kronia Relay, Saturn": "クロニア・リレー（土星）",
        "Larunda Relay, Mercury": "ラルンダ・リレー（水星）",
        "Orcus Relay, Pluto (MR 8+)": "オルクス・リレー（冥王星、MR 8以上）",

        // archon hunt
        "Azure Archon Shard": "アズール・アルコンの欠片",
        "Crimson Archon Shard": "クリムゾン・アルコンの欠片",
        "Amber Archon Shard": "アンバー・アルコンの欠片",
        "🦉 Archon Boreal": "🦉 アルコン・ボレアル",
        "🐺 Archon Amar": "🐺 アルコン・アマー",
        "🐍 Archon Nira": "🐍 アルコン・ニラ",

        // eximus
        "❄️ Arctic Eximus": "❄️ アークティック・エクシマス",
        "🔥 Arson Eximus": "🔥 アーソン・エクシマス",
        "🟢 Jade Light Eximus": "🟢 ジェイドライト・エクシマス",
        "🧲 Energy Leech Eximus": "🧲 エナジーリーチ・エクシマス",

        // seasons
        "Spring": "春",
        "Summer": "夏",
        "Autumn": "秋",
        "Winter": "冬",

        // rewards
        "30,000 Endo": "30,000 エンド",
        "50,000 Kuva": "50,000 クバ",
        "3x Built Forma": "製作済みフォーマ ×3",
        "Umbra Forma Blueprint": "アンブラフォーマの設計図",
        "Kitgun Riven Mod": "キットガン リヴンMOD",
        "Rifle Riven Mod": "ライフル リヴンMOD",
        "Shotgun Riven Mod": "ショットガン リヴンMOD",
        "Zaw Riven Mod": "ザウ リヴンMOD",

        // duviri circuit warframes
        "Blueprints for Excalibur, Trinity, or Ember": "エクスカリバー、トリニティ、エンバーの設計図",
        "Blueprints for Loki, Mag, or Rhino": "ロキ、マグ、ライノの設計図",
        "Blueprints for Ash, Frost, or Nyx": "アッシュ、フロスト、ニクスの設計図",
        "Blueprints for Saryn, Vauban, or Nova": "サリン、ヴォーバン、ノヴァの設計図",
        "Blueprints for Nekros, Valkyr, or Oberon": "ネクロス、ヴァルキリー、オベロンの設計図",
        "Blueprints for Hydroid, Mirage, or Limbo": "ハイドロイド、ミラージュ、リンボの設計図",
        "Blueprints for Mesa, Chroma, or Atlas": "メサ、クロマ、アトラスの設計図",
        "Blueprints for Ivara, Inaros, or Titania": "イヴァラ、イナロス、タイタニアの設計図",
        "Blueprints for Nidus, Octavia, or Harrow": "ナイダス、オクタヴィア、ハロウの設計図",
        "Blueprints for Gara, Khora, or Revenant": "ガラ、コーラ、レヴナントの設計図",
        "Blueprints for Garuda, Baruuk, or Hildryn": "ガルーダ、バルーク、ヒルドリンの設計図",
    },

    moreInfo: {
        daily_first_win_bonus: `<p>デイリーリセット後に最初にクリアしたミッションでは、<em>基本クレジット報酬</em>が2倍になります。対象はミッション終了時のボーナスのみで、ミッション中に拾ったクレジットは<strong>対象外</strong>です。</p>
    <p>また、以下のミッションタイプや場所も<strong>対象外</strong>です：</p>
    <ul>
        <li><strong>インデックス</strong></li>
        <li>オープンワールド（プロフィット・テイカーを含む）</li>
        <li>ザリマン</li>
        <li>ホルヴァニア（テックロットの金庫を含む）</li>
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
                <td>レールジャック 小競り合い</td>
                <td>48,800</td>
                <td>29 - 36</td>
            </tr>
            <tr>
                <td>Sabmir Cloud（ヴェールプロキシマ）</td>
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

        weekly_clan_initiative: `<p>クランのメンバーと分隊を組んでプレイすると、クラン保管庫にボーナス資源が入ります。ボーナス資源は、その週の個人報酬トラックの進行にもカウントされます。進行度は、クランメンバーと一緒のミッションで集めた資源の量で決まります。</p>
    <p>毎週ランダムに選ばれる惑星では、そこでプレイしたミッションの保管庫ボーナス資源（と報酬トラックの進行）が2倍になります。</p>
    <p>今週のボーナス惑星と報酬の進行度は、クランメニューで確認できます。</p>
    <p><strong>注意：</strong>マッチメイキングの「クランのみ」設定でクランや同盟のメンバーと分隊を組めますが、同盟メンバーとのプレイでは保管庫のボーナス資源や報酬の進行は<em>得られません</em>。</p>
    <p>* ディセンディアのミッションは、クラン・ウィークリー・イニシアチブの対象外です。</p>`,
    },
};
