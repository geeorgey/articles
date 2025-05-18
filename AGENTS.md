# AGENTS.md

このドキュメントは、プレゼンテーション生成に関わるAIエージェントやLLMのための参照情報を提供します。

## 画像リソース

プレゼンテーション作成時に利用可能な画像リソースは、以下のメタデータファイルで管理されています：

```
/public/images/metadata.yaml
```

### 画像メタデータの利用方法

1. メタデータファイルは標準的なYAML形式で記述されています
2. 各画像には一意のID、ファイル名、パス、タイトル、説明などの情報が含まれています
3. プレゼンテーション生成時には、このメタデータを参照して適切な画像を選択してください

### 画像参照例

```yaml
# 株式会社リバネスのロゴを参照する例
![株式会社リバネス](./images/leaveanest_logo.png)

# 吉田丈治氏のプロフィール画像を参照する例
![吉田丈治](./images/yoshida_profile.jpg)
```

### 利用可能な画像一覧

現在、以下の画像が利用可能です：

1. **株式会社リバネスのロゴ** (ID: leaveanest_logo)
   - パス: `/images/leaveanest_logo.png`
   - 用途: 会社紹介、プレゼンテーションのクレジット表示など

2. **株式会社リバネスナレッジのロゴ** (ID: lnest_knowledge_logo)
   - パス: `/images/lnest_knowledge_logo.png`
   - 用途: 会社紹介、プレゼンテーションのクレジット表示など

3. **2019年Dreamforce登壇時の画像** (ID: dreamforce_2019)
   - パス: `/images/dreamforce_2019.png`
   - 用途: 講演実績、プロフィール紹介など

4. **吉田丈治のプロフィール画像** (ID: yoshida_profile)
   - パス: `/images/yoshida_profile.jpg`
   - 用途: プロフィールページ、自己紹介、講演者紹介など

## 画像メタデータの詳細

画像メタデータの完全な情報は、以下のファイルを参照してください：

```yaml
---
# 画像メタデータファイル
# LLMがプレゼンテーション作成時に参照するための画像情報

images:
  - id: leaveanest_logo
    filename: leaveanest_logo.png
    path: /images/leaveanest_logo.png
    title: 株式会社リバネスのロゴ
    description: 株式会社リバネスの公式ロゴ画像
    type: logo
    organization: 株式会社リバネス
    source_url: https://lne.st/wp-content/uploads/2022/04/LeaveaNest_logo_header.png
    usage: 会社紹介、プレゼンテーションのクレジット表示など
    
  - id: lnest_knowledge_logo
    filename: lnest_knowledge_logo.png
    path: /images/lnest_knowledge_logo.png
    title: 株式会社リバネスナレッジのロゴ
    description: 株式会社リバネスナレッジの公式ロゴ画像
    type: logo
    organization: 株式会社リバネスナレッジ
    source_url: https://k.lne.st/wp-content/uploads/sites/76/2022/08/lnest_knowledge-.png
    usage: 会社紹介、プレゼンテーションのクレジット表示など
    
  - id: dreamforce_2019
    filename: dreamforce_2019.png
    path: /images/dreamforce_2019.png
    title: 2019年Dreamforce登壇時の画像
    description: 吉田丈治氏が2019年のDreamforceカンファレンスで登壇した際の写真
    type: photo
    event: Dreamforce 2019
    person: 吉田丈治
    year: 2019
    source_url: https://lne.st/wp-content/uploads/2025/05/7e97b4dac4bfd3718fa55f612fcbce1c.png
    usage: 講演実績、プロフィール紹介など
    
  - id: yoshida_profile
    filename: yoshida_profile.jpg
    path: /images/yoshida_profile.jpg
    title: 吉田丈治のプロフィール画像
    description: 吉田丈治氏の公式プロフィール写真
    type: profile
    person: 吉田丈治
    source_url: https://lne.st/wp-content/uploads/2025/05/78626087_10221322607716697_5436811581734256640_n-9.jpg
    usage: プロフィールページ、自己紹介、講演者紹介など
```

## 画像の追加方法

新しい画像を追加する場合は、以下の手順に従ってください：

1. 画像ファイルを `/public/images/` ディレクトリに配置
2. `/public/images/metadata.yaml` ファイルに新しい画像のメタデータを追加
3. 必要に応じて、このAGENTS.mdファイルの「利用可能な画像一覧」セクションを更新

## プレゼンテーション作成のガイドライン

プレゼンテーション作成時には、以下のガイドラインに従ってください：

1. 適切な画像を選択し、プレゼンテーションの内容に合わせて配置
2. 画像の著作権や利用規約を尊重
3. 画像の解像度や表示サイズに注意
4. 必要に応じて画像のクレジット表示を行う

このドキュメントは、プレゼンテーション作成プロセスを効率化し、一貫性のある高品質なプレゼンテーションを生成するための参照情報として活用してください。
