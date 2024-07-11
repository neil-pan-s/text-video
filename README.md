# text-video
文字视频 - 抖音热门文字旋转效果 自动分割文本 随机文字大小、颜色、旋转方向

https://user-images.githubusercontent.com/2844717/174720839-8f745edb-352b-4575-9f87-ee6a7fc32002.mp4

## 文字随机属性

### 文字大小

48px, 72px, 96px

### 文字颜色

```js
[
  { label: '桜色', jp: 'さくらいろ', color: '#fef4f4' },
  { label: '小豆色', jp: 'あずきいろ', color: '#96514d' },
  { label: '黄金', jp: 'こがね', color: '#e6b422' },
  { label: '萌葱色', jp: 'もえぎいろ', color: '#006e54' },
  { label: '古代紫', jp: 'こだいむらさき', color: '#895b8a' },
  { label: '薄桜', jp: 'うすざくら', color: '#fdeff2' },
  { label: '枯茶', jp: 'からちゃ', color: '#8d6449' },
  { label: '櫨染', jp: 'はじぞめ', color: '#d9a62e' },
  { label: '花緑青', jp: 'はなろくしょう', color: '#00a381' },
  { label: '茄子紺', jp: 'なすこん', color: '#824880' },
  { label: '桜鼠', jp: 'さくらねず', color: '#e9dfe5' },
  { label: '飴色', jp: 'あめいろ', color: '#deb068' },
  { label: '黄朽葉色', jp: 'きくちばいろ', color: '#d3a243' },
  { label: '翡翠色', jp: 'ひすいいろ', color: '#38b48b' },
  { label: '二藍', jp: 'ふたあい', color: '#915c8b' },
  { label: '鴇鼠', jp: 'ときねず', color: '#e4d2d8' },
  { label: '駱駝色', jp: 'らくだいろ', color: '#bf794e' },
  // { label: '山吹茶', jp: 'やまぶきちゃ', color: '#c89932' },
  { label: '青緑', jp: 'あおみどり', color: '#00a497' },
  { label: '京紫', jp: 'きょうむらさき', color: '#9d5b8b' },
  { label: '虹色', jp: 'にじいろ', color: '#f6bfbc' },
  { label: '土色', jp: 'つちいろ', color: '#bc763c' },
  { label: '芥子色', jp: 'からしいろ', color: '#d0af4c' },
  { label: '水浅葱', jp: 'みずあさぎ', color: '#80aba9' },
  { label: '蒲葡', jp: 'えびぞめ', color: '#7a4171' },
  { label: '珊瑚色', jp: 'さんごいろ', color: '#f5b1aa' },
  { label: '黄唐茶', jp: 'きがらちゃ', color: '#b98c46' },
  { label: '豆がら茶', jp: 'まめがらちゃ', color: '#8b968d' },
  { label: '錆浅葱', jp: 'さびあさぎ', color: '#5c9291' },
  { label: '若紫', jp: 'わかむらさき', color: '#bc64a4' },
  { label: '一斤染', jp: 'いっこんぞめ', color: '#f5b199' },
  { label: '桑染', jp: 'くわぞめ', color: '#b79b5b' },
  { label: '麹塵', jp: 'きくじん', color: '#6e7955' },
  { label: '青碧', jp: 'せいへき', color: '#478384' },
  { label: '紅紫', jp: 'べにむらさき', color: '#b44c97' },
  { label: '宍色', jp: 'ししいろ', color: '#efab93' },
  { label: '櫨色', jp: 'はじいろ', color: '#b77b57' },
  { label: '山鳩色', jp: 'やまばといろ', color: '#767c6b' },
  { label: '御召茶', jp: 'おめしちゃ', color: '#43676b' },
  { label: '梅紫', jp: 'うめむらさき', color: '#aa4c8f' },
  { label: '紅梅色', jp: 'こうばいいろ', color: '#f2a0a1' },
  { label: '黄橡', jp: 'きつるばみ', color: '#b68d4c' },
  { label: '利休鼠', jp: 'りきゅうねずみ', color: '#888e7e' },
  { label: '湊鼠', jp: 'みなとねずみ', color: '#80989b' },
  { label: ' 菖蒲色', jp: 'あやめいろ', color: '#cc7eb1' },
  { label: '薄紅', jp: 'うすべに', color: '#f0908d' },
  { label: '丁字染', jp: 'ちょうじぞめ', color: '#ad7d4c' },
  { label: '海松茶', jp: 'みるちゃ', color: '#5a544b' },
  { label: '高麗納戸', jp: 'こうらいなんど', color: '#2c4f54' },
  { label: '紅藤色', jp: 'べにふじいろ', color: '#cca6bf' },
  { label: '甚三紅', jp: 'じんざもみ', color: '#ee827c' },
  { label: '香染', jp: 'こうぞめ', color: '#ad7d4c' },
  { label: '藍海松茶', jp: 'あいみるちゃ', color: '#56564b' },
  { label: '百入茶', jp: 'ももしおちゃ', color: '#1f3134' },
  { label: '浅紫', jp: 'あさむらさき', color: '#c4a3bf' },
  { label: '桃色', jp: 'ももいろ', color: '#f09199' },
  { label: '枇杷茶', jp: 'びわちゃ', color: '#ae7c4f' },
  { label: '藍媚茶', jp: 'あいこびちゃ', color: '#555647' },
  { label: '錆鼠', jp: 'さびねず', color: '#47585c' },
  { label: '紫水晶', jp: 'むらさきすいしょう', color: '#e7e7eb' },
  { label: '鴇色', jp: 'ときいろ', color: '#f4b3c2' },
  { label: '芝翫茶', jp: 'しかんちゃ', color: '#ad7e4e' },
  { label: '千歳茶', jp: 'せんさいちゃ', color: '#494a41' },
  { label: '錆鉄御納戸', jp: 'さびてつおなんど', color: '#485859' },
  { label: '薄梅鼠', jp: 'うすうめねず', color: '#dcd6d9' },
  { label: '撫子色', jp: 'なでしこいろ', color: '#eebbcb' },
  { label: '焦香', jp: 'こがれこう', color: '#ae7c58' },
  { label: '岩井茶', jp: 'いわいちゃ', color: '#6b6f59' },
  { label: '藍鼠', jp: 'あいねず', color: '#6c848d' },
  { label: '暁鼠', jp: 'あかつきねず', color: '#d3cfd9' },
  { label: '灰梅', jp: 'はいうめ', color: '#e8d3c7' },
  { label: '胡桃色', jp: 'くるみいろ', color: '#a86f4c' },
  { label: '仙斎茶', jp: 'せんさいちゃ', color: '#474b42' },
  { label: '錆御納戸', jp: 'さびおなんど', color: '#53727d' },
  { label: '牡丹鼠', jp: 'ぼたんねず', color: '#d3ccd6' },
  { label: '灰桜', jp: 'はいざくら', color: '#e8d3d1' },
  { label: '渋紙色', jp: 'しぶかみいろ', color: '#946243' },
  // { label: '黒緑', jp: 'くろみどり', color: '#333631' },
  { label: '舛花色', jp: 'ますはないろ', color: '#5b7e91' },
  { label: '霞色', jp: 'かすみいろ', color: '#c8c2c6' },
  { label: '淡紅藤', jp: 'あわべにふじ', color: '#e6cde3' },
  { label: '朽葉色', jp: 'くちばいろ', color: '#917347' },
  { label: '柳煤竹', jp: 'やなぎすすたけ', color: '#5b6356' },
  { label: '熨斗目花色', jp: 'のしめはないろ', color: '#426579' },
  { label: '藤鼠', jp: 'ふじねず', color: '#a6a5c4' },
  { label: '石竹色', jp: 'せきちくいろ', color: '#e5abbe' },
  { label: '桑茶', jp: 'くわちゃ', color: '#956f29' },
  { label: '樺茶色', jp: 'かばちゃいろ', color: '#726250' },
  { label: '御召御納戸', jp: 'おめしおなんど', color: '#4c6473' },
  { label: '半色', jp: 'はしたいろ', color: '#a69abd' },
  { label: '薄紅梅', jp: 'うすこうばい', color: '#e597b2' },
  { label: '路考茶', jp: 'ろこうちゃ', color: '#8c7042' },
  { label: '空五倍子色', jp: 'うつぶしいろ', color: '#9d896c' },
  { label: '鉄御納戸', jp: 'てつおなんど', color: '#455765' },
  { label: '薄色', jp: 'うすいろ', color: '#a89dac' },
  { label: '桃花色', jp: 'ももはないろ', color: '#e198b4' },
  { label: '国防色', jp: 'こくぼうしょく', color: '#7b6c3e' },
  { label: '生壁色', jp: 'なまかべいろ', color: '#94846a' },
  { label: '紺鼠', jp: 'こんねず', color: '#44617b' },
  { label: '薄鼠', jp: 'うすねず', color: '#9790a4' },
  { label: '水柿', jp: 'みずがき', color: '#e4ab9b' },
  { label: '伽羅色', jp: 'きゃらいろ', color: '#d8a373' },
  { label: '肥後煤竹', jp: 'ひごすすたけ', color: '#897858' },
  { label: '藍鉄', jp: 'あいてつ', color: '#393f4c' },
  { label: '鳩羽鼠', jp: 'はとばねずみ', color: '#9e8b8e' },
  { label: 'ときがら茶', jp: 'ときがらちゃ', color: '#e09e87' },
  { label: '江戸茶', jp: 'えどちゃ', color: '#cd8c5c' },
  { label: '媚茶', jp: 'こびちゃ', color: '#716246' },
  { label: '青褐', jp: 'あおかち', color: '#393e4f' },
  { label: '鳩羽色', jp: 'はとばいろ', color: '#95859c' },
  { label: '退紅', jp: 'あらぞめ', color: '#d69090' },
  { label: '樺色', jp: 'かばいろ', color: '#cd5e3c' },
  { label: '白橡', jp: 'しろつるばみ', color: '#cbb994' },
  { label: '褐返', jp: 'かちかえし', color: '#203744' },
  { label: '桔梗鼠', jp: 'ききょうねず', color: '#95949a' },
  { label: '薄柿', jp: 'うすがき', color: '#d4acad' },
  { label: '紅鬱金', jp: 'べにうこん', color: '#cb8347' },
  { label: '亜麻色', jp: 'あまいろ', color: '#d6c6af' },
  { label: '褐色', jp: 'かちいろ', color: '#4d4c61' },
  { label: '紫鼠', jp: 'むらさきねず', color: '#71686c' },
  { label: '長春色', jp: 'ちょうしゅんいろ', color: '#c97586' },
  { label: '土器色', jp: 'かわらけいろ', color: '#c37854' },
  { label: '榛色', jp: 'はしばみいろ', color: '#bfa46f' },
  { label: '月白', jp: 'げっぱく', color: '#eaf4fc' },
  { label: '葡萄鼠', jp: 'ぶどうねずみ', color: '#705b67' },
  { label: '梅鼠', jp: 'うめねず', color: '#c099a0' },
  { label: '狐色', jp: 'きつねいろ', color: '#c38743' },
  { label: '灰汁色', jp: 'あくいろ', color: '#9e9478' },
  { label: '白菫色', jp: 'しろすみれいろ', color: '#eaedf7' },
  { label: '濃色', jp: 'こきいろ', color: '#634950' },
  { label: '鴇浅葱', jp: 'ときあさぎ', color: '#b88884' },
  { label: '黄土色', jp: 'おうどいろ', color: '#c39143' },
  { label: '利休茶', jp: 'りきゅうちゃ', color: '#a59564' },
  { label: '白花色', jp: 'しらはないろ', color: '#e8ecef' },
  { label: '紫鳶', jp: 'むらさきとび', color: '#5f414b' },
  { label: '梅染', jp: 'うめぞめ', color: '#b48a76' },
  { label: '琥珀色', jp: 'こはくいろ', color: '#bf783a' },
  // { label: '鶯茶', jp: 'うぐいすちゃ', color: '#715c1f' },
  { label: '藍白', jp: 'あいじろ', color: '#ebf6f7' },
  { label: '濃鼠', jp: 'こいねず', color: '#4f455c' },
  { label: '蘇芳香', jp: 'すおうこう', color: '#a86965' },
  { label: '赤茶', jp: 'あかちゃ', color: '#bb5535' },
  { label: '木蘭色', jp: 'もくらんじき', color: '#c7b370' },
  { label: '白藍', jp: 'しらあい', color: '#c1e4e9' },
  { label: '藤煤竹', jp: 'ふじすすたけ', color: '#5a5359' },
  { label: '浅蘇芳', jp: 'あさすおう', color: '#a25768' },
  { label: '代赭', jp: 'たいしゃ', color: '#bb5520' },
  { label: '砂色', jp: 'すないろ', color: '#dcd3b2' },
  { label: '水色', jp: 'みずいろ', color: '#bce2e8' },
  { label: '滅紫', jp: 'けしむらさき', color: '#594255' },
  { label: '真朱', jp: 'まそお', color: '#ec6d71' },
  { label: '煉瓦色', jp: 'れんがいろ', color: '#b55233' },
  { label: '油色', jp: 'あぶらいろ', color: '#a19361' },
  { label: '瓶覗', jp: 'かめのぞき', color: '#a2d7dd' },
  { label: '紅消鼠', jp: 'べにけしねずみ', color: '#524748' },
  { label: '赤紫', jp: 'あかむらさき', color: '#eb6ea5' },
  { label: '雀茶', jp: 'すずめちゃ', color: '#aa4f37' },
  { label: '利休色', jp: 'りきゅういろ', color: '#8f8667' },
  { label: '秘色色', jp: 'ひそくいろ', color: '#abced8' },
  { label: '似せ紫', jp: 'にせむらさき', color: '#513743' },
  { label: '躑躅色', jp: 'つつじいろ', color: '#e95295' },
  { label: '団十郎茶', jp: 'だんじゅうろうちゃ', color: '#9f563a' },
  { label: '梅幸茶', jp: 'ばいこうちゃ', color: '#887938' },
  { label: '空色', jp: 'そらいろ', color: '#a0d8ef' },
  { label: '灰黄緑', jp: 'はいきみどり', color: '#e6eae3' },
  { label: '牡丹色', jp: 'ぼたんいろ', color: '#e7609e' },
  { label: '柿渋色', jp: 'かきしぶいろ', color: '#9f563a' },
  { label: '璃寛茶', jp: 'りかんちゃ', color: '#6a5d21' },
  { label: '勿忘草色', jp: 'わすれなぐさいろ', color: '#89c3eb' },
  { label: '蕎麦切色', jp: 'そばきりいろ', color: '#d4dcd6' },
  { label: '今様色', jp: 'いまよういろ', color: '#d0576b' },
  { label: '紅鳶', jp: 'べにとび', color: '#9a493f' },
  { label: '黄海松茶', jp: 'きみるちゃ', color: '#918754' },
  { label: '青藤色', jp: 'あおふじいろ', color: '#84a2d4' },
  { label: '薄雲鼠', jp: 'うすくもねず', color: '#d4dcda' },
  { label: '中紅', jp: 'なかべに', color: '#c85179' },
  { label: '灰茶', jp: 'はいちゃ', color: '#98623c' },
  { label: '菜種油色', jp: 'なたねゆいろ', color: '#a69425' },
  { label: '白群', jp: 'びゃくぐん', color: '#83ccd2' },
  { label: '枯野色', jp: 'かれのいろ', color: '#d3cbc6' },
  { label: '薔薇色', jp: 'ばらいろ', color: '#e9546b' },
  { label: '茶色', jp: 'ちゃいろ', color: '#965042' },
  { label: '青朽葉', jp: 'あおくちば', color: '#ada250' },
  { label: '浅縹', jp: 'あさはなだ', color: '#84b9cb' },
  { label: '潤色', jp: 'うるみいろ', color: '#c8c2be' },
  { label: '韓紅', jp: 'からくれない', color: '#e95464' },
  { label: '檜皮色', jp: 'ひわだいろ', color: '#965036' },
  { label: '根岸色', jp: 'ねぎしいろ', color: '#938b4b' },
  { label: '薄花色', jp: 'うすはないろ', color: '#698aab' },
  { label: '利休白茶', jp: 'りきゅうしろちゃ', color: '#b3ada0' },
  { label: '銀朱', jp: 'ぎんしゅ', color: '#c85554' },
  { label: '鳶色', jp: 'とびいろ', color: '#95483f' },
  { label: '鶸茶', jp: 'ひわちゃ', color: '#8c8861' },
  { label: '納戸色', jp: 'なんどいろ', color: '#008899' },
  { label: '茶鼠', jp: 'ちゃねずみ', color: '#a99e93' },
  { label: '赤紅', jp: 'あかべに', color: '#c53d43' },
  { label: '柿茶', jp: 'かきちゃ', color: '#954e2a' },
  { label: '柳茶', jp: 'やなぎちゃ', color: '#a1a46d' },
  { label: '浅葱色', jp: 'あさぎいろ', color: '#00a3af' },
  { label: '胡桃染', jp: 'くるみぞめ', color: '#a58f86' },
  { label: '紅緋', jp: 'べにひ', color: '#e83929' },
  { label: '弁柄色', jp: 'べんがらいろ', color: '#8f2e14' },
  { label: '海松色', jp: 'みるいろ', color: '#726d40' },
  { label: '花浅葱', jp: 'はなあさぎ', color: '#2a83a2' },
  { label: '江戸鼠', jp: 'えどねず', color: '#928178' },
  { label: '赤', jp: 'あか', color: '#e60033' },
  { label: '赤錆色', jp: 'あかさびいろ', color: '#8a3319' },
  // { label: '鶯色', jp: 'うぐいすいろ', color: '#928c36' },
  { label: '新橋色', jp: 'しんばしいろ', color: '#59b9c6' },
  { label: '煤色', jp: 'すすいろ', color: '#887f7a' },
  { label: '猩々緋', jp: 'しょうじょうひ', color: '#e2041b' },
  { label: ' 褐色', jp: 'かっしょく', color: '#8a3b00' },
  { label: '緑黄色', jp: 'りょくおうしょく', color: '#dccb18' },
  { label: '天色', jp: 'あまいろ', color: '#2ca9e1' },
  { label: '丁子茶', jp: 'ちょうじちゃ', color: '#b4866b' },
  { label: '紅', jp: 'くれない', color: '#d7003a' },
  { label: '栗梅', jp: 'くりうめ', color: '#852e19' },
  { label: '鶸色', jp: 'ひわいろ', color: '#d7cf3a' },
  { label: '露草色', jp: 'つゆくさいろ', color: '#38a1db' },
  { label: '柴染', jp: 'ふしぞめ', color: '#b28c6e' },
  { label: '深緋', jp: 'こきひ', color: '#c9171e' },
  { label: '紅檜皮', jp: 'べにひはだ', color: '#7b4741' },
  { label: '抹茶色', jp: 'まっちゃいろ', color: '#c5c56a' },
  { label: '青', jp: 'あお', color: '#0095d9' },
  { label: '宗伝唐茶', jp: 'そうでんからちゃ', color: '#a16d5d' },
  { label: '緋色', jp: 'ひいろ', color: '#d3381c' },
  { label: '海老茶', jp: 'えびちゃ', color: '#773c30' },
  { label: '若草色', jp: 'わかくさいろ', color: '#c3d825' },
  { label: '薄藍', jp: 'うすあい', color: '#0094c8' },
  { label: '砺茶', jp: 'とのちゃ', color: '#9f6f55' },
  { label: '赤丹', jp: 'あかに', color: '#ce5242' },
  { label: '唐茶', jp: 'からちゃ', color: '#783c1d' },
  { label: '黄緑', jp: 'きみどり', color: '#b8d200' },
  { label: '縹色', jp: 'はなだいろ', color: '#2792c3' },
  { label: '煎茶色', jp: 'せんちゃいろ', color: '#8c6450' },
  { label: '紅赤', jp: 'べにあか', color: '#d9333f' },
  { label: '栗色', jp: 'くりいろ', color: '#762f07' },
  { label: '若芽色', jp: 'わかめいろ', color: '#e0ebaf' },
  { label: '紺碧', jp: 'こんぺき', color: '#007bbb' },
  { label: '銀煤竹', jp: 'ぎんすすだけ', color: '#856859' },
  { label: '臙脂', jp: 'えんじ', color: '#b94047' },
  // { label: '赤銅色', jp: 'しゃくどういろ', color: '#752100' },
  { label: '若菜色', jp: 'わかないろ', color: '#d8e698' },
  { label: '薄群青', jp: 'うすぐんじょう', color: '#5383c3' },
  { label: '黄枯茶', jp: 'きがらちゃ', color: '#765c47' },
  { label: '朱・緋', jp: 'あけ', color: '#ba2636' },
  { label: '錆色', jp: 'さびいろ', color: '#6c3524' },
  { label: '若苗色', jp: 'わかなえいろ', color: '#c7dc68' },
  { label: '薄花桜', jp: 'うすはなざくら', color: '#5a79ba' },
  { label: '煤竹色', jp: 'すすたけいろ', color: '#6f514c' },
  { label: '茜色', jp: 'あかねいろ', color: '#b7282e' },
  { label: '赤褐色', jp: 'せっかっしょく', color: '#683f36' },
  { label: '青丹', jp: 'あおに', color: '#99ab4e' },
  { label: '群青色', jp: 'ぐんじょういろ', color: '#4c6cb3' },
  { label: '焦茶', jp: 'こげちゃ', color: '#6f4b3e' },
  { label: '紅海老茶', jp: 'べにえびちゃ', color: '#a73836' },
  { label: '茶褐色', jp: 'ちゃかっしょく', color: '#664032' },
  { label: '草色', jp: 'くさいろ', color: '#7b8d42' },
  { label: '杜若色', jp: 'かきつばたいろ', color: '#3e62ad' },
  // { label: '黒橡', jp: 'くろつるばみ', color: '#544a47' },
  { label: '蘇芳', jp: 'すおう', color: '#9e3d3f' },
  { label: '栗皮茶', jp: 'くりかわちゃ', color: '#6d3c32' },
  { label: '苔色', jp: 'こけいろ', color: '#69821b' },
  { label: '瑠璃色', jp: 'るりいろ', color: '#1e50a2' },
  { label: '憲法色', jp: 'けんぽういろ', color: '#543f32' },
  { label: '真紅', jp: 'しんく', color: '#a22041' },
  { label: '黒茶', jp: 'くろちゃ', color: '#583822' },
  { label: '萌黄', jp: 'もえぎ', color: '#aacf53' },
  { label: '薄縹', jp: 'うすはなだ', color: '#507ea4' },
  { label: '涅色', jp: 'くりいろ', color: '#554738' },
  { label: '濃紅', jp: 'こいくれない', color: '#a22041' },
  { label: '葡萄茶', jp: 'えびちゃ', color: '#6c2c2f' },
  { label: '苗色', jp: 'なえいろ', color: '#b0ca71' },
  { label: '瑠璃紺', jp: 'るりこん', color: '#19448e' },
  { label: '檳榔子染', jp: 'びんろうじぞめ', color: '#433d3c' },
  { label: '象牙色', jp: 'ぞうげいろ', color: '#f8f4e6' },
  // { label: '葡萄色', jp: 'えびいろ', color: '#640125' },
  { label: '若葉色', jp: 'わかばいろ', color: '#b9d08b' },
  // { label: '紺瑠璃', jp: 'こんるり', color: '#164a84' },
  { label: '黒鳶', jp: 'くろとび', color: '#432f2f' },
  { label: '練色', jp: 'ねりいろ', color: '#ede4cd' },
  { label: '萱草色', jp: 'かんぞういろ', color: '#f8b862' },
  { label: '松葉色', jp: 'まつばいろ', color: '#839b5c' },
  { label: '藍色', jp: 'あいいろ', color: '#165e83' },
  { label: '赤墨', jp: 'あかすみ', color: '#3f312b' },
  { label: '灰白色', jp: 'かいはくしょく', color: '#e9e4d4' },
  { label: '柑子色', jp: 'こうじいろ', color: '#f6ad49' },
  { label: '夏虫色', jp: 'なつむしいろ', color: '#cee4ae' },
  { label: '青藍', jp: 'せいらん', color: '#274a78' },
  // { label: '黒紅', jp: 'くろべに', color: '#302833' },
  { label: '蒸栗色', jp: 'むしぐりいろ', color: '#ebe1a9' },
  { label: '金茶', jp: 'きんちゃ', color: '#f39800' },
  { label: '鶸萌黄', jp: 'ひわもえぎ', color: '#82ae46' },
  { label: '深縹', jp: 'こきはなだ', color: '#2a4073' },
  { label: '白', jp: 'しろ', color: '#ffffff' },
  { label: '女郎花', jp: 'おみなえし', color: '#f2f2b0' },
  { label: '蜜柑', jp: 'みかんいろ', color: '#f08300' },
  { label: '柳色', jp: 'やなぎいろ', color: '#a8c97f' },
  { label: '紺色', jp: 'こんいろ', color: '#223a70' },
  { label: '胡粉', jp: 'ごふんいろ', color: '#fffffc' },
  { label: '枯草', jp: 'かれくさいろ', color: '#e4dc8a' },
  { label: '鉛丹', jp: 'えんたんいろ', color: '#ec6d51' },
  { label: '青白橡', jp: 'あおしろつるばみ', color: '#9ba88d' },
  { label: '紺青', jp: 'こんじょう', color: '#192f60' },
  { label: '卯の花', jp: 'うのはないろ', color: '#f7fcfe' },
  { label: '淡黄', jp: 'たんこう', color: '#f8e58c' },
  { label: '黄丹', jp: 'おうに', color: '#ee7948' },
  { label: '柳鼠', jp: 'やなぎねず', color: '#c8d5bb' },
  { label: '留紺', jp: 'とめこん', color: '#1c305c' },
  { label: '白磁', jp: 'はくじ', color: '#f8fbf8' },
  { label: '白茶', jp: 'しらちゃ', color: '#ddbb99' },
  { label: '柿色', jp: 'かきいろ', color: '#ed6d3d' },
  { label: '裏葉柳', jp: 'うらはやなぎ', color: '#c1d8ac' },
  { label: '濃藍', jp: 'こいあい', color: '#0f2350' },
  { label: '生成り色', jp: 'きなりいろ', color: '#fbfaf5' },
  { label: '赤白橡', jp: 'あかしろつるばみ', color: '#d7a98c' },
  // { label: '黄赤', jp: 'きあか', color: '#ec6800' },
  { label: '山葵色', jp: 'わさびいろ', color: '#a8bf93' },
  { label: '鉄紺', jp: 'てつこん', color: '#17184b' },
  { label: '乳白色', jp: 'にゅうはくしょく', color: '#f3f3f3' },
  { label: '洗柿', jp: 'あらいがき', color: '#f2c9ac' },
  { label: '人参色', jp: 'にんじんいろ', color: '#ec6800' },
  { label: '老竹色', jp: 'おいたけいろ', color: '#769164' },
  // { label: '漆黒', jp: 'しっこく', color: '#0d0015' },
  { label: '白練', jp: 'しろねり', color: '#f3f3f2' },
  { label: '鳥の子色', jp: 'とりのこいろ', color: '#fff1cf' },
  { label: '橙色', jp: 'だいだいいろ', color: '#ee7800' },
  { label: '白緑', jp: 'びゃくろく', color: '#d6e9ca' },
  { label: '淡藤色', jp: 'あわふじいろ', color: '#bbc8e6' },
  { label: '素色', jp: 'そしょく', color: '#eae5e3' },
  { label: '蜂蜜色', jp: 'はちみついろ', color: '#fddea5' },
  { label: '照柿', jp: 'てりがき', color: '#eb6238' },
  { label: '淡萌黄', jp: 'うすもえぎ', color: '#93ca76' },
  { label: '藤色', jp: 'ふじいろ', color: '#bbbcde' },
  { label: '白梅鼠', jp: 'しらうめねず', color: '#e5e4e6' },
  { label: '肌色', jp: 'はだいろ', color: '#fce2c4' },
  { label: '赤橙', jp: 'あかだいだい', color: '#ea5506' },
  { label: '柳染', jp: 'やなぎぞめ', color: '#93b881' },
  { label: '紅掛空色', jp: 'べにかけそらいろ', color: '#8491c3' },
  { label: '白鼠', jp: 'しろねず', color: '#dcdddd' },
  { label: '薄卵色', jp: 'うすたまごいろ', color: '#fde8d0' },
  { label: '金赤', jp: 'きんあか', color: '#ea5506' },
  { label: '薄萌葱', jp: 'うすもえぎ', color: '#badcad' },
  { label: '紅碧', jp: 'べにみどり', color: '#8491c3' },
  { label: '絹鼠', jp: 'きぬねず', color: '#dddcd6' },
  { label: '雄黄', jp: 'ゆうおう', color: '#f9c89b' },
  { label: '朱色', jp: 'しゅいろ', color: '#eb6101' },
  { label: '深川鼠', jp: 'ふかがわねずみ', color: '#97a791' },
  { label: '紺桔梗', jp: 'こんききょう', color: '#4d5aaf' },
  { label: '灰青', jp: 'はいあお', color: '#c0c6c9' },
  { label: '洒落柿', jp: 'しゃれがき', color: '#f7bd8f' },
  { label: '小麦色', jp: 'こむぎいろ', color: '#e49e61' },
  { label: '若緑', jp: 'わかみどり', color: '#98d98e' },
  { label: '花色', jp: 'はないろ', color: '#4d5aaf' },
  { label: '銀鼠', jp: 'ぎんねず', color: '#afafb0' },
  { label: '赤香', jp: 'あかこう', color: '#f6b894' },
  { label: '丹色', jp: 'にいろ', color: '#e45e32' },
  { label: '浅緑', jp: 'あさみどり', color: '#88cb7f' },
  { label: '紺藍', jp: 'こんあい', color: '#4a488e' },
  { label: '薄鈍', jp: 'うすにび', color: '#adadad' },
  { label: '砥粉色', jp: 'とのこいろ', color: '#f4dda5' },
  { label: '黄茶', jp: 'きちゃ', color: '#e17b34' },
  { label: '薄緑', jp: 'うすみどり', color: '#69b076' },
  { label: '紅桔梗', jp: 'べにききょう', color: '#4d4398' },
  { label: '薄墨色', jp: 'うすずみいろ', color: '#a3a3a2' },
  { label: '肉色', jp: 'にくいろ', color: '#f1bf99' },
  { label: '肉桂色', jp: 'にっけいいろ', color: '#dd7a56' },
  { label: '青鈍', jp: 'あおにび', color: '#6b7b6e' },
  { label: '桔梗色', jp: 'ききょういろ', color: '#5654a2' },
  { label: '錫色', jp: 'すずいろ', color: '#9ea1a3' },
  { label: '人色', jp: 'ひといろ', color: '#f1bf99' },
  { label: '赤朽葉色', jp: 'あかくちばいろ', color: '#db8449' },
  { label: '青磁鼠', jp: 'せいじねず', color: '#bed2c3' },
  { label: '藤納戸', jp: 'ふじなんど', color: '#706caa' },
  { label: '素鼠', jp: 'すねずみ', color: '#9fa0a0' },
  { label: '丁子色', jp: 'ちょうじいろ', color: '#efcd9a' },
  { label: '黄櫨染', jp: 'こうろぜん', color: '#d66a35' },
  { label: '薄青', jp: 'うすあお', color: '#93b69c' },
  { label: '紅掛花色', jp: 'べにかけはないろ', color: '#68699b' },
  { label: '鼠色', jp: 'ねずみいろ', color: '#949495' },
  { label: '香色', jp: 'こういろ', color: '#efcd9a' },
  { label: '蒲公英色', jp: 'たんぽぽいろ', color: '#ffd900' },
  { label: '錆青磁', jp: 'さびせいじ', color: '#a6c8b2' },
  { label: '紫苑色', jp: 'しおんいろ', color: '#867ba9' },
  { label: '源氏鼠', jp: 'げんじねず', color: '#888084' },
  { label: '薄香', jp: 'うすこう', color: '#f0cfa0' },
  { label: '黄色', jp: 'きいろ', color: '#ffd900' },
  { label: '緑青色', jp: 'ろくしょういろ', color: '#47885e' },
  { label: '白藤色', jp: 'しらふじいろ', color: '#dbd0e6' },
  { label: '灰色', jp: 'はいいろ', color: '#7d7d7d' },
  { label: '浅黄', jp: 'うすき', color: '#edd3a1' },
  { label: '中黄', jp: 'ちゅうき', color: '#ffea00' },
  { label: '千歳緑', jp: 'ちとせみどり', color: '#316745' },
  { label: '藤紫', jp: 'ふじむらさき', color: '#a59aca' },
  { label: '鉛色', jp: 'なまりいろ', color: '#7b7c7d' },
  { label: '枯色', jp: 'かれいろ', color: '#e0c38c' },
  { label: '菜の花色', jp: 'なのはないろ', color: '#ffec47' },
  { label: '若竹色', jp: 'わかたけいろ', color: '#68be8d' },
  { label: '菫色', jp: 'すみれいろ', color: '#7058a3' },
  { label: '鈍色', jp: 'にびいろ', color: '#727171' },
  { label: '淡香', jp: 'うすこう', color: '#f3bf88' },
  { label: '黄檗色', jp: 'きはだいろ', color: '#fef263' },
  { label: '緑', jp: 'みどり', color: '#3eb370' },
  { label: '青紫', jp: 'あおむらさき', color: '#674598' },
  { label: '墨', jp: 'すみ', color: '#595857' },
  { label: '杏色', jp: 'あんずいろ', color: '#f7b977' },
  { label: '卵色', jp: 'たまごいろ', color: '#fcd575' },
  { label: '常磐色', jp: 'ときわいろ', color: '#007b43' },
  { label: '菖蒲色', jp: 'しょうぶいろ', color: '#674196' },
  { label: '丼鼠', jp: 'どぶねずみ', color: '#595455' },
  { label: '東雲色', jp: 'しののめいろ', color: '#f19072' },
  { label: '花葉色', jp: 'はなばいろ', color: '#fbd26b' },
  { label: '千草鼠', jp: 'ちぐさねず', color: '#bed3ca' },
  { label: '竜胆色', jp: 'りんどういろ', color: '#9079ad' },
  { label: '消炭色', jp: 'けしずみいろ', color: '#524e4d' },
  { label: '曙色', jp: 'あけぼのいろ', color: '#f19072' },
  { label: '刈安色', jp: 'かりやすいろ', color: '#f5e56b' },
  { label: '千草色', jp: 'ちぐさいろ', color: '#92b5a9' },
  { label: '江戸紫', jp: 'えどむらさき', color: '#745399' },
  { label: '藍墨茶', jp: 'あいすみちゃ', color: '#474a4d' },
  { label: '珊瑚朱色', jp: 'さんごしゅいろ', color: '#ee836f' },
  { label: '玉蜀黍色', jp: 'とうもろこしいろ', color: '#eec362' },
  { label: '青磁色', jp: 'せいじいろ', color: '#7ebea5' },
  { label: '本紫', jp: 'ほんむらさき', color: '#65318e' },
  { label: '羊羹色', jp: 'ようかんいろ', color: '#383c3c' },
  { label: '深支子', jp: 'こきくちなし', color: '#eb9b6f' },
  { label: '金糸雀色', jp: 'かなりあいろ', color: '#ebd842' },
  { label: '青竹色', jp: 'あおたけいろ', color: '#7ebeab' },
  { label: ' 葡萄色', jp: 'ぶどういろ', color: '#522f60' },
  { label: '蝋色', jp: 'ろういろ', color: '#2b2b2b' },
  { label: '纁', jp: 'そひ', color: '#e0815e' },
  { label: '黄支子色', jp: 'きくちなしいろ', color: '#ffdb4f' },
  { label: '常磐緑', jp: 'ときわみどり', color: '#028760' },
  { label: '深紫', jp: 'ふかむらさき', color: '#493759' },
  // { label: '黒', jp: 'くろ', color: '#2b2b2b' },
  { label: '浅緋', jp: 'うすきひ', color: '#df7163' },
  { label: '支子色', jp: 'くちなしいろ', color: '#fbca4d' },
  { label: '木賊色', jp: 'とくさいろ', color: '#3b7960' },
  // { label: '紫黒', jp: 'しこく', color: '#2e2930' },
  // { label: '烏羽色', jp: 'からすばいろ', color: '#180614' },
  { label: '真赭', jp: 'まそほ', color: '#d57c6b' },
  { label: '向日葵色', jp: 'ひまわりいろ', color: '#fcc800' },
  { label: '天鵞絨', jp: 'びろうど', color: '#2f5d50' },
  { label: '紫', jp: 'むらさき', color: '#884898' },
  // { label: '鉄黒', jp: 'てつぐろ', color: '#281a14' },
  { label: '洗朱', jp: 'あらいしゅ', color: '#d0826c' },
  { label: '山吹色', jp: 'やまぶきいろ', color: '#f8b500' },
  { label: '虫襖', jp: 'むしあお', color: '#3a5b52' },
  { label: '薄葡萄', jp: 'うすぶどう', color: '#c0a2c7' },
  // { label: '濡羽色', jp: 'ぬればいろ', color: '#000b00' },
  { label: '遠州茶', jp: 'えんしゅうちゃ', color: '#ca8269' },
  { label: '鬱金色', jp: 'うこんいろ', color: '#fabf14' },
  { label: '革色', jp: 'かわいろ', color: '#475950' },
  // { label: '紫紺', jp: 'しこん', color: '#460e44' },
  // { label: '黒檀', jp: 'こくたん', color: '#250d00' },
  { label: '紅樺色', jp: 'べにかばいろ', color: '#bb5548' },
  { label: '藤黄', jp: 'とうおう', color: '#f7c114' },
  { label: '深緑', jp: 'ふかみどり', color: '#00552e' },
  { label: '暗紅色', jp: 'あんこうしょく', color: '#74325c' },
  // { label: '憲法黒茶', jp: 'けんぽうくろちゃ', color: '#241a08' },
  { label: '赭', jp: 'そほ', color: '#ab6953' },
  { label: '金色', jp: 'こんじき', color: '#e6b422' },
  { label: '鉄色', jp: 'てついろ', color: '#005243' },
  { label: '桑の実色', jp: 'くわのみいろ', color: '#55295b' },
  // { label: '暗黒色', jp: 'あんこくしょく', color: '#16160e' },
]
```

### 文字动画

```js
[
  /* Attention seekers  */
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shakeX',
  'shakeY',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'heartBeat',

  /* Back entrances */
  'backInDown',
  'backInLeft',
  'backInRight',
  'backInUp',

  /* Bouncing entrances  */
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',

  /* Fading entrances  */
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeInTopLeft',
  'fadeInTopRight',
  'fadeInBottomLeft',
  'fadeInBottomRight',

  /* Flippers */
  'flip',
  'flipInX',
  'flipInY',
  // 'flipOutX',
  // 'flipOutY',

  /* Lightspeed */
  'lightSpeedInRight',
  'lightSpeedInLeft',

  /* Rotating entrances */
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',

  /* Specials */
  // 'hinge',
  'jackInTheBox',
  'rollIn',
  // 'rollOut',

  /* Zooming entrances */
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',

  /* Sliding entrances */
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
]
```






