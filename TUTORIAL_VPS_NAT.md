# 🚀 PANDUAN LENGKAP SETUP BOT DI VPS & GITHUB ACTIONS

Dokumentasi ini menjelaskan solusi lengkap untuk mengatasi masalah build APK tidak jalan, log monitor tidak muncul di channel, dan cara mendapatkan file APK real yang langsung dapat diinstall tanpa pesan "Gagal mengurai paket".

---

## 1. Mengapa Sebelumnya Tidak Bisa Build APK Real?
1. **Kurangnya SDK di VPS**: Server VPS murah (RAM 1GB / NAT) tidak sanggup menjalankan compiler Android Gradle yang membutuhkan RAM minimal 4GB dan Android SDK 34.
2. **Solusi Benar**: Kompilasi diserahkan ke **GitHub Actions Runner (Gratis, RAM 7GB, CPU Cepat)**. Bot Telegram cukup memicu GitHub Workflow dan mengunduh kembali file `.apk` yang sudah di-compile.
3. **Penyebab Gagal Mengurai Paket**:
   - `minSdkVersion` project Flutter terlalu tinggi.
   - APK tidak ter-tanda tangani (unsigned) atau terpotong saat proses download.
   - Di file workflow baru kami, telah ditambahkan **Auto-Fixer** yang otomatis men-set `minSdkVersion 21` dan menginject namespace Gradle yang valid!

---

## 2. Cara Dapatkan Token GitHub & Konfigurasi Repo
1. Buka [GitHub Settings -> Developer Settings -> Personal access tokens (Tokens classic)](https://github.com/settings/tokens).
2. Klik **Generate new token (classic)**.
3. Centang izin:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
4. Copy token tersebut (contoh: `ghp_xxxxxx`).
5. Masukkan ke file `config.js` pada variabel `GITHUB_TOKEN`.

---

## 3. Konfigurasi ID Channel Telegram
Pastikan bot sudah dijadikan **ADMIN** dengan hak izin kirim pesan di kedua channel:
1. **Channel Live Monitor** (Contoh ID: `-1002019283745`) -> Masukkan ke `CHANNEL_MONITOR_ID`.
2. **Channel Aktivitas Bot** (Contoh ID: `-1002019283746`) -> Masukkan ke `CHANNEL_ACTIVITY_ID`.

*Tips: Gunakan bot `@userinfobot` atau `@getmyid_bot` untuk melihat ID channel yang tepat (harus diawali `-100`).*

---

## 4. Cara Menjalankan di VPS (Ubuntu / Debian / NAT)
```bash
# 1. Update paket sistem
sudo apt update && sudo apt upgrade -y
sudo apt install nodejs npm git unzip -y

# 2. Pasang PM2 agar bot berjalan terus 24 jam di background
sudo npm install -g pm2

# 3. Masuk ke folder bot dan install dependencies
cd flutter-build-bot
npm install

# 4. Jalankan bot dengan PM2
pm2 start index.js --name "flutter-bot"
pm2 save
pm2 startup
```

Bot Anda sekarang aktif 24 jam dan siap membuild APK asli!
