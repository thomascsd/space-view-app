# SpaceView App

SpaceView App is a modern web application built with Angular that allows users to explore the wonders of the universe through NASA's APIs. It provides a beautiful interface to view the Astronomy Picture of the Day and search for various space-related images.

## Features

- **Astronomy Picture of the Day (APOD):** View a daily stunning image or video along with a professional description.
- **Space Picture Library:** Browse and search for a vast collection of space images from NASA's archive.
- **Modern UI/UX:** A clean, responsive design with a warm and inviting color scheme.
- **Interactive Modals:** Detailed views for images using `@ngneat/dialog`.
- **Responsive Layout:** Optimized for both desktop and mobile viewing.

## Tech Stack

- **Framework:** Angular v21
- **Styling:** CSS
- **State Management & Logic:** RxJS
- **UI Components:** Custom components with `@ngneat/dialog` for modals
- **Data Source:** NASA Open APIs
- **Formatting:** Prettier
- **Testing:** Vitest

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- Angular CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thomascsd/space-view-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd space-view-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

- Start the development server:
  ```bash
  npm start
  ```
  Navigate to `http://localhost:4200/` in your browser.

- Build the project:
  ```bash
  npm run build
  ```

- Run tests:
  ```bash
  npm run test:vitest
  ```

---

# SpaceView App

SpaceView App 是一個使用 Angular 打造的現代化網頁應用程式，讓使用者能透過 NASA API 探索宇宙的奧妙。它提供美觀的介面，用於查看「每日天文一圖」並搜尋各種與太空相關的影像。

## 主要功能

- **每日天文一圖 (APOD)：** 查看每日更新的震撼影像或影片，並附帶專業的科學描述。
- **太空影像庫：** 瀏覽並搜尋 NASA 資料庫中龐大的太空影像收藏。
- **現代化介面設計：** 乾淨、響應式且色調溫暖宜人的視覺設計。
- **互動式視窗：** 使用 `@ngneat/dialog` 提供詳盡的影像資訊彈窗。
- **響應式佈局：** 針對桌面端與行動裝置進行優化。

## 技術棧

- **框架：** Angular v21
- **樣式：** CSS
- **狀態管理與邏輯：** RxJS
- **UI 組件：** 自定義組件，並使用 `@ngneat/dialog` 處理彈窗
- **數據來源：** NASA Open APIs
- **程式碼格式化：** Prettier
- **測試：** Vitest

## 開始使用

### 環境需求

- Node.js (建議使用最新 LTS 版本)
- Angular CLI

### 安裝步驟

1. 複製儲存庫：
   ```bash
   git clone https://github.com/thomascsd/space-view-app.git
   ```
2. 進入專案目錄：
   ```bash
   cd space-view-app
   ```
3. 安裝依賴項目：
   ```bash
   npm install
   ```

### 執行應用程式

- 啟動開發伺服器：
  ```bash
  npm start
  ```
  在瀏覽器中造訪 `http://localhost:4200/`。

- 專案打包：
  ```bash
  npm run build
  ```

- 執行測試：
  ```bash
  npm run test:vitest
  ```
