# Key Test Hazırlayıcı

PDF ve fotoğraftan soru seçip test, yaprak test ve deneme sınavı hazırlamak için geliştirilmiş yerel web uygulaması.

## Özellikler

- PDF üzerinden soru kırpma
- Fotoğraf/görsel soru ekleme
- Soru editörü ve çizim aracı
- Cevap anahtarı, optik form, filigran ve kenar boşluğu ayarları
- Bölüm ayırma, açıklama kartı ve soru numarası düzenleme
- PDF olarak dışa aktarma
- GitHub Pages üzerinden mobilde ana ekrana eklenebilir PWA desteği

## Yerelde Çalıştırma

Bu klasörde aşağıdaki komutu çalıştır:

```bash
npx serve .
```

veya herhangi bir statik sunucu ile `index.html` dosyasını aç.

## GitHub Pages Yayınlama

1. GitHub'da yeni bir repo oluştur.
2. Bu klasördeki dosyaları repoya yükle.
3. GitHub repo sayfasında `Settings > Pages` bölümüne gir.
4. `Build and deployment` altında kaynak olarak `Deploy from a branch` seç.
5. Branch olarak `main`, klasör olarak `/root` seç.
6. Yayınlanan adreste uygulama otomatik olarak `outputs/soru-sinav-atolyesi/` klasörüne yönlenir.

Mobil kurulum için yayınlanan HTTPS adresini telefonda açıp tarayıcı menüsünden `Ana ekrana ekle` seç.
