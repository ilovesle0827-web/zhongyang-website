// ============================================================
//  仲暘有限公司 - 網站設定檔
//  只要修改這個檔案，網站內容就會自動更新！
// ============================================================

const SITE_CONFIG = {

  // ----------------------------------------------------------
  //  Supabase 雲端資料庫設定
  //  請到 https://supabase.com 註冊後填入以下資料
  // ----------------------------------------------------------
  supabase: {
    url: "https://gqybaextegpuhpcxuout.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxeWJhZXh0ZWdwdWhwY3h1b3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTE4NjUsImV4cCI6MjA4ODI4Nzg2NX0.JZV2GnhjBbKqWUYz7QQL6s6H75NXB_fKbAg0mZ5AY0M",
  },

  // ----------------------------------------------------------
  //  Firebase 雲端資料庫設定（連接庫存管理系統）
  // ----------------------------------------------------------
  firebase: {
    apiKey: "AIzaSyBFKgLSC6e3-KNvleB69vXAxvPbYrGqgRk",
    authDomain: "zhongyang-inventory-a33ec.firebaseapp.com",
    projectId: "zhongyang-inventory-a33ec",
    storageBucket: "zhongyang-inventory-a33ec.firebasestorage.app",
    messagingSenderId: "465814216226",
    appId: "1:465814216226:web:a0d9cd0770bf9f83eaf47b",
  },

  // ----------------------------------------------------------
  //  公司基本資訊
  // ----------------------------------------------------------
  company: {
    name: "仲暘",                  // 公司名稱（前半）
    nameSuffix: "有限公司",          // 公司名稱（後半）
    founded: "2020",                // 成立年份
    copyright: "2024",              // 版權年份
    description: "自2020年以來，致力於提供現代化解決方案與專業照護產品。守護您的獨立生活是我們的首要任務。",
    email: "service@zhongyang.com.tw",  // 聯絡信箱
    phone: "02-1234-5678",              // 聯絡電話
  },

};
// 產品資料已移至 Supabase 雲端資料庫，請從 admin.html 後台管理
