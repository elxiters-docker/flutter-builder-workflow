/**
 * =========================================================================
 * KONFIGURASI BOT BUILD FLUTTER & WEB2APK
 * Atur Token Telegram, Channel ID, dan Akses GitHub di sini
 * =========================================================================
 */

module.exports = {
  // Token Bot dari @BotFather
  BOT_TOKEN: process.env.BOT_TOKEN || '8903285716:AAFqZnHovKkko4Hjh1dAmj0C4v1w9-PONKE',

  // Username bot (tanpa @) untuk link tombol
  BOT_USERNAME: process.env.BOT_USERNAME || 'elxzbuildbot',

  // ID Pemilik/Admin Bot (Array String ID Telegram)
  ADMIN_IDS: (process.env.ADMIN_IDS || '7571009414,7571009414').split(','),

  // ID Channel untuk Log Aktivitas User (Pastikan diawali -100 jika supergroup/channel)
  // Contoh: '-1002345678901'
  CHANNEL_ACTIVITY_ID: process.env.CHANNEL_ACTIVITY_ID || '-1003349859994',

  // ID Channel untuk Live Build Monitor (Menampilkan loading, compiling, dan sukses centang hijau)
  CHANNEL_MONITOR_ID: process.env.CHANNEL_MONITOR_ID || '-1003349859994',

  // ==========================================
  // WAJIB VERIFIKASI 3 CHANNEL (FORCE-SUB GATEWAY)
  // User wajib join ke 3 channel ini untuk membuka fitur build APK!
  // Catatan: Pastikan Bot ditambahkan sebagai Admin di channel ini.
  // ==========================================
  REQUIRED_CHANNELS: [
    {
      id: process.env.CHANNEL_1_ID || '@elxzchannel',
      name: 'Channel Update & Info NikaProject',
      link: 'https://t.me/elxzchannel'
    },
    {
      id: process.env.CHANNEL_2_ID || '@informasichnlel',
      name: 'Channel Live Monitor Build Realtime',
      link: 'https://t.me/informasichnlel'
    },
    {
      id: process.env.CHANNEL_3_ID || '@informasipenukaranell',
      name: 'Channel Log Aktivitas & Notifikasi',
      link: 'https://t.me/informasipenukaranell'
    }
  ],

  // Banner Utama Bot (Tampilan "WEB2APK TIRZZ" / Cyberpunk Banner)
  BANNER_URL: process.env.BANNER_URL || 'https://files.catbox.moe/e1j1zy.jpg',

  // Link Kontak jika user klik 'Buy Credit'
  OWNER_CONTACT_URL: process.env.OWNER_CONTACT_URL || 'https://t.me/elnicholl',

  // ==========================================
  // KONFIGURASI GITHUB ACTIONS (BUILD BIASA)
  // ==========================================
  GITHUB_OWNER: process.env.GITHUB_OWNER || 'elxiters-docker',
  GITHUB_REPO: process.env.GITHUB_REPO || 'flutter-builder-workflow',
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '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',

  // ==========================================
  // KONFIGURASI GITHUB ACTIONS (BUILD GENETIK)
  // (Menggunakan token & repository terpisah agar antrian independen)
  // ==========================================
  GENETIK_GITHUB_OWNER: process.env.GENETIK_GITHUB_OWNER || 'elxiters-docker',
  GENETIK_GITHUB_REPO: process.env.GENETIK_GITHUB_REPO || 'flutter-builder-workflow',
  GENETIK_GITHUB_TOKEN: process.env.GENETIK_GITHUB_TOKEN || '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',

  // Google Gemini API Key (Opsional: untuk AI Rombak / Fix Error Kode .dart)
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || ''
};
