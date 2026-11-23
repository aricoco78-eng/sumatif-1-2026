import { Question } from '../types';
import pizzaFractionImg from '../assets/images/pizza_fraction_slices_1795405439649.jpg';
import cookingOilImg from '../assets/images/cooking_oil_bottles_1795405439064.jpg';
import ribbonCraftImg from '../assets/images/ribbon_craft_rolls_1795405439460.jpg';
import fruitMarketImg from '../assets/images/fruit_market_scale_1795405439506.jpg';
import gardenWateringImg from '../assets/images/garden_watering_pitcher_1795405439661.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN A: PILIHAN GANDA (25 SOAL)
  // ============================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    text: 'Ani membantu ibu membuat kue tradisional di dapur. Setiap satu loyang kue membutuhkan 3/4 kg tepung terigu. Jika Ani membuat 6 loyang kue yang sama, berapa kilogram tepung terigu yang dibutuhkan seluruhnya?',
    options: [
      { id: 'A', text: '3 1/2 kg' },
      { id: 'B', text: '4 1/4 kg' },
      { id: 'C', text: '4 1/2 kg' },
      { id: 'D', text: '5 1/4 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kebutuhan tepung seluruhnya = 6 × 3/4 kg = 18/4 kg.\nDisederhanakan menjadi pecahan campuran: 18 ÷ 4 = 4 sisa 2, sehingga 4 2/4 = 4 1/2 kg.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi perkalian pecahan 5/8 × 24 adalah...',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '15' },
      { id: 'C', text: '18' },
      { id: 'D', text: '20' },
    ],
    correctAnswer: 'B',
    explanation:
      '5/8 × 24 = 5 × (24 ÷ 8) = 5 × 3 = 15.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    imageUrl: pizzaFractionImg,
    imageCaption: 'Ilustrasi 1 loyang pizza dipotong menjadi 8 bagian sama besar (6 potong di papan kayu dan 2 potong di piring).',
    text: 'Perhatikan gambar potongan pizza di atas papan kayu dan piring! Satu loyang pizza utuh dipotong menjadi 8 bagian sama besar. Sebanyak 6 potong (3/4 bagian) masih berada di atas papan kayu dan 2 potong telah dipindahkan ke piring. Jika Ibu menyiapkan 5 loyang pizza dengan sisa di atas papan kayu masing-masing sebanyak 3/4 bagian seperti pada gambar, berapa loyang total pizza yang masih berada di atas papan kayu?',
    options: [
      { id: 'A', text: '3 1/4 loyang' },
      { id: 'B', text: '3 1/2 loyang' },
      { id: 'C', text: '3 3/4 loyang' },
      { id: 'D', text: '4 1/4 loyang' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bagian pizza pada 1 papan kayu = 6/8 = 3/4 loyang.\nUntuk 5 loyang dengan kondisi sama = 5 × 3/4 = 15/4 = 3 3/4 loyang.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari perkalian pecahan 3/5 × 10/9 dalam bentuk pecahan paling sederhana adalah...',
    options: [
      { id: 'A', text: '1/3' },
      { id: 'B', text: '2/3' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '4/5' },
    ],
    correctAnswer: 'B',
    explanation:
      '3/5 × 10/9 = (3 × 10) / (5 × 9) = 30/45.\nBagi pembilang dan penyebut dengan FPB(30, 45) = 15, sehingga diperoleh 2/3.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Pak Wayan memiliki sebidang kebun seluas 1 1/2 hektare. Sebanyak 2/3 bagian dari kebun tersebut akan ditanami padi unggul. Berapa hektare luas kebun Pak Wayan yang ditanami padi?',
    options: [
      { id: 'A', text: '3/4 hektare' },
      { id: 'B', text: '1 hektare' },
      { id: 'C', text: '1 1/4 hektare' },
      { id: 'D', text: '1 1/3 hektare' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas kebun yang ditanami padi = 2/3 × 1 1/2 hektare = 2/3 × 3/2 = 6/6 = 1 hektare.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Setiap hari seekor sapi perah menghabiskan 2 2/5 kg pakan konsentrat. Berapa kilogram pakan konsentrat yang dihabiskan sapi tersebut selama 5 hari berturut-turut?',
    options: [
      { id: 'A', text: '10 kg' },
      { id: 'B', text: '11 kg' },
      { id: 'C', text: '12 kg' },
      { id: 'D', text: '14 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Total pakan 5 hari = 5 × 2 2/5 kg.\nUbah pecahan campuran ke pecahan biasa: 2 2/5 = 12/5.\nMaka 5 × 12/5 = 12 kg.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    text: 'Sebuah taman bacaan di halaman sekolah berbentuk persegi panjang dengan panjang 3 1/3 meter dan lebar 2 2/5 meter. Berapakah luas taman bacaan tersebut?',
    options: [
      { id: 'A', text: '6 m²' },
      { id: 'B', text: '7 1/2 m²' },
      { id: 'C', text: '8 m²' },
      { id: 'D', text: '8 1/2 m²' },
    ],
    correctAnswer: 'C',
    explanation:
      'Luas persegi panjang = panjang × lebar = 3 1/3 × 2 2/5.\nUbah menjadi pecahan biasa: 10/3 × 12/5 = 120/15 = 8 m².',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    text: 'Siti memiliki uang tabungan sebesar Rp120.000,00. Sebanyak 1/4 bagian uangnya digunakan untuk membeli buku tulis, kemudian 2/3 dari sisa uangnya dibelikan tas sekolah baru. Berapakah harga tas sekolah yang dibeli Siti?',
    options: [
      { id: 'A', text: 'Rp40.000,00' },
      { id: 'B', text: 'Rp50.000,00' },
      { id: 'C', text: 'Rp60.000,00' },
      { id: 'D', text: 'Rp80.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Uang untuk membeli buku = 1/4 × Rp120.000,00 = Rp30.000,00.\nSisa uang = Rp120.000,00 - Rp30.000,00 = Rp90.000,00.\nHarga tas sekolah = 2/3 × Rp90.000,00 = Rp60.000,00.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Ibu membuat 12 gelas jus mangga untuk acara kerja bakti. Setiap gelas berisi 3/8 liter jus mangga. Berapa liter total jus mangga yang dibuat Ibu?',
    options: [
      { id: 'A', text: '4 liter' },
      { id: 'B', text: '4 1/2 liter' },
      { id: 'C', text: '5 liter' },
      { id: 'D', text: '5 1/4 liter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total jus mangga = 12 × 3/8 liter = 36/8 liter.\nSederhanakan dengan membagi pembilang dan penyebut dengan 4 menjadi 9/2 = 4 1/2 liter.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi pembagian 6 ÷ 3/4 adalah...',
    options: [
      { id: 'A', text: '4 1/2' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'C',
    explanation:
      'Membagi dengan pecahan sama dengan mengalikan dengan kebalikannya:\n6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sedang',
    imageUrl: ribbonCraftImg,
    imageCaption: 'Gulungan pita satin merah dan biru beserta penggaris dan gunting untuk kegiatan prakarya.',
    text: 'Perhatikan gambar gulungan pita satin, penggaris, dan gunting prakarya di atas meja kelas! Dalam tugas keterampilan kelas 6, Dayu memiliki pita satin merah sepanjang 4 1/2 meter. Pita tersebut akan dipotong-potong sama panjang dengan ukuran 3/4 meter setiap potongnya untuk menghias kotak pensil. Berapa banyak potongan pita yang dihasilkan Dayu?',
    options: [
      { id: 'A', text: '4 potong' },
      { id: 'B', text: '5 potong' },
      { id: 'C', text: '6 potong' },
      { id: 'D', text: '8 potong' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak potongan pita = 4 1/2 ÷ 3/4.\nUbah 4 1/2 menjadi pecahan biasa = 9/2.\n9/2 ÷ 3/4 = 9/2 × 4/3 = 36/6 = 6 potong.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    text: 'Ibu memiliki 4/5 liter sirup jeruk yang akan dituangkan sama banyak ke dalam 4 buah gelas. Berapa liter isi sirup pada setiap gelas?',
    options: [
      { id: 'A', text: '1/5 liter' },
      { id: 'B', text: '2/5 liter' },
      { id: 'C', text: '1/4 liter' },
      { id: 'D', text: '4/9 liter' },
    ],
    correctAnswer: 'A',
    explanation:
      'Isi tiap gelas = 4/5 ÷ 4 = 4/5 × 1/4 = 4/20 = 1/5 liter.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi pembagian pecahan 5/6 ÷ 2/3 adalah...',
    options: [
      { id: 'A', text: '5/9' },
      { id: 'B', text: '10/18' },
      { id: 'C', text: '1 1/4' },
      { id: 'D', text: '1 1/2' },
    ],
    correctAnswer: 'C',
    explanation:
      '5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12.\nDisederhanakan (dibagi 3): 5/4 = 1 1/4.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sedang',
    imageUrl: cookingOilImg,
    imageCaption: 'Gelas ukur berisi minyak goreng keemasan beserta beberapa botol kaca kecil di dapur.',
    text: 'Perhatikan gambar gelas ukur berisi minyak goreng dan botol-botol kecil di dapur! Ibu memiliki persediaan 3 1/2 liter minyak goreng yang akan dituangkan sama banyak ke dalam botol-botol kecil berkapasitas 1/4 liter setiap botolnya. Berapa banyak botol kecil yang dibutuhkan Ibu agar seluruh minyak goreng habis tertuang?',
    options: [
      { id: 'A', text: '10 botol' },
      { id: 'B', text: '12 botol' },
      { id: 'C', text: '14 botol' },
      { id: 'D', text: '16 botol' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak botol yang dibutuhkan = 3 1/2 ÷ 1/4.\nUbah 3 1/2 menjadi 7/2.\n7/2 ÷ 1/4 = 7/2 × 4/1 = 28/2 = 14 botol.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Pak Kadek memanen 7 1/2 kg buah mangga harum manis dari kebunnya. Seluruh mangga tersebut akan dikemas ke dalam kantong plastik berkapasitas 1 1/4 kg per kantong. Berapa banyak kantong plastik yang diperlukan Pak Kadek?',
    options: [
      { id: 'A', text: '5 kantong' },
      { id: 'B', text: '6 kantong' },
      { id: 'C', text: '7 kantong' },
      { id: 'D', text: '8 kantong' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak kantong = 7 1/2 ÷ 1 1/4 = 15/2 ÷ 5/4.\n= 15/2 × 4/5 = 60/10 = 6 kantong.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Sebatang kawat tembaga sepanjang 5 1/4 meter dipotong menjadi 7 bagian sama panjang untuk percobaan IPA rangkaian listrik sederhana. Berapa meter panjang setiap potongan kawat tersebut?',
    options: [
      { id: 'A', text: '1/2 meter' },
      { id: 'B', text: '2/3 meter' },
      { id: 'C', text: '3/4 meter' },
      { id: 'D', text: '4/5 meter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Panjang tiap potongan = 5 1/4 ÷ 7 = 21/4 × 1/7 = 21/28.\nSederhanakan dengan membagi pembilang dan penyebut dengan 7 = 3/4 meter.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sukar',
    text: 'Seorang atlet lari menempuh jarak 3 3/4 km dalam waktu 1/2 jam saat berlatih pagi. Jika kecepatan berlarinya tetap, berapa kilometer jarak yang dapat ditempuh pelari tersebut dalam waktu 1 jam?',
    options: [
      { id: 'A', text: '6 1/2 km' },
      { id: 'B', text: '7 km' },
      { id: 'C', text: '7 1/2 km' },
      { id: 'D', text: '8 1/4 km' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kecepatan = Jarak ÷ Waktu = 3 3/4 ÷ 1/2 = 15/4 × 2/1 = 30/4 = 15/2 = 7 1/2 km dalam 1 jam.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Mudah',
    text: 'Bentuk bilangan desimal dari pecahan 7/8 adalah...',
    options: [
      { id: 'A', text: '0,625' },
      { id: 'B', text: '0,750' },
      { id: 'C', text: '0,825' },
      { id: 'D', text: '0,875' },
    ],
    correctAnswer: 'D',
    explanation:
      'Untuk mengubah pecahan 7/8 ke desimal, kalikan pembilang dan penyebut dengan 125:\n(7 × 125) / (8 × 125) = 875/1.000 = 0,875.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Mudah',
    text: 'Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,65 adalah...',
    options: [
      { id: 'A', text: '11/20' },
      { id: 'B', text: '13/20' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '7/10' },
    ],
    correctAnswer: 'B',
    explanation:
      '0,65 = 65/100.\nBagi pembilang dan penyebut dengan FPB(65, 100) = 5, maka diperoleh 13/20.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Urutan bilangan pecahan dan desimal berikut mulai dari yang terkecil hingga terbesar yang paling tepat adalah...',
    options: [
      { id: 'A', text: '65% ; 0,7 ; 0,75 ; 4/5' },
      { id: 'B', text: '0,7 ; 65% ; 0,75 ; 4/5' },
      { id: 'C', text: '65% ; 0,75 ; 0,7 ; 4/5' },
      { id: 'D', text: '4/5 ; 0,75 ; 0,7 ; 65%' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ubah seluruh bilangan ke bentuk desimal dua angka di belakang koma:\n• 65% = 0,65\n• 0,7 = 0,70\n• 0,75 = 0,75\n• 4/5 = 0,80\nUrutan dari terkecil ke terbesar: 65% ; 0,7 ; 0,75 ; 4/5.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Perkalian Bilangan Desimal',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi perkalian bilangan desimal 2,4 × 1,5 adalah...',
    options: [
      { id: 'A', text: '3,2' },
      { id: 'B', text: '3,4' },
      { id: 'C', text: '3,6' },
      { id: 'D', text: '3,8' },
    ],
    correctAnswer: 'C',
    explanation:
      '2,4 × 1,5 = (24 × 15) / 100 = 360 / 100 = 3,6.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Perkalian Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Ibu membeli 4 bungkus gula pasir dengan berat masing-masing 0,75 kg untuk persiapan membuat kue hari raya. Berapa kilogram total berat gula pasir yang dibeli Ibu?',
    options: [
      { id: 'A', text: '2,5 kg' },
      { id: 'B', text: '3,0 kg' },
      { id: 'C', text: '3,25 kg' },
      { id: 'D', text: '3,5 kg' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total berat gula pasir = 4 × 0,75 kg = 3,00 kg = 3,0 kg.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Pembagian Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Hasil dari operasi pembagian bilangan desimal 7,2 ÷ 0,6 adalah...',
    options: [
      { id: 'A', text: '1,2' },
      { id: 'B', text: '10' },
      { id: 'C', text: '12' },
      { id: 'D', text: '14' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kalikan pembilang dan penyebut dengan 10 agar menjadi bilangan bulat:\n7,2 ÷ 0,6 = 72 ÷ 6 = 12.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Pembagian Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Sebuah galon air minum berisi 18,75 liter air mineral. Seluruh air tersebut akan dikemas ulang ke dalam botol-botol berukuran 1,25 liter. Berapa banyak botol yang dapat terisi penuh?',
    options: [
      { id: 'A', text: '12 botol' },
      { id: 'B', text: '14 botol' },
      { id: 'C', text: '15 botol' },
      { id: 'D', text: '16 botol' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak botol = 18,75 ÷ 1,25.\nKalikan kedua bilangan dengan 100: 1.875 ÷ 125 = 15 botol.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Operasi Campuran Pecahan & Desimal',
    difficulty: 'Sukar',
    text: 'Bapak membeli 6,4 liter bensin untuk sepeda motornya. Sebanyak 3/8 bagian bensin digunakan untuk perjalanan ke kota, dan sisanya digunakan untuk perjalanan selama 4 hari dengan pemakaian yang sama banyak tiap harinya. Berapa liter bensin yang digunakan setiap hari selama 4 hari tersebut?',
    options: [
      { id: 'A', text: '0,8 liter' },
      { id: 'B', text: '1,0 liter' },
      { id: 'C', text: '1,2 liter' },
      { id: 'D', text: '1,6 liter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bensin ke kota = 3/8 × 6,4 liter = 3 × 0,8 = 2,4 liter.\nSisa bensin = 6,4 - 2,4 = 4,0 liter.\nPemakaian per hari selama 4 hari = 4,0 ÷ 4 = 1,0 liter.',
  },

  // ============================================================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS / PGK (2 SOAL, MASING-MASING 3 OPSI)
  // ============================================================================
  {
    id: 26,
    type: 'pgk',
    topic: 'Bilangan Desimal & Perkalian Pecahan',
    difficulty: 'Sedang',
    imageUrl: fruitMarketImg,
    imageCaption: 'Keranjang buah jeruk dan apel segar di samping timbangan pasar tradisional.',
    text: 'Perhatikan gambar keranjang buah jeruk, apel, dan timbangan pasar di atas meja! Pak Made membeli 2,5 kg buah jeruk dan 1 3/4 kg buah apel untuk acara keluarga. Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR? (Pilih semua pernyataan yang benar)',
    options: [
      {
        id: 'A',
        text: 'Berat buah apel yang dibeli Pak Made jika ditulis dalam bentuk bilangan desimal adalah 1,75 kg.',
      },
      {
        id: 'B',
        text: 'Total berat seluruh buah jeruk dan apel yang dibeli Pak Made adalah 4,25 kg.',
      },
      {
        id: 'C',
        text: 'Jika harga 1 kg jeruk adalah Rp16.000,00, maka uang yang harus dibayar Pak Made untuk seluruh jeruk adalah Rp36.000,00.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Analisis pernyataan:\n• A BENAR: 1 3/4 kg = 1 + 0,75 = 1,75 kg.\n• B BENAR: Total berat buah = 2,5 kg + 1,75 kg = 4,25 kg.\n• C SALAH: Harga 2,5 kg jeruk = 2,5 × Rp16.000,00 = Rp40.000,00 (bukan Rp36.000,00).',
  },
  {
    id: 27,
    type: 'pgk',
    topic: 'Pembagian & Perkalian Pecahan-Desimal',
    difficulty: 'Sukar',
    text: 'Persediaan tepung terigu di kantin sekolah sebanyak 4 1/2 kg akan digunakan untuk membuat kue. Setiap satu resep kue memerlukan 0,75 kg tepung terigu. Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR? (Pilih semua pernyataan yang benar)',
    options: [
      {
        id: 'A',
        text: 'Persediaan tepung terigu sebanyak 4 1/2 kg sama nilainya dengan 4,5 kg.',
      },
      {
        id: 'B',
        text: 'Jika satu resep kue memerlukan 0,75 kg (atau 3/4 kg) tepung, maka seluruh persediaan tepung cukup untuk membuat tepat 6 resep kue.',
      },
      {
        id: 'C',
        text: 'Jika petugas kantin hanya memakai 2/3 bagian dari seluruh persediaan tepung, maka tepung yang terpakai adalah 2,5 kg.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Analisis pernyataan:\n• A BENAR: 4 1/2 kg = 4 + 0,5 = 4,5 kg.\n• B BENAR: Banyak resep = 4,5 ÷ 0,75 = 9/2 ÷ 3/4 = 9/2 × 4/3 = 6 resep kue.\n• C SALAH: 2/3 × 4,5 kg = 3,0 kg (bukan 2,5 kg).',
  },

  // ============================================================================
  // BAGIAN C: PILIHAN GANDA KOMPLEKS KATEGORI (3 SOAL, MASING-MASING 3 PERNYATAAN B/S)
  // ============================================================================
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Perkalian & Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Seorang penjahit membeli 1 gulung kain batik sepanjang 12 1/2 meter. Sebanyak 2/5 bagian dari kain tersebut digunakan untuk menjahit kemeja seragam, dan sisanya akan dipotong menjadi beberapa taplak meja yang masing-masing membutuhkan 1 1/2 meter kain. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Panjang kain yang digunakan untuk menjahit kemeja seragam adalah 5 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sisa kain yang tersedia untuk membuat taplak meja adalah 7,5 meter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak taplak meja yang dapat dibuat dari sisa kain tersebut adalah 4 buah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kain untuk kemeja seragam = 2/5 × 12 1/2 = 2/5 × 25/2 = 5 meter (BENAR).\n2. Sisa kain = 12,5 - 5 = 7,5 meter (BENAR).\n3. Banyak taplak meja = 7,5 ÷ 1,5 = 5 buah taplak meja (SALAH, karena pada pernyataan tertulis 4 buah).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Pembagian & Perkalian Pecahan-Desimal',
    difficulty: 'Sedang',
    imageUrl: gardenWateringImg,
    imageCaption: 'Gelas ukur berisi cairan, gembor hijau penyiram tanaman, dan 4 pot tanaman hias di kebun sekolah.',
    text: 'Perhatikan gambar gelas ukur, gembor penyiram tanaman, dan 4 pot tanaman di kebun sekolah! Dalam kegiatan penghijauan kelas 6, siswa menyiapkan 3,6 liter larutan pupuk cair yang dibagi sama rata untuk menyiram 4 pot tanaman pada pagi hari. Pada sore hari, setiap pot disiram lagi dengan 3/4 liter air murni. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Volume larutan pupuk cair yang diterima oleh setiap pot tanaman pada pagi hari adalah 0,9 liter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Total air murni yang digunakan untuk menyiram seluruh 4 pot tanaman pada sore hari adalah 3 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah total cairan (pupuk cair dan air murni) yang diterima setiap pot dalam satu hari adalah 1,5 liter.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pupuk cair tiap pot = 3,6 liter ÷ 4 pot = 0,9 liter (BENAR).\n2. Total air murni sore hari untuk 4 pot = 4 × 3/4 liter = 3 liter (BENAR).\n3. Total cairan tiap pot dalam 1 hari = 0,9 liter + 3/4 liter = 0,9 + 0,75 = 1,65 liter (SALAH, pada pernyataan tertulis 1,5 liter).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Operasi Bilangan Desimal & Pecahan',
    difficulty: 'Sukar',
    text: 'Diketahui dua bilangan pecahan dan desimal, yaitu P = 2 1/4 dan Q = 0,75. Tentukan kebenaran dari hasil operasi hitung pada masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Hasil perkalian P × Q adalah 1,6875.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil pembagian P ÷ Q adalah 3.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bentuk pecahan paling sederhana dari hasil Q ÷ P adalah 1/2.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Diketahui P = 2 1/4 = 2,25 = 9/4 dan Q = 0,75 = 3/4.\n1. P × Q = 2,25 × 0,75 = 1,6875 (BENAR).\n2. P ÷ Q = 2,25 ÷ 0,75 = 3 (BENAR).\n3. Q ÷ P = (3/4) ÷ (9/4) = 3/4 × 4/9 = 3/9 = 1/3 (SALAH, tertulis 1/2).',
  },
];
