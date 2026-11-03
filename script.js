// 1. レシピデータベース
const recipeDatabase = {
  level3: [
    {
      main: "豚もやしと豆腐のキムチレンジ蒸し",
      side: "乾燥ワカメとゴマの即席中華スープ",
      tags: ["🥩高タンパク", "🥦包丁なし5分", "🌙夜遅くても低脂質"],
      memo: "豚肉と豆腐でダブルのタンパク質。電子レンジ調理だから油を使わず胃に優しい。",
      swap: "【豚肉がない時】ツナ缶1缶 または 厚揚げ/カニカマで代用OK！<br>【もやしがない時】カット野菜・白菜・キャベツをちぎって入れても美味しいです。",
      recipes: {
        main: { seasoning: "ごま油 小さじ1、ポン酢 適量", steps: ["耐熱皿に豆腐、もやし、豚肉、キムチを重ねる。", "ふんわりラップでレンジ（600W）で 4分 加熱。", "ごま油とポン酢を回しかけて完成！"] },
        side: { seasoning: "鶏ガラスープの素 小さじ1、乾燥ワカメ 適量、いりごま 少々", steps: ["マグカップに材料を入れる。", "沸騰したお湯150mlを注ぎ、よく混ぜて完成！"] }
      }
    },
    {
      main: "タラとキャベツのコンソメバターレンジ煮",
      side: "冷やしトマト（またはパック納豆）",
      tags: ["🐟消化吸収◎", "🥦包丁なし5分", "✨ビタミンB群"],
      memo: "白身魚（タラ）は高タンパク低脂質。キャベツを手でちぎってレンジに入れるだけ。",
      swap: "【タラがない時】鮭、冷凍シーフードミックス、または豚こま肉で代用OK！",
      recipes: {
        main: { seasoning: "コンソメ顆粒 小さじ1、バター 5g、塩コショウ 少々", steps: ["耐熱皿にキャベツとタラを乗せ調味料を振る。", "ラップでレンジ（600W）で 4分半 加熱。", "バターを溶かして完成！"] },
        side: { seasoning: "ぽん酢 または 塩＋ごま油（適量）", steps: ["トマトを手で崩すかパック納豆を添える。", "ぽん酢等をかけて完成！"] }
      }
    },
    {
      main: "ツナとカット野菜のスープうどん（レンジ調理）",
      side: "冷やっこ（ポン酢がけ）",
      tags: ["⚡エネルギー補給", "🥦包丁なし5分", "🍜1鉢満足"],
      memo: "冷凍うどん・ツナ缶・カット野菜・めんつゆを耐熱容器に入れてレンチンするだけ。",
      swap: "【ツナがない時】豚こま肉・サラダチキンで代用OK！",
      recipes: {
        main: { seasoning: "めんつゆ（3倍濃縮） 大さじ2、水 200ml", steps: ["耐熱ボウルに冷凍うどん、カット野菜、ツナ、水、めんつゆを入れる。", "ラップでレンジ（600W）で 5分 加熱。", "よく混ぜて完成！"] },
        side: { seasoning: "ポン酢 適量、かつお節 少々", steps: ["器にパック豆腐をすくい入れる。", "ポン酢とかつお節をかけて完成！"] }
      }
    },
    {
      main: "鶏モモ肉と玉ねぎのレンジ蒸しポン酢",
      side: "お湯注ぐだけの即席和風スープ",
      tags: ["🥩高タンパク", "🥦包丁なし7分", "さっぱり塩分補給"],
      memo: "鶏肉と玉ねぎスライスをレンジ加熱し、ポン酢と少々のごま油をかけるだけのスピード皿。",
      swap: "【鶏肉がない時】豚肉・豆腐・ちくわ等で代用OK！",
      recipes: {
        main: { seasoning: "ポン酢 大さじ1.5、ごま油 小さじ1", steps: ["耐熱皿にスライス玉ねぎ、一口大の鶏肉を並べる。", "ラップでレンジ（600W）で 5分 加熱。", "ポン酢とごま油をかけて完成！"] },
        side: { seasoning: "和風だし 小さじ1/2、醤油 小さじ1/2、乾燥ワカメ 少々", steps: ["椀に具材とだし、醤油を入れる。", "お湯150mlを注いで完成！"] }
      }
    },
    {
      main: "サバ缶とキャベツのカレーレンジ蒸し",
      side: "もやしとワカメの即席コンソメスープ",
      tags: ["🧠DHA・EPA", "🥦包丁なし5分", "🍛食欲増進"],
      memo: "サバ缶とキャベツにカレー粉少々を振ってレンチン。疲れていても食が進む！",
      swap: "【サバ缶がない時】ツナ缶・豚こま肉で代用OK！",
      recipes: {
        main: { seasoning: "カレー粉 小さじ1/2、めんつゆ 小さじ1", steps: ["耐熱皿にキャベツを敷き、サバ缶をほぐして乗せる。", "調味料を振り、ラップでレンジ（600W）で 3分半 加熱。", "サッと混ぜて完成！"] },
        side: { seasoning: "コンソメ顆粒 小さじ1、塩コショウ 少々", steps: ["マグカップにもやし少々とワカメ、コンソメを入れる。", "お湯150mlを注ぎレンジで30秒加熱して完成！"] }
      }
    },
    {
      main: "ふわとろ卵と豆腐の和風あんかけ風（レンジ調理）",
      side: "トマトとキムチの和え物",
      tags: ["🥚消化に最高", "🥦包丁なし4分", "🌙深夜食に最適"],
      memo: "豆腐と溶き卵、めんつゆ＋片栗粉を混ぜてレンチン。バイト終わりの遅い夕食に胃への負担ゼロ。",
      swap: "【豆腐がない時】厚揚げや、ごはんに入れて「卵雑炊」にアレンジ可！",
      recipes: {
        main: { seasoning: "めんつゆ 大さじ1、水 大さじ2、片栗粉 小さじ1、溶き卵 1個分", steps: ["耐熱容器に崩した豆腐、めんつゆ・水・片栗粉を混ぜる。", "溶き卵を回しかけ、ラップでレンジ（600W）で 2分半 加熱。", "混ぜてとろみが出たら完成！"] },
        side: { seasoning: "ごま油 少々", steps: ["一口大にしたトマトとキムチを和える。", "ごま油を垂らして完成！"] }
      }
    }
  ],

  level2: [
    {
      main: "豚こまとキャベツの甘辛スタミナ炒め",
      side: "豆腐とほうれん草の即席味噌汁",
      tags: ["🥩ビタミンB1", "🥦キャベツたっぷり", "🍳フライパン1つ"],
      memo: "豚肉に含まれるビタミンB1が大学生活の疲労回復をサポート。",
      swap: "【豚肉がない時】鶏モモ肉 や 豆腐/厚揚げで満足感UP！",
      recipes: {
        main: { seasoning: "醤油 大さじ1、酒 大さじ1、みりん 大さじ1、チューブ生姜 2cm", steps: ["フライパンで豚肉とキャベツを炒める。", "肉に火が通ったら調味料を一気に加える。", "汁気が減るまでサッと炒めて完成！"] },
        side: { seasoning: "味噌 小さじ2、和風だし 小さじ1/2", steps: ["椀に豆腐、ほうれん草、だし、味噌を入れる。", "お湯160mlを注いで味噌を溶かす。"] }
      }
    },
    {
      main: "鶏モモ肉と玉ねぎのワンパン親子煮",
      side: "もやしとポン酢のさっぱり和え",
      tags: ["🥩良質なタンパク質", "🥚卵で栄養網羅", "🍳フライパン1つ"],
      memo: "鶏肉と卵の組み合わせで、筋肉と免疫力を維持する良質タンパク質を補給。",
      swap: "【鶏肉がない時】豚こま肉、缶詰の焼き鳥で代用OK！",
      recipes: {
        main: { seasoning: "めんつゆ（3倍濃縮） 大さじ2、水 100ml、溶き卵 1個分", steps: ["小フライパンに水、めんつゆ、鶏肉、玉ねぎを入れて煮立たせる（5分）。", "溶き卵を回し入れる。", "蓋をして半熟状になったら完成！"] },
        side: { seasoning: "ポン酢 大さじ1、ごま油 小さじ1/2", steps: ["もやしをレンジ（600W）で1分半加熱して水気を切る。", "ポン酢とごま油で和えて完成！"] }
      }
    },
    {
      main: "ツナとキャベツの和風ワンパンパスタ",
      side: "コンソメ玉ねぎスープ",
      tags: ["🍝フライパン1つ", "🥦ビタミンC", "⚡10分爆速"],
      memo: "パスタを別茹でせずフライパン1つで調理。ツナとキャベツで抗酸化ビタミンをチャージ。",
      swap: "【ツナがない時】ウインナー・豚こま肉で代用OK！",
      recipes: {
        main: { seasoning: "醤油 小さじ2、めんつゆ 大さじ1、オリーブオイル 大さじ1", steps: ["フライパンに水300mlを沸かしパスタとキャベツを入れる。", "水分が減ったらツナと調味料を加える。", "炒め合わせて完成！"] },
        side: { seasoning: "コンソメ顆粒 小さじ1、塩コショウ 少々", steps: ["マグカップに薄切り玉ねぎ、コンソメ、水150mlを入れる。", "レンジで 2分 加熱し塩コショウで整えて完成！"] }
      }
    },
    {
      main: "豚こまと玉ねぎのポークチャップ（ケチャップ炒め）",
      side: "千切りキャベツとツナのサラダ",
      tags: ["🥩ビタミンB群", "🍳フライパン1つ", "🍅洋風ご飯"],
      memo: "ケチャップ・ウスターソース・醤油で炒めるだけ。洋風の味付けでご飯が進む！",
      swap: "【豚肉がない時】鶏肉・ウインナー・厚揚げで代用OK！",
      recipes: {
        main: { seasoning: "ケチャップ 大さじ2、ウスターソース 大さじ1、醤油 小さじ1", steps: ["フライパンで豚肉と玉ねぎを炒める。", "火が通ったら調味料を入れて炒め合わせる。"] },
        side: { seasoning: "マヨネーズ 大さじ1、ポン酢 小さじ1", steps: ["キャベツの千切りとツナを合わせる。", "マヨネーズとポン酢で和えて完成！"] }
      }
    },
    {
      main: "鮭とキャベツの味噌バターワンパン蒸し焼き",
      side: "豆腐ともやしの中華スープ",
      tags: ["🐟オメガ3", "🥦野菜たっぷり", "🍳フライパン1つ"],
      memo: "鮭とキャベツをフライパンに並べて蓋をして蒸すだけ。味噌バターのコクで満足感バツグン。",
      swap: "【鮭がない時】タラ・豚肉・鶏モモ肉で代用OK！",
      recipes: {
        main: { seasoning: "味噌 大さじ1、みりん 大さじ1、バター 10g", steps: ["フライパンにキャベツ、鮭を重ね味噌・みりんを塗る。", "蓋をして中火で6〜7分蒸し焼きにし、バターを乗せて完成！"] },
        side: { seasoning: "鶏ガラスープの素 小さじ1、ごま油 少々", steps: ["マグカップに豆腐、もやし、鶏ガラスープ、お湯150mlを入れる。", "レンジで1分加熱しごま油を垂らして完成！"] }
      }
    },
    {
      main: "鶏モモ肉と人参・しめじのガーリックオイスター炒め",
      side: "パック納豆 ＆ 和風即席スープ",
      tags: ["🥩高タンパク", "🧄疲労回復", "🍳15分調理"],
      memo: "にんにくとオイスターソースの旨味でスタミナ全開。しっかり食べて明日も頑張れる。",
      swap: "【鶏肉がない時】豚こま肉・厚揚げで代用OK！",
      recipes: {
        main: { seasoning: "オイスターソース 大さじ1、醤油 小さじ1、おろし生姜/にんにく 各少量", steps: ["鶏肉、人参、しめじをフライパンで炒める。", "調味料を入れて香りが立つまで炒めて完成！"] },
        side: { seasoning: "即席スープの素 または めんつゆ＋お湯", steps: ["パック納豆を添える。", "椀にスープの素とお湯を入れて完成！"] }
      }
    },
    {
      main: "冷凍ナポリタン風ワンパン炒め（うどん/パスタ）",
      side: "コンソメたまごスープ",
      tags: ["🍝喫茶店風", "🍳フライパン1つ", "⚡満足ボリューム"],
      memo: "ウインナーやツナ、玉ねぎと麺をケチャップで香ばしく炒めるナポリタン風。",
      swap: "【ウインナーがない時】豚肉・ツナ缶で代用OK！",
      recipes: {
        main: { seasoning: "ケチャップ 大さじ3、コンソメ 小さじ1/2、バター 5g", steps: ["玉ねぎ、ウインナー（またはツナ）をバターで炒める。", "解凍うどん（またはパスタ）とケチャップを加え炒め合わせて完成！"] },
        side: { seasoning: "コンソメ顆粒 小さじ1、溶き卵 1個分", steps: ["お湯180mlを沸かしコンソメと溶き卵を入れる。", "軽く混ぜて完成！"] }
      }
    }
  ],

  level1: [
    {
      main: "鶏肉と根菜のじっくりトマト煮込み",
      side: "キャベツとツナのシャキシャキサラダ",
      soup: "根菜たっぷりコンソメスープ",
      tags: ["🥩鉄分・亜鉛", "🥦食物繊維たっぷり", "🍲つくりおきOK"],
      memo: "根菜の食物繊維で腸内環境を整える。多めに作れば翌日のパスタソースにリメイク可能。",
      swap: "【鶏肉がない時】豚肉・ウインナーで代用OK！",
      recipes: {
        main: { seasoning: "トマト缶 1缶、コンソメ 1個、ケチャップ 大さじ1", steps: ["鍋で鶏肉、玉ねぎ、人参、しめじを軽く炒める。", "トマト缶、コンソメ、水100mlを加え煮込む（15分）。", "ケチャップで味を整えて完成！"] },
        side: { seasoning: "マヨネーズ 大さじ1、ポン酢 小さじ1", steps: ["千切りキャベツとツナをあえる。", "マヨネーズとポン酢で和えて完成！"] },
        soup: { seasoning: "コンソメ顆粒 小さじ1、塩コショウ 少々", steps: ["余った野菜に水200mlとコンソメを加える。", "ひと煮立ちさせて完成！"] }
      }
    },
    {
      main: "鮭の塩焼き ＆ 具だくさん豚汁（主役）",
      side: "たたきキュウリの塩昆布和え",
      soup: "具だくさん豚汁",
      tags: ["🐟オメガ3脂肪酸", "🥦野菜一掃", "🍱ほっこり和食"],
      memo: "鮭に含まれるアスタキサンチンとオメガ3で脳疲労をオフ。余り野菜を豚汁で一撃一掃。",
      swap: "【鮭がない時】鯖の塩焼き・チキンカツ・納豆で代用OK！",
      recipes: {
        main: { seasoning: "塩 少々", steps: ["鮭に塩を軽く振る。", "フライパンやトースターできつね色に焼く。"] },
        side: { seasoning: "塩昆布 ひとつまみ、ごま油 小さじ1", steps: ["叩いたキュウリをポリ袋に入れる。", "塩昆布とごま油を揉み込んで完成！"] },
        soup: { seasoning: "和風だし 小さじ1、味噌 大さじ1.5", steps: ["鍋で豚肉、人参、玉ねぎ、豆腐を炒め水400mlとだしを加える。", "柔らかくなったら火を止め味噌を溶く。"] }
      }
    },
    {
      main: "手作り和風ハンバーグ（または鶏つくね）",
      side: "人参としめじのグラッセ風",
      soup: "キャベツと玉ねぎのポトフ風スープ",
      tags: ["🥩極上タンパク質", "✨満足度No.1", "🍱冷凍作り置きも可"],
      memo: "休日にまとめて作って冷凍可能。和風おろしタレでさっぱり美味しく！",
      swap: "【ひき肉がない時】豚こま肉の生姜焼きに変更OK！",
      recipes: {
        main: { seasoning: "ポン酢 大さじ2、大根おろし少々", steps: ["ひき肉、みじん切り玉ねぎ、卵、パン粉をよく練り成形する。", "フライパンで両面焼き、蒸し焼きにする。", "ポン酢をかけて完成！"] },
        side: { seasoning: "バター 5g、砂糖 小さじ1、塩 少々", steps: ["人参としめじ、水大さじ2と調味料を小鍋に入れる。", "水分が飛ぶまで弱火で煮詰める。"] },
        soup: { seasoning: "コンソメ 1個、塩コショウ 少々", steps: ["鍋にキャベツ、玉ねぎ、水300mlとコンソメを入れる。", "コトコト煮込んで完成！"] }
      }
    },
    {
      main: "ごろごろ具材の家カレー（つくりおき定番）",
      side: "豆腐とキャベツのごまドレサラダ",
      soup: "たまごスープ",
      tags: ["🍛みんな大好き", "🍲3日目まで美味しい", "⚡コスパ最強"],
      memo: "大鍋で作っておけば、平日忙しい日の夕食が温めるだけで完成！",
      swap: "【カレールーがない時】シチューやハヤシライスに変更可。",
      recipes: {
        main: { seasoning: "カレールー 1/2箱、水 表示通り", steps: ["豚肉、玉ねぎ、人参を鍋で炒める。", "水を加えて煮込み、火を止めてルーを溶かす。"] },
        side: { seasoning: "市販のごまドレッシング", steps: ["キャベツの上に崩した豆腐を乗せドレッシングをかける。"] },
        soup: { seasoning: "中華だし 小さじ1、溶き卵 1個", steps: ["お湯200mlに中華だしを溶かし、溶き卵を流し入れる。"] }
      }
    },
    {
      main: "鶏モモ肉の照り焼き（こってり甘辛）",
      side: "もやしとツナの和風和え",
      soup: "豆腐とわかめのお味噌汁",
      tags: ["🥩ジューシー", "🍱お弁当にも◎", "🍳ご飯がススム"],
      memo: "香ばしく焼いた鶏肉に甘辛タレが絡んで満足度バツグン！",
      swap: "【鶏肉がない時】豚こま肉の照り焼き風で代用OK！",
      recipes: {
        main: { seasoning: "醤油 大さじ1, 酒 大さじ1, みりん 大さじ1, 砂糖 小さじ1", steps: ["鶏肉の皮目を下にして皮がパリッとするまで焼く。", "裏返して火を通し、合わせ調味料を加えて煮詰める。"] },
        side: { seasoning: "めんつゆ 小さじ1、ごま油 少々", steps: ["レンチンしたもやしとツナを和える。"] },
        soup: { seasoning: "和風だし 小さじ1/2、味噌 小さじ2", steps: ["お湯に豆腐、ワカメ、だしを入れ味噌を溶く。"] }
      }
    },
    {
      main: "タラと野菜の具だくさん和風鍋（一人鍋）",
      side: "冷やしトマト",
      soup: "〆の雑炊（鍋のスープ利用）",
      tags: ["🍲体が温まる", "🥦野菜たっぷり", "✨ヘルシー"],
      memo: "一鍋で野菜とお魚の栄養が全部摂れる！最後の雑炊まで最高。",
      swap: "【タラがない時】豚肉・鶏肉で代用OK！",
      recipes: {
        main: { seasoning: "和風だし 小さじ1、醤油 大さじ1、酒 大さじ1", steps: ["鍋に水300ml、調味料、白菜、玉ねぎ、豆腐、タラを入れる。", "煮立ったら弱火で10分煮込んで完成！"] },
        side: { seasoning: "塩 または ぽん酢 少々", steps: ["切ったトマトに塩またはポン酢を振る。"] },
        soup: { seasoning: "残った鍋つゆ、ご飯 1膳、卵 1個", steps: ["残った鍋のつゆにご飯を入れ、溶き卵を回しかけて一煮立ち。"] }
      }
    },
    {
      main: "豚肉と人参・キャベツの回鍋肉風",
      side: "たたききゅうりの中華和え",
      soup: "中華コーン風スープ",
      tags: ["🥩コクうま中華", "🍳本格派", "⚡白米に合う"],
      memo: "味噌・醤油・砂糖・ごま油で本格的なコクウマ中華炒め！",
      swap: "【豚肉がない時】厚揚げ・鶏肉で代用OK！",
      recipes: {
        main: { seasoning: "味噌 大さじ1、醤油 小さじ1、砂糖 小さじ1", steps: ["豚肉、キャベツ、人参をフライパンで炒める。", "合わせ調味料を入れて強火で一気に絡める。"] },
        side: { seasoning: "ごま油 小さじ1、醤油 小さじ1/2", steps: ["叩いたキュウリに調味料を揉み込む。"] },
        soup: { seasoning: "鶏ガラスープの素 小さじ1、溶き卵 1個", steps: ["沸騰したお湯200mlにスープの素を溶かし溶き卵を流し入れる。"] }
      }
    },
    {
      main: "やわらか豚の角煮風（煮込み）",
      side: "ツナとキャベツの和風和え",
      soup: "玉ねぎと人参のコンソメスープ",
      tags: ["🥩ごちそうディナー", "✨トロトロ食感", "🍱大満足"],
      memo: "時間がある日に豚肉をじっくり甘辛く煮込む最高のごちそう。",
      swap: "【豚ばらがない時】豚こま肉をギュッと丸めて作ると節約角煮に！",
      recipes: {
        main: { seasoning: "醤油 大さじ2、酒 大さじ2、みりん 大さじ2、砂糖 大さじ1", steps: ["豚肉と調味料、水150mlを鍋に入れ、弱火で20分煮込む。", "照りが出たら火を止めて味を染み込ませる。"] },
        side: { seasoning: "ポン酢 大さじ1", steps: ["キャベツとツナをポン酢でさっと和える。"] },
        soup: { seasoning: "コンソメ 1個、塩コショウ 少々", steps: ["玉ねぎ、人参、水を煮立てコンソメを入れる。"] }
      }
    }
  ]
};

// 2. 今週の献立用データ構造（dateStr プロパティを追加）
const daysData = [
  { id: "mon", day: "月曜日", dateStr: "", title: "予定なし", schedule: "class-only", recipeIndex: 0, showSwap: false, showHowTo: false },
  { id: "tue", day: "火曜日", dateStr: "", title: "予定なし", schedule: "class-only", recipeIndex: 0, showSwap: false, showHowTo: false },
  { id: "wed", day: "水曜日", dateStr: "", title: "予定なし", schedule: "class-only", recipeIndex: 0, showSwap: false, showHowTo: false },
  { id: "thu", day: "木曜日", dateStr: "", title: "予定なし", schedule: "class-only", recipeIndex: 0, showSwap: false, showHowTo: false },
  { id: "fri", day: "金曜日", dateStr: "", title: "予定なし", schedule: "class-only", recipeIndex: 0, showSwap: false, showHowTo: false },
  { id: "sat", day: "土曜日", dateStr: "", title: "予定なし", schedule: "off", recipeIndex: 0, showSwap: false, showHowTo: false },
  { id: "sun", day: "日曜日", dateStr: "", title: "予定なし", schedule: "off", recipeIndex: 0, showSwap: false, showHowTo: false }
];

let currentDate = new Date(); // 表示中の年月を管理

const monthEvents = {
  "2026-10-05": { title: "バイト 17-21時", schedule: "byte-late", color: "red" },
  "2026-10-12": { title: "テスト勉強", schedule: "class-only", color: "blue" },
  "2026-10-18": { title: "サークル集会", schedule: "class-only", color: "purple" },
  "2026-10-25": { title: "全休・買い物", schedule: "off", color: "green" }
};

let activeEditingKey = null;

// 買い物リストデータ
const shoppingList = [
  { name: "豚こま肉 / 豚ばら肉（500g） - 炒め物・豚汁・角煮・キムチ蒸し用", checked: false },
  { name: "鶏モモ肉（3枚） - トマト煮込み・親子煮・照り焼き・レンジ蒸し用", checked: false },
  { name: "タラ切り身 / 鮭塩焼き（計3〜4切れ） - 煮物・鍋・蒸し焼き用", checked: false },
  { name: "ツナ缶 / サバ缶（4缶パック） - スープ・パスタ・和え物用", checked: false },
  { name: "豆腐（3個パック） - スープ・蒸し料理・あんかけ・鍋用", checked: false },
  { name: "卵（1パック） - 親子煮・あんかけ・スープ・雑炊用", checked: false },
  { name: "キャベツ（1個） - 万能野菜（炒め・サラダ・煮込み・蒸し）", checked: false },
  { name: "カット野菜 / もやし（3袋） - レンチン爆速・和え物用", checked: false },
  { name: "玉ねぎ（4個）・人参（3本）・しめじ（2パック） - 煮込み・スープ用", checked: false },
  { name: "キュウリ（2本）・トマト（2個）・キムチ（1パック）", checked: false },
  { name: "主食（冷凍うどん / 米 / パスタ / カレールー / トマト缶）", checked: false }
];

// 📅 今週の日付（月〜日）を計算して献立表に反映する関数
function syncCalendarToWeeklyMenu() {
  const now = new Date();
  
  const currentDayOfWeek = now.getDay();
  const distanceToMonday = (currentDayOfWeek + 6) % 7; 
  const mondayDate = new Date(now);
  mondayDate.setDate(now.getDate() - distanceToMonday);

  daysData.forEach((dayObj, index) => {
    const targetDate = new Date(mondayDate);
    targetDate.setDate(mondayDate.getDate() + index);

    const y = targetDate.getFullYear();
    const m = String(targetDate.getMonth() + 1).padStart(2, '0');
    const d = String(targetDate.getDate()).padStart(2, '0');
    const key = `${y}-${m}-${d}`;

    // 💡 献立表カード用の日付文字列（例: "10/26"）
    dayObj.dateStr = `${targetDate.getMonth() + 1}/${targetDate.getDate()}`;

    const event = monthEvents[key];
    if (event) {
      dayObj.title = event.title;
      dayObj.schedule = event.schedule;
    } else {
      dayObj.title = "予定なし";
      dayObj.schedule = (index === 5 || index === 6) ? "off" : "class-only";
    }
  });
}

// 4. アプリ全体の描画関数
function renderApp() {
  syncCalendarToWeeklyMenu();

  const container = document.getElementById("schedule-container");
  if (!container) return;
  container.innerHTML = "";

  daysData.forEach((item, dayIdx) => {
    let levelClass = "";
    let levelText = "";
    let levelKey = "";

    if (item.schedule === "byte-late" || item.schedule === "byte-short") {
      levelClass = "level-3";
      levelText = "🔴 包丁なし・レンジ爆速（2品）";
      levelKey = "level3";
    } else if (item.schedule === "class-only") {
      levelClass = "level-2";
      levelText = "🟡 ワンパン10〜15分（2品）";
      levelKey = "level2";
    } else {
      levelClass = "level-1";
      levelText = "🟢 じっくり・つくりおき（3品）";
      levelKey = "level1";
    }

    const recipes = recipeDatabase[levelKey];
    const currentRecipe = recipes[item.recipeIndex % recipes.length];

    function buildRecipeHTML(roleName, dishName, recipeData) {
      if (!recipeData) return "";
      return `
        <div class="dish-recipe-card">
          <div class="dish-name-tag">【${roleName}】${dishName}</div>
          <div style="font-size:0.8rem; margin-bottom:4px;">
            <span class="recipe-section-title">調味料：</span>${recipeData.seasoning}
          </div>
          <ol class="recipe-steps">
            ${recipeData.steps.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>
      `;
    }

    const card = document.createElement("div");
    card.className = "day-card";
    card.id = `day-card-${dayIdx}`;
    card.innerHTML = `
      <div class="day-header">
        <div>
          <span class="day-name">${item.day}</span>
          <!-- 📅 日にち（例: 10/26）を挿入 -->
          <span class="day-date">${item.dateStr}</span>
          <span style="font-size: 0.85rem; color: #64748b; margin-left: 6px;">📌 ${item.title || "予定なし"}</span>
        </div>
        <select class="schedule-select" onchange="updateScheduleFromSelect(${dayIdx}, this.value)">
          <option value="byte-late" ${item.schedule === "byte-late" ? "selected" : ""}>💼 超多忙（レンチン）</option>
          <option value="byte-short" ${item.schedule === "byte-short" ? "selected" : ""}>💼 多忙（レンチン）</option>
          <option value="class-only" ${item.schedule === "class-only" ? "selected" : ""}>📚 通常（ワンパン）</option>
          <option value="off" ${item.schedule === "off" ? "selected" : ""}>🌴 休日（じっくり）</option>
        </select>
      </div>

      <div class="level-badge ${levelClass}">${levelText}</div>

      <div class="meal-box">
        <div class="meal-header">
          <span class="meal-count">🍳 提案献立 (${currentRecipe.soup ? "3品" : "2品"})</span>
          <div class="btn-group">
            <button class="btn-action" onclick="toggleHowTo(${dayIdx})">📖 作り方</button>
            <button class="btn-action" onclick="toggleSwap(${dayIdx})">💡 食材がない時</button>
            <button class="btn-action" onclick="changeRecipe(${dayIdx}, '${levelKey}')">🎲 チェンジ</button>
          </div>
        </div>

        <ul class="menu-list">
          <li class="menu-item"><span class="menu-role">主菜</span> ${currentRecipe.main}</li>
          <li class="menu-item"><span class="menu-role">副菜</span> ${currentRecipe.side}</li>
          ${currentRecipe.soup ? `<li class="menu-item"><span class="menu-role">汁物</span> ${currentRecipe.soup}</li>` : ''}
        </ul>

        <!-- 作り方エリア -->
        <div class="expand-box ${item.showHowTo ? 'active' : ''}">
          <div class="expand-title">🍳 本日の全メニュー作り方</div>
          ${buildRecipeHTML("主菜", currentRecipe.main, currentRecipe.recipes ? currentRecipe.recipes.main : null)}
          ${buildRecipeHTML("副菜", currentRecipe.side, currentRecipe.recipes ? currentRecipe.recipes.side : null)}
          ${currentRecipe.soup ? buildRecipeHTML("汁物", currentRecipe.soup, currentRecipe.recipes ? currentRecipe.recipes.soup : null) : ""}
        </div>

        <!-- 食材かえっこエリア -->
        <div class="expand-box swap-style ${item.showSwap ? 'active' : ''}">
          <div class="expand-title" style="color:#78350f;">🔄 食材かえっこ（代替）ヒント</div>
          <div>${currentRecipe.swap}</div>
        </div>

        <div class="nutrition-tags">
          ${currentRecipe.tags.map(tag => `<span class="nutri-tag">${tag}</span>`).join('')}
        </div>

        <div class="nutrition-memo">
          💡 <strong>栄養ポイント：</strong>${currentRecipe.memo}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  renderShoppingList();
  renderCalendar();
  calculateBudget();
}

// 5. タブ切り替え制御
function switchTab(tabName) {
  const menuView = document.getElementById("menu-view");
  const calView = document.getElementById("calendar-view");
  const budgetView = document.getElementById("budget-view");
  const shopView = document.getElementById("shopping-view");

  const menuBtn = document.getElementById("tab-menu-btn");
  const calBtn = document.getElementById("tab-cal-btn");
  const budgetBtn = document.getElementById("tab-budget-btn");
  const shopBtn = document.getElementById("tab-shop-btn");

  menuView.classList.remove("active");
  calView.classList.remove("active");
  if (budgetView) budgetView.classList.remove("active");
  shopView.classList.remove("active");

  menuBtn.classList.remove("active");
  calBtn.classList.remove("active");
  if (budgetBtn) budgetBtn.classList.remove("active");
  shopBtn.classList.remove("active");

  if (tabName === "menu") {
    menuView.classList.add("active");
    menuBtn.classList.add("active");
    renderApp();
  } else if (tabName === "calendar") {
    calView.classList.add("active");
    calBtn.classList.add("active");
  } else if (tabName === "budget" && budgetView && budgetBtn) {
    budgetView.classList.add("active");
    budgetBtn.classList.add("active");
  } else if (tabName === "shopping") {
    shopView.classList.add("active");
    shopBtn.classList.add("active");
  }
}

function changeMonth(delta) {
  currentDate.setMonth(currentDate.getMonth() + delta);
  renderCalendar();
}

// 6. 月間カレンダー描画
function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  const monthYearEl = document.getElementById("current-month-year");
  if (!grid || !monthYearEl) return;
  grid.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const todayObj = new Date();
  const tYear = todayObj.getFullYear();
  const tMonth = todayObj.getMonth();
  const tDate = todayObj.getDate();

  monthYearEl.innerText = `${year}年 ${month + 1}月`;

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  weekdays.forEach(w => {
    const head = document.createElement("div");
    head.className = "cal-day-head";
    head.innerText = w;
    grid.appendChild(head);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "cal-cell empty";
    emptyCell.style.opacity = "0.3";
    grid.appendChild(emptyCell);
  }

  for (let date = 1; date <= lastDate; date++) {
    const mStr = String(month + 1).padStart(2, '0');
    const dStr = String(date).padStart(2, '0');
    const dateKey = `${year}-${mStr}-${dStr}`;

    const event = monthEvents[dateKey];

    const isToday = (year === tYear && month === tMonth && date === tDate);

    let colorClass = "color-red";
    if (event && event.color) {
      colorClass = `color-${event.color}`;
    }

    const cell = document.createElement("div");
    cell.className = `cal-cell ${isToday ? 'today' : ''}`;
    cell.onclick = () => openEventModal(year, month + 1, date);
    
    cell.innerHTML = `
      <span class="cal-date-num">${date}</span>
      ${event && event.title ? `<div class="cal-event-text ${colorClass}">${event.title}</div>` : ''}
    `;
    grid.appendChild(cell);
  }
}

// 7. 食費予算シミュレータ計算ロジック
function calculateBudget() {
  const budgetInput = document.getElementById("monthly-budget-input");
  if (!budgetInput) return;

  const totalBudget = parseInt(budgetInput.value) || 0;

  const meat = parseInt(document.getElementById("range-meat").value) || 0;
  const vege = parseInt(document.getElementById("range-vege").value) || 0;
  const rice = parseInt(document.getElementById("range-rice").value) || 0;

  document.getElementById("val-meat").innerText = "￥" + meat.toLocaleString();
  document.getElementById("val-vege").innerText = "￥" + vege.toLocaleString();
  document.getElementById("val-rice").innerText = "￥" + rice.toLocaleString();

  const spentSum = meat + vege + rice;
  const remaining = totalBudget - spentSum;

  document.getElementById("total-spent-val").innerText = "￥" + spentSum.toLocaleString();
  
  const remainingEl = document.getElementById("remaining-val");
  remainingEl.innerText = "￥" + remaining.toLocaleString();

  if (remaining < 0) {
    remainingEl.style.color = "#ef4444";
  } else {
    remainingEl.style.color = "#2563eb";
  }

  const fill = document.getElementById("budget-progress-fill");
  if (fill) {
    let ratio = totalBudget > 0 ? (spentSum / totalBudget) * 100 : 0;
    fill.style.width = Math.min(ratio, 100) + "%";
    fill.style.backgroundColor = ratio > 100 ? "#ef4444" : "#2563eb";
  }
}

// 8. カレンダーモーダル操作
function openEventModal(year, month, date) {
  const mStr = String(month).padStart(2, '0');
  const dStr = String(date).padStart(2, '0');
  activeEditingKey = `${year}-${mStr}-${dStr}`;

  const modal = document.getElementById("event-modal");
  const title = document.getElementById("modal-date-title");
  const textInput = document.getElementById("modal-text-input");
  const select = document.getElementById("modal-schedule-select");

  title.innerText = `📅 ${year}年${month}月${date}日の予定入力`;
  
  const currentEvent = monthEvents[activeEditingKey];
  if (currentEvent) {
    textInput.value = currentEvent.title || "";
    select.value = currentEvent.schedule || "class-only";
    
    const colorVal = currentEvent.color || "red";
    const radioBtn = modal.querySelector(`input[name="modal-color"][value="${colorVal}"]`);
    if (radioBtn) radioBtn.checked = true;
  } else {
    textInput.value = "";
    select.value = "class-only";
    const defaultRadio = modal.querySelector(`input[name="modal-color"][value="red"]`);
    if (defaultRadio) defaultRadio.checked = true;
  }

  modal.classList.add("active");
}

function closeEventModal() {
  const modal = document.getElementById("event-modal");
  modal.classList.remove("active");
  activeEditingKey = null;
}

function saveEventFromModal() {
  if (!activeEditingKey) return;
  const textInput = document.getElementById("modal-text-input");
  const select = document.getElementById("modal-schedule-select");
  const selectedColor = document.querySelector('input[name="modal-color"]:checked')?.value || "red";

  const titleText = textInput.value.trim();

  if (titleText !== "") {
    monthEvents[activeEditingKey] = {
      title: titleText,
      schedule: select.value,
      color: selectedColor
    };
  } else {
    delete monthEvents[activeEditingKey];
  }

  renderApp();
  closeEventModal();
}

function resetEventFromModal() {
  if (!activeEditingKey) return;
  
  delete monthEvents[activeEditingKey];

  renderApp();
  closeEventModal();
}

// 9. 今週の献立用ヘルパー関数
function updateScheduleFromSelect(dayIndex, newSchedule) {
  daysData[dayIndex].schedule = newSchedule;
  daysData[dayIndex].recipeIndex = 0;
  daysData[dayIndex].showSwap = false;
  daysData[dayIndex].showHowTo = false;
  renderApp();
}

function changeRecipe(dayIndex, levelKey) {
  const maxRecipes = recipeDatabase[levelKey].length;
  daysData[dayIndex].recipeIndex = (daysData[dayIndex].recipeIndex + 1) % maxRecipes;
  daysData[dayIndex].showSwap = false;
  daysData[dayIndex].showHowTo = false;
  renderApp();
}

function toggleSwap(dayIndex) {
  daysData[dayIndex].showSwap = !daysData[dayIndex].showSwap;
  daysData[dayIndex].showHowTo = false;
  renderApp();
}

function toggleHowTo(dayIndex) {
  daysData[dayIndex].showHowTo = !daysData[dayIndex].showHowTo;
  daysData[dayIndex].showSwap = false;
  renderApp();
}

// 10. 買い物リスト描画
function renderShoppingList() {
  const listEl = document.getElementById("shopping-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  shoppingList.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = `shopping-item ${item.checked ? "done" : ""}`;
    li.innerHTML = `
      <input type="checkbox" ${item.checked ? "checked" : ""} onchange="toggleShopping(${idx})">
      <span>${item.name}</span>
    `;
    listEl.appendChild(li);
  });
}

function toggleShopping(index) {
  shoppingList[index].checked = !shoppingList[index].checked;
  renderShoppingList();
}

// 初期起動
renderApp();