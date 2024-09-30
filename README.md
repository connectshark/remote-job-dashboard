# remote-job-dashboard

直接查詢遠端工作的網站

純前端專案，串接[remotive](https://remotive.com)網站的API

<img style="width: 20px; margin: 0 4px 0 0;" src="./public/favicon64x64.ico">REMOTE JOBs

![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/remote-job-dashboard)




## 目錄

- [截圖](#截圖)
- [使用技術](#使用技術)
- [內容介紹](#內容介紹)
- [環境變數](#環境變數)
- [版權](#版權)


## 截圖

[![](/readme/cover.png)](https://remote-job-dashboard.pages.dev)

## 使用技術

- Vue
- TailwindCSS

## 內容介紹

首頁可顯示最近的3筆職缺

### `/categories`

類型頁面，對應API提供的所有職缺類型，圖片找`unsplash`的圖，點任何一種類型方塊後可以直接查詢該類型的職缺

## 環境變數

```
VITE_API_ENDPOINT=https://remotive.com/api/remote-jobs
```

## 版權

[CC-BY-SA-4.0](/LICENSE)