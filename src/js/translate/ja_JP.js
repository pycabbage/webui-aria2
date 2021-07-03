// This text is a template of translation list.

// pre: ll_CC, locale name, examples: en_US, zh_CN
// 1. Copy and rename to ll_CC.js, translate these words.
// 2. in js/init.js:
//    Add '.translations('ll_CC', translations.ll_CC)' before '.determinePreferredLanguage();'
// 3. in index.html
//    Add '<script src="js/translate/ll_CC.js"></script>' after '<script src="js/libs/angular-translate.js"></script>'
// 4. To add Language to changeLanguage button, see "{{ 'Language' | translate }}" in index.html.
//    flag-icon usage:
//    https://github.com/lipis/flag-icon-css
// 5. Browser determining preferred language automatically.
//    http://angular-translate.github.io/docs/en/#/guide/07_multi-language

if (typeof translations == "undefined") {
  translations = {};
}

translations.ja_JP = {
  // replace en_US to ll_CC, examples: zh_CN, de_AT.
  // header
  Search: "検索",
  // Nav menu
  Add: "追加",
  "By URIs": "URIを追加",
  "By Torrents": "トレントファイルを追加",
  "By Metalinks": "Metalinkを追加",
  Manage: "管理",
  "Pause All": "全て一時停止",
  "Resume Paused": "全て再開",
  "Purge Completed": "ダウンロード済みを削除を削除",
  "Shutdown Server": "サーバーを停止",
  Settings: "設定",
  "Connection Settings": "接続設定",
  "Global Settings": "設定",
  "Server info": "サーバー情報",
  "About and contribute": "WebUI-Aria2について",
  "Toggle navigation": "",
  // body
  // nav side bar
  Miscellaneous: "その他",
  "Global Statistics": "ネットワーク速度",
  About: "WebUI-Aria2について",
  Displaying: "Displaying",
  of: "of",
  downloads: "downloads",
  Language: "言語",
  // download filters
  "Download Filters": "フィルター",
  Running: "ダウンロード中",
  Active: "アクティブ",
  Waiting: "待機",
  Complete: "完了",
  Error: "エラー",
  Paused: "一時停止",
  Removed: "削除済み",
  "Hide linked meta-data": "メタデータを非表示",
  Toggle: "切り替え",
  "Reset filters": "フィルターをリセット",
  // download status
  Verifing: "検証中",
  "Verify Pending": "検証を保留中",
  // starred properties
  "Quick Access Settings": "簡易設定",
  Save: "保存",
  "Save settings": "保存",
  "Currently no download in line to display, use the": "現在表示するダウンロードはありません。",
  "download button to start downloading files!": "ダウンロードボタンをクリックしてダウンロードを開始してください",
  Peers: "ピア",
  "More Info": "詳細情報",
  Remove: "削除",
  "# of": "# of",
  Length: "長さ",
  // modals
  "Add Downloads By URIs": "URIで追加",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "各URIを複数行に入力することで、複数のダウンロード（ファイル）を同時に追加できます。",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "*同じ*ファイルに複数のURI（ミラー）を追加することもできます。 これを行うには、URIをスペースで区切ります。",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "URIはHTTP(HTTPS)/FTP/BitTorrent-Magnetにすることができます。",
  "Download settings": "ダウンロード設定",
  "Advanced settings": "詳細設定",
  Cancel: "キャンセル",
  Start: "開始",
  Choose: "選択",
  "Quick Access (shown on the main page)": "クイックアクセス（メインページに表示）",
  // add torrent modal
  "Add Downloads By Torrents": "トレントファイルで追加",
  "- Select the torrent from the local filesystem to start the download.": "ローカルファイルシステムからトレントファイルを選択してダウンロードを開始します。",
  "- You can select multiple torrents to start multiple downloads.": "複数のトレントを選択して、複数のダウンロードを開始できまトレントファイルを選択す。",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.": "BitTorrent-Magnet URLを追加するには、[URIで追加]オプションを使用してそこに追加します。を選択す。",
  "Select Torrents": "複数のトレントファイルを選択",
  "Select a Torrent": "トレントファイルを選択",
  // add metalink modal
  "Add Downloads By Metalinks": "Metalinksで追加",
  "Select Metalinks": "Metalinksを選択",
  "- Select the Metalink from the local filesystem to start the download.": "ローカルファイルシステムからMetalinkを選択して、ダウンロードを開始します。",
  "- You can select multiple Metalinks to start multiple downloads.": "複数のMetalinksを選択して、複数のダウンロードを開始できます。",
  "Select a Metalink": "Metalinksを選択",
  // select file modal
  "Choose files to start download for": "ダウンロードを開始するファイルを選択",
  "Select to download": "Select to download",
  // settings modal
  "Aria2 RPC host and port": "Aria2 RPCのホスト名とポート",
  "Enter the host": "ホスト名",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Aria2 RPCが実行されているサーバーのIPアドレスまたはDNS名を入力します（デフォルト：localhost）",
  "Enter the port": "ポート",
  "Aria2 RPCが実行されているサーバーのポートを入力します（デフォルト：6800）": "",
  "Enter the RPC path": "RPCパス",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)": "Aria2 RPCエンドポイントのパスを入力します（デフォルト：/jsonrpc）",
  "SSL/TLS encryption": "SSL/TLS暗号化",
  "Enable SSL/TLS encryption": "SSL/TLSを有効化",
  "Enter the secret token (optional)": "シークレットトークン（オプション）",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)": "シークレットトークンを入力（認証が無効の場合は空白）",
  "Enter the username (optional)": "ユーザー名（オプション）",
  "Enter the Aria2 RPC username (empty if authentication not enabled)": "ユーザー名を入力（認証が無効の場合は空白）",
  "Enter the password (optional)": "パスワード（オプション）",
  "Enter the Aria2 RPC password (empty if authentication not enabled)": "パスワードを入力（認証が無効の場合は空白）",
  "Enter base URL (optional)": "Base URL",
  "Direct Download": "直接ダウンロード",
  "If supplied, links will be created to enable direct download from the Aria2 server.": "指定されている場合、aria2サーバーから直接ダウンロードできるようにするためのリンクが作成されます。",
  "(Requires appropriate webserver to be configured.)": "（適切なWebサーバーを構成する必要があります。）",
  "Save Connection configuration": "接続設定を保存",
  Filter: "フィルター",
  // server info modal
  "Aria2 server info": "aria2サーバー情報",
  "Aria2 Version": "aria2バージョン",
  "Features Enabled": "有効化された実験的機能",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to": "プロジェクトの最新バージョンをダウンロードしたり、問題を追加したり、貢献したりするには、以下に進んでください：",
  "Or you can open the latest version in the browser through": "または、ブラウザで最新バージョンを開くことができます。",
  Close: "選択",
  // labels
  "Download status": "ダウンロード状態",
  "Download Speed": "ダウンロード速度",
  "Upload Speed": "アップロード速度",
  "Estimated time": "残り時間",
  "Download Size": "サイズ",
  Downloaded: "完了",
  Progress: "進捗",
  "Download Path": "ダウンロード先",
  Uploaded: "アップロード",
  "Download GID": "GID",
  "Number of Pieces": "ピース数",
  "Piece Length": "ピースの長さ",

  //alerts
  "The last connection attempt was unsuccessful. Trying another configuration": "接続できませんでした。再試行しています。",
  "Oh Snap!": "エラー",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "aria2 RPCサーバーに接続できませんでした。10秒後に再試行します。[設定]→[接続設定]に移動して、接続設定を確認してください。",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "aria2 RPCサーバーへの接続中に認証に失敗しました。10秒後に再試行します。 [設定]→[接続設定]に移動して、認証の設定を確認してください。",
  "Successfully connected to Aria2 through its remote RPC …": "aria2に接続しました",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "リモートRPCを介してaria2に接続しましたが、接続はまだ安全ではありません。完全なセキュリティを確保するには、aria2の起動時に認証シークレットトークンを追加してみてください。（--rpc-secret）",
  "Trying to connect to aria2 using the new connection configuration": "新しい接続構成を使用してaria2に接続しています",
  // {{name}} refers to the download name, do not modify.
  "Remove {{name}} and associated meta-data?": "{{name}}と関連するメタデータを削除しますか？"
};
