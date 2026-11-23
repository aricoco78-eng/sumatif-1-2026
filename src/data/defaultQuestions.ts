import { Question } from '../types';
import gotongRoyongImg from '../assets/images/gotong_royong_bersih_1795407872671.jpg';
import musyawarahKelasImg from '../assets/images/musyawarah_kelas_sd_1795407873689.jpg';
import berdoaKelasImg from '../assets/images/berdoa_sebelum_belajar_1795407873007.jpg';
import tertibLaluLintasImg from '../assets/images/tertib_lalu_lintas_sd_1795407872965.jpg';
import anakKewajibanImg from '../assets/images/anak_membantu_keluarga_1795407872767.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN A: PILIHAN GANDA (30 SOAL)
  // ============================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Hubungan Nilai-Nilai Pancasila',
    difficulty: 'Mudah',
    text: 'Kelima sila dalam Pancasila merupakan satu kesatuan yang utuh dan tidak dapat dipisahkan. Sila pertama "Ketuhanan Yang Maha Esa" menjiwai dan menjadi dasar bagi sila-sila berikutnya. Contoh hubungan sila pertama dengan sila kedua dalam kehidupan sehari-hari di sekolah adalah...',
    options: [
      { id: 'A', text: 'Menghormati teman yang berbeda agama karena setiap manusia adalah ciptaan Tuhan yang bermartabat sama' },
      { id: 'B', text: 'Hanya mau berteman dan membantu teman yang memiliki keyakinan sama saja' },
      { id: 'C', text: 'Memaksakan aturan ibadah pribadi kepada seluruh teman di kelas' },
      { id: 'D', text: 'Memilih ketua kelas berdasarkan kekayaan orang tuanya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sila Ketuhanan Yang Maha Esa mendasari sila Kemanusiaan yang Adil dan Beradab. Karena meyakini Tuhan menciptakan seluruh manusia dengan martabat yang sama, kita bersikap adil, saling menghargai, dan menyayangi teman tanpa membedakan agama.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Belajar Mengamalkan Pancasila',
    difficulty: 'Mudah',
    imageUrl: berdoaKelasImg,
    imageCaption: 'Siswa sekolah dasar berdoa dengan khidmat dan tertib bersama di kelas sebelum pelajaran dimulai.',
    text: 'Perhatikan gambar siswa di ruang kelas yang sedang menundukkan kepala berdoa dengan khidmat sebelum memulai pelajaran! Sikap yang ditunjukkan oleh seluruh siswa pada gambar tersebut merupakan wujud nyata pengamalan Pancasila, terutama sila ke-...',
    options: [
      { id: 'A', text: 'Pertama (Ketuhanan Yang Maha Esa)' },
      { id: 'B', text: 'Kedua (Kemanusiaan yang Adil dan Beradab)' },
      { id: 'C', text: 'Keempat (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan)' },
      { id: 'D', text: 'Kelima (Keadilan Sosial bagi Seluruh Rakyat Indonesia)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berdoa sebelum dan sesudah belajar sesuai keyakinan masing-masing dengan tertib dan saling menghormati merupakan pengamalan sila pertama Pancasila, yaitu Ketuhanan Yang Maha Esa.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Hubungan Nilai-Nilai Pancasila',
    difficulty: 'Sedang',
    text: 'Ketika terjadi bencana banjir di desa tetangga, warga sekolah mengadakan penggalangan dana dan pakaian layak pakai untuk membantu para korban, kemudian membagikan bantuan tersebut secara merata tanpa memandang latar belakang suku maupun agama. Peristiwa ini menunjukkan hubungan erat antara nilai-nilai sila...',
    options: [
      { id: 'A', text: 'Pertama dan Keempat saja' },
      { id: 'B', text: 'Kedua (kemanusiaan), Ketiga (persatuan), dan Kelima (keadilan sosial)' },
      { id: 'C', text: 'Keempat saja tanpa kaitan dengan sila lainnya' },
      { id: 'D', text: 'Ketiga saja karena dilakukan di satu desa' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membantu korban bencana mencerminkan rasa kemanusiaan (Sila ke-2), dilakukan bersama-sama dalam persatuan (Sila ke-3), dan dibagikan secara adil merata (Sila ke-5). Hal ini membuktikan seluruh sila Pancasila saling terhubung dalam satu praktik kebaikan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Belajar Mengamalkan Pancasila',
    difficulty: 'Mudah',
    text: 'Made melihat temannya terjatuh saat bermain di halaman sekolah sehingga lututnya terluka. Tindakan pertama yang paling sesuai dengan pengamalan nilai sila kedua Pancasila adalah...',
    options: [
      { id: 'A', text: 'Menertawakannya karena kurang berhati-hati saat berlari' },
      { id: 'B', text: 'Segera menolongnya berdiri, membawanya ke UKS, dan mengobati lukanya dengan tulus' },
      { id: 'C', text: 'Membiarkannya saja agar ia belajar mandiri menyelesaikan masalahnya' },
      { id: 'D', text: 'Merekam kejadian tersebut lalu membagikannya ke grup obrolan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sila kedua Pancasila mengajarkan tenggang rasa, empati, dan kepedulian terhadap sesama manusia. Menolong teman yang terjatuh dan membawanya ke UKS merupakan wujud nyata kepedulian tersebut.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Hubungan Nilai-Nilai Pancasila',
    difficulty: 'Sedang',
    text: 'Di kelas VI terdapat siswa yang berasal dari berbagai suku bangsa dan budaya daerah di Indonesia. Agar tercipta suasana belajar yang rukun dan menyenangkan sesuai nilai sila ketiga Pancasila, sikap yang harus ditunjukkan adalah...',
    options: [
      { id: 'A', text: 'Menganggap budaya daerah sendiri paling unggul dibanding budaya teman lain' },
      { id: 'B', text: 'Berteman dengan semua siswa, mempelajari budaya daerah lain, dan menjaga persatuan' },
      { id: 'C', text: 'Membentuk kelompok belajar khusus berdasarkan asal daerah yang sama' },
      { id: 'D', text: 'Menghindari kerja kelompok dengan teman yang berbeda logat bicara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Persatuan Indonesia (Sila ke-3) terwujud apabila kita menghargai keberagaman suku dan budaya, mau berteman dengan siapa saja tanpa diskriminasi, dan menempatkan persatuan di atas kepentingan golongan.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Belajar Mengamalkan Pancasila',
    difficulty: 'Mudah',
    text: 'Perhatikan pernyataan berikut! (1) Hidup hemat dan tidak bergaya hidup mewah; (2) Menghargai hasil karya teman di kelas; (3) Bersikap adil saat membagi tugas piket kelompok. Perilaku tersebut merupakan cerminan nilai Pancasila, yaitu sila ke-...',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' },
    ],
    correctAnswer: 'D',
    explanation:
      'Hidup hemat, menghargai hasil karya orang lain, dan bersikap adil dalam pembagian tugas merupakan butir-butir pengamalan sila kelima Pancasila: Keadilan Sosial bagi Seluruh Rakyat Indonesia.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Mengamalkan Pancasila untuk Kebahagiaan Bersama',
    difficulty: 'Mudah',
    text: 'Pancasila berkedudukan sebagai pandangan hidup bangsa Indonesia. Makna Pancasila sebagai pandangan hidup bangsa adalah...',
    options: [
      { id: 'A', text: 'Pedoman atau petunjuk arah bagi seluruh rakyat Indonesia dalam bersikap dan bertingkah laku sehari-hari' },
      { id: 'B', text: 'Sekadar bacaan yang dihafalkan saat upacara bendera hari Senin saja' },
      { id: 'C', text: 'Aturan tertulis yang hanya berlaku bagi pejabat pemerintah di ibu kota' },
      { id: 'D', text: 'Hiasan dinding yang dipajang di ruang kelas tanpa perlu diterapkan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sebagai pandangan hidup bangsa (way of life), nilai-nilai Pancasila menjadi pedoman, pegangan, dan penuntun perilaku masyarakat Indonesia dalam hidup bermasyarakat, berbangsa, dan bernegara agar tercapai kebahagiaan bersama.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengamalkan Pancasila untuk Kebahagiaan Bersama',
    difficulty: 'Sedang',
    text: 'Mengapa pengamalan Pancasila dalam kehidupan sehari-hari dapat menciptakan kebahagiaan bersama?',
    options: [
      { id: 'A', text: 'Karena setiap orang dapat melakukan keinginannya sendiri tanpa memikirkan orang lain' },
      { id: 'B', text: 'Karena nilai-nilai Pancasila menumbuhkan kerukunan, keadilan, saling menolong, dan kedamaian antarwarga' },
      { id: 'C', text: 'Karena hanya kelompok tertentu saja yang mendapatkan keuntungan dan perlindungan' },
      { id: 'D', text: 'Karena seluruh warga dilarang memiliki perbedaan pendapat maupun budaya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pengamalan nilai ketuhanan, kemanusiaan, persatuan, musyawarah, dan keadilan menciptakan suasana hidup yang rukun, aman, adil, dan penuh kepedulian sehingga kebahagiaan dapat dirasakan bersama.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Mengamalkan Pancasila untuk Kebahagiaan Bersama',
    difficulty: 'Mudah',
    imageUrl: gotongRoyongImg,
    imageCaption: 'Siswa sekolah dasar bergotong royong menyapu halaman dan menyiram tanaman di taman sekolah.',
    text: 'Perhatikan gambar siswa yang sedang bergotong royong membersihkan taman dan menyiram tanaman sekolah! Manfaat utama dari membiasakan budaya gotong royong sebagai cerminan Pancasila adalah...',
    options: [
      { id: 'A', text: 'Pekerjaan berat menjadi terasa ringan, cepat selesai, dan mempererat persaudaraan' },
      { id: 'B', text: 'Siswa dapat menunda mengerjakan tugas belajar di dalam kelas' },
      { id: 'C', text: 'Hanya siswa yang bertugas piket saja yang harus bekerja membersihkan sekolah' },
      { id: 'D', text: 'Menimbulkan persaingan agar dipuji paling rajin oleh guru' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gotong royong adalah ciri khas kepribadian bangsa Indonesia sesuai nilai Pancasila (Sila ke-3 dan ke-5). Bekerja sama membuat pekerjaan berat menjadi ringan, cepat selesai, dan menumbuhkan rasa kebersamaan.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Mengajak Teman Mengamalkan Pancasila',
    difficulty: 'Sedang',
    text: 'Saat istirahat, Putu melihat beberapa temannya membuang bungkus makanan sembarangan di selokan sekolah. Cara paling bijak dan menyenangkan yang dapat dilakukan Putu untuk mengajak temannya mengamalkan Pancasila adalah...',
    options: [
      { id: 'A', text: 'Memarahi mereka dengan suara keras di depan seluruh siswa' },
      { id: 'B', text: 'Memberi contoh memungut sampah lalu mengajak mereka dengan ramah membuangnya ke tempat sampah demi kebersihan bersama' },
      { id: 'C', text: 'Ikut membuang sampah ke selokan agar dianggap setia kawan' },
      { id: 'D', text: 'Menyindir mereka di media sosial agar merasa malu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengajak teman mengamalkan Pancasila paling efektif dilakukan melalui keteladanan langsung, tutur kata yang santun, dan ajakan positif tanpa mempermalukan atau memaksa.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Mengajak Teman Mengamalkan Pancasila',
    difficulty: 'Sedang',
    text: 'Komang ingin mengajak teman-teman sekelasnya menabung sebagian uang saku untuk membantu teman yang sedang sakit. Agar ajakan Komang berhasil dan disambut baik, sikap yang sebaiknya ia lakukan adalah...',
    options: [
      { id: 'A', text: 'Menentukan iuran dalam jumlah besar dan mewajibkan semua siswa membayar' },
      { id: 'B', text: 'Menjelaskan tujuan mulia kegiatan tersebut dengan ramah dan mengajak teman berpartisipasi secara sukarela' },
      { id: 'C', text: 'Mencatat nama teman yang tidak menyumbang untuk dijauhi bersama' },
      { id: 'D', text: 'Meminta uang kepada teman tanpa memberi tahu tujuannya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengajak teman berbuat baik sesuai Pancasila dilakukan secara sukarela, penuh keikhlasan, menjelaskan manfaat kebersamaan, serta tidak memaksa kemampuan teman.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Mengamalkan Pancasila untuk Kebahagiaan Bersama',
    difficulty: 'Sedang',
    text: 'Membeli dan merasa bangga menggunakan produk kerajinan asli buatan pengrajin Indonesia merupakan bentuk pengamalan Pancasila sebagai pandangan hidup bangsa karena...',
    options: [
      { id: 'A', text: 'Menunjukkan cinta tanah air sekaligus membantu kesejahteraan ekonomi sesama warga negara' },
      { id: 'B', text: 'Produk luar negeri dilarang masuk ke seluruh wilayah Indonesia' },
      { id: 'C', text: 'Barang buatan pengrajin lokal selalu berharga paling murah' },
      { id: 'D', text: 'Agar mendapatkan hadiah penghargaan dari kepala sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mencintai produk dalam negeri mencerminkan rasa cinta tanah air (Sila ke-3) dan mendukung keadilan serta kesejahteraan ekonomi para pengrajin lokal (Sila ke-5).',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Mengenal Norma dalam Kehidupan',
    difficulty: 'Mudah',
    text: 'Aturan atau kaidah yang berisi perintah dan larangan untuk mengatur tingkah laku manusia dalam kehidupan bermasyarakat agar tercipta ketertiban dan kedamaian disebut...',
    options: [
      { id: 'A', text: 'Hobi' },
      { id: 'B', text: 'Norma' },
      { id: 'C', text: 'Cita-cita' },
      { id: 'D', text: 'Bakat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma adalah aturan atau kaidah yang disepakati bersama dalam masyarakat sebagai pedoman perilaku agar hidup tertib, aman, dan harmonis.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Mengenal Norma dalam Kehidupan',
    difficulty: 'Mudah',
    text: 'Norma yang bersumber dari hati nurani manusia tentang baik dan buruknya suatu perbuatan, serta memiliki sanksi berupa rasa penyesalan atau bersalah di dalam batin disebut...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma kesusilaan' },
      { id: 'D', text: 'Norma adat istiadat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma kesusilaan bersumber dari hati nurani manusia (seperti bersikap jujur, tidak menyontek, tidak berbohong). Pelanggarannya menimbulkan sanksi batin berupa rasa bersalah dan penyesalan.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Mengenal Norma dalam Kehidupan',
    difficulty: 'Sedang',
    text: 'Ketika berjalan melewati Bapak dan Ibu Guru di koridor sekolah, Dayu menundukkan badan sedikit sambil tersenyum dan mengucapkan salam. Perilaku Dayu tersebut merupakan penerapan dari norma...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma kesusilaan' },
      { id: 'D', text: 'Norma agama' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesopanan bersumber dari pergaulan masyarakat setempat, berkaitan dengan tata krama, unggah-ungguh, cara berbicara, menghormati orang yang lebih tua, dan bertamu.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Mudah',
    imageUrl: tertibLaluLintasImg,
    imageCaption: 'Siswa sekolah dasar menyeberang jalan dengan tertib melalui zebra cross dengan bantuan petugas penyeberang.',
    text: 'Perhatikan gambar siswa yang sedang menyeberang jalan secara tertib melalui zebra cross di depan gerbang sekolah! Menyeberang pada tempatnya dan mematuhi rambu lalu lintas merupakan bentuk kepatuhan terhadap...',
    options: [
      { id: 'A', text: 'Norma hukum yang bertujuan menjaga keselamatan bersama di jalan raya' },
      { id: 'B', text: 'Norma kesopanan yang hanya berlaku di dalam rumah' },
      { id: 'C', text: 'Keinginan pribadi siswa agar cepat sampai di toko' },
      { id: 'D', text: 'Hak istimewa yang tidak memiliki kewajiban apa pun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Peraturan lalu lintas dibuat oleh lembaga negara yang berwenang dan bersifat mengikat serta tegas (norma hukum). Mematuhi zebra cross dan arahan petugas menjaga keselamatan semua pengguna jalan.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Mengenal Norma dalam Kehidupan',
    difficulty: 'Sedang',
    text: 'Salah satu ciri khas yang membedakan norma hukum dengan norma agama, norma kesusilaan, dan norma kesopanan adalah...',
    options: [
      { id: 'A', text: 'Sanksinya hanya berupa rasa menyesal dalam hati' },
      { id: 'B', text: 'Dibuat oleh lembaga negara yang berwenang, bersifat tertulis, memaksa, dan memiliki sanksi tegas seperti denda atau pidana' },
      { id: 'C', text: 'Hanya berlaku bagi orang dewasa yang sudah bekerja saja' },
      { id: 'D', text: 'Boleh dipatuhi atau dilanggar sesuai suasana hati' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hukum bersifat tertulis, disusun oleh lembaga negara yang berwenang, mengikat seluruh warga negara tanpa terkecuali, dan sanksinya tegas serta nyata (denda, penyitaan, atau kurungan).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Hak dan Kewajiban Berbangsa dan Bernegara',
    difficulty: 'Mudah',
    text: 'Segala sesuatu yang harus kita laksanakan dengan penuh rasa tanggung jawab sesuai aturan yang berlaku disebut...',
    options: [
      { id: 'A', text: 'Hak' },
      { id: 'B', text: 'Kewajiban' },
      { id: 'C', text: 'Hadiah' },
      { id: 'D', text: 'Penghargaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kewajiban adalah segala sesuatu yang wajib atau harus dilakukan seseorang dengan penuh tanggung jawab, sedangkan hak adalah segala sesuatu yang pantas diterima atau dimiliki.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Hak dan Kewajiban Berbangsa dan Bernegara',
    difficulty: 'Sedang',
    text: 'Dalam kehidupan berbangsa dan bernegara, pelaksanaan hak dan kewajiban harus berjalan seimbang. Hubungan yang paling tepat antara kewajiban dan hak adalah...',
    options: [
      { id: 'A', text: 'Menuntut hak sebanyak-banyaknya terlebih dahulu lalu mengabaikan kewajiban' },
      { id: 'B', text: 'Melaksanakan kewajiban dengan sungguh-sungguh terlebih dahulu sebelum menuntut hak, agar hak dan kewajiban berjalan seimbang' },
      { id: 'C', text: 'Hanya melaksanakan kewajiban jika dijanjikan imbalan uang' },
      { id: 'D', text: 'Hak dimiliki oleh semua warga, sedangkan kewajiban hanya milik pemerintah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak dan kewajiban bagaikan dua sisi mata uang yang tidak terpisahkan. Mendahulukan kewajiban secara bertanggung jawab akan menjamin terpenuhinya hak diri sendiri maupun hak orang lain.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Hak dan Kewajiban Berbangsa dan Bernegara',
    difficulty: 'Sedang',
    text: 'Setiap warga negara Indonesia memiliki hak untuk mendapatkan pendidikan yang layak dan lingkungan yang bersih. Salah satu contoh kewajiban warga negara yang mendukung terwujudnya lingkungan bersih tersebut adalah...',
    options: [
      { id: 'A', text: 'Membuang sampah di sungai agar halaman rumah tetap bersih' },
      { id: 'B', text: 'Menjaga kebersihan fasilitas umum, tidak mencoret-coret dinding, dan membuang sampah pada tempatnya' },
      { id: 'C', text: 'Menunggu petugas kebersihan membersihkan seluruh lingkungan rumah kita' },
      { id: 'D', text: 'Membakar sampah plastik di tengah jalan raya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk memperoleh hak atas lingkungan yang bersih dan sehat, setiap warga negara berkewajiban menjaga kebersihan, merawat fasilitas umum, dan membuang sampah pada tempatnya.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Hak dan Kewajiban Berbangsa dan Bernegara',
    difficulty: 'Sukar',
    text: 'Bela negara dan menaati peraturan perundang-undangan merupakan kewajiban setiap warga negara. Bagi seorang siswa kelas 6 SD, wujud nyata pelaksanaan kewajiban membela negara yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Belajar dengan tekun, berprestasi, menaati tata tertib sekolah, serta menjaga kerukunan antarwarga sekolah' },
      { id: 'B', text: 'Ikut bertugas menjaga perbatasan negara bersama tentara setiap hari' },
      { id: 'C', text: 'Berhenti bersekolah agar bisa langsung bekerja mencari uang' },
      { id: 'D', text: 'Mengabaikan upacara bendera karena merasa masih anak-anak' },
    ],
    correctAnswer: 'A',
    explanation:
      'Wujud cinta tanah air dan kewajiban bernegara bagi pelajar adalah belajar tekun untuk mencerdaskan bangsa, disiplin menaati tata tertib, mengikuti upacara bendera dengan khidmat, dan menjaga persatuan.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Mengenal Kewajiban Anak',
    difficulty: 'Mudah',
    text: 'Sebagai anggota keluarga di rumah, kewajiban anak yang harus dilakukan setiap hari adalah...',
    options: [
      { id: 'A', text: 'Menghormati orang tua, membantu pekerjaan rumah sesuai kemampuan, dan menjaga kebersihan kamar' },
      { id: 'B', text: 'Meminta uang jajan berlebihan setiap berangkat ke sekolah' },
      { id: 'C', text: 'Bermain gim sepanjang hari tanpa mengenal waktu belajar' },
      { id: 'D', text: 'Menyuruh adik melakukan semua tugas merapikan rumah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kewajiban anak di rumah antara lain menghormati dan menyayangi orang tua, membantu pekerjaan ringan di rumah, belajar dengan teratur, dan menjaga kerapian kamar tidur.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Mengenal Kewajiban Anak',
    difficulty: 'Mudah',
    imageUrl: anakKewajibanImg,
    imageCaption: 'Seorang siswa berseragam sekolah dengan gembira merapikan buku pelajaran di meja belajarnya.',
    text: 'Perhatikan gambar seorang anak yang sedang menyiapkan dan merapikan buku pelajarannya di meja belajar! Perilaku tersebut menunjukkan kesadaran anak dalam melaksanakan kewajibannya di rumah dan sekolah, yaitu...',
    options: [
      { id: 'A', text: 'Belajar dengan tekun dan mempersiapkan perlengkapan sekolah secara mandiri' },
      { id: 'B', text: 'Menuntut hak mendapatkan mainan baru setiap minggu' },
      { id: 'C', text: 'Menunggu orang tua menyiapkan seluruh buku sekolahnya' },
      { id: 'D', text: 'Menumpuk buku tanpa pernah dibaca' },
    ],
    correctAnswer: 'A',
    explanation:
      'Belajar dengan rajin dan menyiapkan peralatan sekolah sendiri melatih kemandirian serta merupakan kewajiban utama anak sebagai pelajar.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Mengenal Kewajiban Anak',
    difficulty: 'Sedang',
    text: 'Di perpustakaan sekolah, setiap siswa memiliki hak untuk membaca dan meminjam buku pelajaran maupun buku cerita. Kewajiban anak yang menyertai hak tersebut adalah...',
    options: [
      { id: 'A', text: 'Menjaga ketenangan selama di perpustakaan, merawat buku agar tidak rusak, dan mengembalikannya tepat waktu' },
      { id: 'B', text: 'Membawa pulang buku perpustakaan tanpa melapor kepada petugas' },
      { id: 'C', text: 'Mencoret-coret halaman buku yang paling disukai sebagai tanda kepemilikan' },
      { id: 'D', text: 'Berbicara keras dengan teman sambil makan camilan di ruang baca' },
    ],
    correctAnswer: 'A',
    explanation:
      'Setiap hak di fasilitas sekolah selalu diikuti kewajiban menjaga ketertiban dan merawat fasilitas tersebut agar tetap dapat dinikmati oleh siswa lainnya.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Mengenal Kewajiban Anak',
    difficulty: 'Sedang',
    text: 'Apabila seorang siswa selalu datang tepat waktu ke sekolah, mengenakan seragam sesuai jadwal, dan melaksanakan tugas piket kebersihan kelas, maka dampak positif yang langsung dirasakan bersama adalah...',
    options: [
      { id: 'A', text: 'Lingkungan belajar menjadi nyaman, tertib, dan seluruh siswa memperoleh hak belajar dengan baik' },
      { id: 'B', text: 'Jam istirahat siswa menjadi berkurang setiap hari' },
      { id: 'C', text: 'Guru tidak perlu lagi mengajar di dalam kelas' },
      { id: 'D', text: 'Siswa menjadi terbebani dan tidak bisa bermain bersama teman' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pelaksanaan kewajiban piket dan disiplin waktu menciptakan ruang kelas yang bersih, tertib, dan kondusif sehingga hak setiap siswa untuk belajar dengan nyaman terpenuhi.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Mudah',
    text: 'Musyawarah adalah kegiatan membahas suatu persoalan secara bersama-sama untuk mencapai sebuah kesepakatan. Tujuan utama dari dilakukannya musyawarah adalah...',
    options: [
      { id: 'A', text: 'Menang-menangan pendapat antara kelompok mayoritas dan minoritas' },
      { id: 'B', text: 'Mencapai kata mufakat atau kesepakatan bersama yang adil bagi semua pihak' },
      { id: 'C', text: 'Menghabiskan waktu agar keputusan tidak perlu segera dibuat' },
      { id: 'D', text: 'Memaksa semua peserta menyetujui pendapat ketua kelompok' },
    ],
    correctAnswer: 'B',
    explanation:
      'Musyawarah sesuai sila keempat Pancasila bertujuan mencari kesepakatan bersama (mufakat) melalui pertimbangan akal sehat, hikmat kebijaksanaan, dan kepentingan bersama.',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Mudah',
    text: 'Dalam musyawarah menentukan tujuan karya wisata kelas 6, ternyata usulan Kadek tidak dipilih oleh forum karena sebagian besar anggota kelas memilih lokasi edukasi lain. Sikap yang paling tepat ditunjukkan oleh Kadek adalah...',
    options: [
      { id: 'A', text: 'Marah dan keluar meninggalkan ruang kelas saat itu juga' },
      { id: 'B', text: 'Menerima hasil keputusan musyawarah dengan lapang dada dan tetap ikut melaksanakan kegiatan dengan tanggung jawab' },
      { id: 'C', text: 'Menghasut teman lain agar membatalkan kegiatan karya wisata' },
      { id: 'D', text: 'Memaksa wali kelas untuk mengganti keputusan sesuai usulannya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Salah satu etika utama bermusyawarah adalah berbesar hati menerima keputusan bersama meskipun berbeda dengan usul pribadi, serta melaksanakannya dengan ikhlas dan tanggung jawab.',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Sedang',
    text: 'Ketika ada teman yang sedang menyampaikan pendapat dalam rapat diskusi kelompok di kelas, sikap yang mencerminkan etika bermusyawarah yang baik adalah...',
    options: [
      { id: 'A', text: 'Menyela pembicaraannya sebelum selesai berbicara agar cepat selesai' },
      { id: 'B', text: 'Mendengarkan dengan saksama hingga ia selesai, baru mengajukan tanggapan secara sopan dengan mengangkat tangan' },
      { id: 'C', text: 'Mengobrol sendiri dengan teman sebangku karena tidak setuju' },
      { id: 'D', text: 'Menertawakan pendapat teman apabila terdengar kurang tepat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menghargai hak berbicara orang lain dengan cara menyimak hingga tuntas dan menyampaikan tanggapan secara santun merupakan wujud sikap demokratis dan beradab dalam bermusyawarah.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Sedang',
    text: 'Apabila dalam sebuah musyawarah sudah dilakukan pembahasan yang mendalam tetapi tetap belum tercapai kesepakatan bulat (mufakat), langkah demokratis berikutnya yang dapat ditempuh adalah...',
    options: [
      { id: 'A', text: 'Membubarkan rapat dan membiarkan masalah berlarut-larut' },
      { id: 'B', text: 'Melakukan pemungutan suara terbanyak (voting) secara adil dan menerima hasilnya bersama' },
      { id: 'C', text: 'Menyerahkan keputusan sepenuhnya kepada siswa yang paling keras suaranya' },
      { id: 'D', text: 'Mengundi menggunakan batu-gunting-kertas tanpa aturan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dalam prinsip demokrasi Pancasila, musyawarah mengutamakan mufakat. Jika mufakat tidak tercapai setelah diskusi bijaksana, keputusan dapat diambil melalui suara terbanyak (voting) yang hasilnya tetap harus dihormati bersama.',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Sukar',
    text: 'Pengurus kelas 6 hendak mengambil keputusan mengenai pemanfaatan uang kas kelas untuk membeli perlengkapan kebersihan baru. Keputusan tersebut menyangkut kepentingan seluruh siswa di kelas. Tindakan pemimpin musyawarah yang paling mencerminkan sila keempat Pancasila adalah...',
    options: [
      { id: 'A', text: 'Langsung membelanjakan uang kas kelas tanpa berdiskusi agar cepat selesai' },
      { id: 'B', text: 'Mengajak seluruh anggota kelas berdiskusi, menampung berbagai usulan kebutuhan yang paling mendesak, lalu menyepakatinya bersama' },
      { id: 'C', text: 'Hanya bertanya kepada dua orang sahabat dekatnya saja' },
      { id: 'D', text: 'Memutuskan sendiri daftar belanjaan lalu meminta siswa lain menurutinya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keputusan yang menyangkut kepentingan bersama harus diambil melalui musyawarah yang melibatkan seluruh anggota, mempertimbangkan kepentingan bersama (kebutuhan kelas yang mendesak), dan diputuskan secara terbuka.',
  },

  // ============================================================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS / PGK (5 SOAL, MASING-MASING 3 OPSI)
  // ============================================================================
  {
    id: 31,
    type: 'pgk',
    topic: 'Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Sedang',
    text: 'Dalam praktik kehidupan sehari-hari di sekolah, siswa kelas 6 belajar mengamalkan nilai-nilai Pancasila secara menyenangkan. Manakah dari tindakan berikut yang merupakan pengamalan nilai-nilai Pancasila di lingkungan sekolah? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Mengucapkan salam, berdoa bersama, dan menghargai teman yang sedang menjalankan ibadah sesuai agamanya.',
      },
      {
        id: 'B',
        text: 'Menjenguk teman sekelas yang sedang sakit dan menyisihkan uang saku untuk membantunya.',
      },
      {
        id: 'C',
        text: 'Hanya mau membantu tugas kelompok apabila dijanjikan imbalan makanan dari teman.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Menghormati ibadah dan berdoa bersama mencerminkan Sila ke-1.\n• B BENAR: Menjenguk dan membantu teman sakit dengan tulus mencerminkan Sila ke-2 dan Sila ke-5.\n• C SALAH: Membantu dengan pamrih atau mengharapkan imbalan bertentangan dengan semangat ketulusan dan kekeluargaan Pancasila.',
  },
  {
    id: 32,
    type: 'pgk',
    topic: 'Mengamalkan Pancasila untuk Kebahagiaan Bersama',
    difficulty: 'Sedang',
    text: 'Pancasila sebagai pandangan hidup bangsa menuntun kita untuk saling mengajak teman melakukan hal-hal positif demi kebahagiaan bersama. Manakah pernyataan berikut yang menunjukkan sikap tepat dalam mengajak teman mengamalkan Pancasila? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Mengajak teman piket bersama sambil memberi contoh langsung membersihkan papan tulis dan meja guru.',
      },
      {
        id: 'B',
        text: 'Mengajak teman berbicara santun dan menghentikan ejekan ketika melihat teman lain diolok-olok.',
      },
      {
        id: 'C',
        text: 'Memaksa teman mengikuti kebiasaan kita dengan ancaman tidak akan ditemani lagi.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Mengajak dengan teladan langsung merupakan cara paling efektif menumbuhkan kesadaran gotong royong.\n• B BENAR: Membela teman yang diejek dan mengajak berbahasa santun mengamalkan Sila ke-2 dan ke-3.\n• C SALAH: Mengancam atau memaksa teman bertentangan dengan nilai kemanusiaan dan persatuan.',
  },
  {
    id: 33,
    type: 'pgk',
    topic: 'Mengenal Norma dalam Kehidupan',
    difficulty: 'Sedang',
    text: 'Perhatikan contoh perilaku dalam kehidupan sehari-hari berikut! Manakah pernyataan yang TEPAT dalam menghubungkan jenis norma dan contoh penerapannya? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Tidak mencuri barang milik teman karena sadar perbuatan itu salah menurut hati nurani merupakan penerapan norma kesusilaan.',
      },
      {
        id: 'B',
        text: 'Menggunakan helm berstandar SNI saat dibonceng sepeda motor di jalan raya merupakan penerapan norma hukum.',
      },
      {
        id: 'C',
        text: 'Melaksanakan ibadah tepat waktu sesuai ajaran agama masing-masing merupakan penerapan norma kesopanan.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Kejujuran dan menghindari perbuatan mencuri bersumber dari hati nurani (norma kesusilaan).\n• B BENAR: Kewajiban memakai helm diatur dalam UU Lalu Lintas (norma hukum).\n• C SALAH: Pelaksanaan ibadah sesuai ajaran agama merupakan penerapan norma agama, bukan norma kesopanan.',
  },
  {
    id: 34,
    type: 'pgk',
    topic: 'Mengenal Kewajiban Anak',
    difficulty: 'Mudah',
    text: 'Setiap anak memiliki hak yang dilindungi sekaligus kewajiban yang harus dilaksanakan dengan tanggung jawab di rumah dan di sekolah. Manakah di antara pernyataan berikut yang termasuk KEWAJIBAN seorang anak? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Menghormati, menaati nasihat, serta membantu orang tua di rumah sesuai kemampuan.',
      },
      {
        id: 'B',
        text: 'Menaati tata tertib sekolah, mengikuti pelajaran dengan sungguh-sungguh, dan menghormati guru.',
      },
      {
        id: 'C',
        text: 'Memperoleh kasih sayang orang tua, bermain, dan mendapatkan nilai hasil belajar dari guru.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Menghormati dan membantu orang tua adalah kewajiban anak di rumah.\n• B BENAR: Disiplin menaati tata tertib dan belajar tekun adalah kewajiban anak di sekolah.\n• C SALAH: Mendapatkan kasih sayang, waktu bermain, dan nilai hasil belajar merupakan HAK anak, bukan kewajiban.',
  },
  {
    id: 35,
    type: 'pgk',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Sukar',
    imageUrl: musyawarahKelasImg,
    imageCaption: 'Siswa kelas 6 mengangkat tangan dengan tertib saat menyampaikan pendapat dalam musyawarah kelas.',
    text: 'Perhatikan gambar siswa kelas 6 yang sedang melakukan diskusi dan musyawarah kelas dengan mengangkat tangan secara tertib! Berdasarkan gambar tersebut, manakah pernyataan yang mencerminkan prinsip bermusyawarah yang benar? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Setiap peserta musyawarah memiliki hak yang sama untuk mengacungkan tangan dan menyampaikan pendapat secara tertib.',
      },
      {
        id: 'B',
        text: 'Keputusan yang diambil melalui musyawarah harus mengutamakan kepentingan bersama di atas kepentingan pribadi.',
      },
      {
        id: 'C',
        text: 'Pendapat yang paling keras disuarakan oleh siswa yang duduk di barisan depan otomatis menjadi keputusan rapat.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Musyawarah memberi kesempatan setara bagi setiap anggota untuk menyampaikan gagasan secara tertib dan sopan.\n• B BENAR: Keputusan musyawarah berorientasi pada kemaslahatan dan kepentingan bersama.\n• C SALAH: Keputusan musyawarah diambil berdasarkan mufakat dan hikmat kebijaksanaan, bukan berdasarkan suara paling keras atau posisi duduk.',
  },

  // ============================================================================
  // BAGIAN C: PILIHAN GANDA KOMPLEKS KATEGORI (5 SOAL, MASING-MASING 3 PERNYATAAN B/S)
  // ============================================================================
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Hubungan Nilai-Nilai Pancasila',
    difficulty: 'Sedang',
    text: 'Di kelas VI SD N 1 Dangintukadaya, para siswa berasal dari latar belakang suku, agama, dan kemampuan ekonomi yang beragam. Mereka selalu menjaga kerukunan, berdoa sebelum belajar, saling menolong bila ada teman kesulitan, serta bermusyawarah saat menyusun jadwal piket kelas. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kebiasaan berdoa sebelum belajar menunjukkan bahwa nilai Sila ke-1 menjadi landasan moral dalam kegiatan belajar siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menyusun jadwal piket kelas melalui musyawarah yang adil menunjukkan keterkaitan antara Sila ke-4 dan Sila ke-5 Pancasila.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kelima sila Pancasila berdiri sendiri-sendiri sehingga pengamalan Sila ke-3 tidak ada hubungannya dengan Sila ke-2.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Berdoa sebelum belajar adalah pengamalan Sila ke-1 sebagai landasan moral (BENAR).\n2. Pembagian tugas piket secara musyawarah (Sila ke-4) dan adil merata (Sila ke-5) menunjukkan keterkaitan antarsila (BENAR).\n3. Sila-sila Pancasila bersifat hierarkis-piramidal dan saling menjiwai satu sama lain, bukan terpisah (SALAH).',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Mengamalkan Pancasila untuk Kebahagiaan Bersama',
    difficulty: 'Sedang',
    text: 'Warga Banjar dan siswa SD bekerja sama membersihkan saluran air lingkungan sekolah sebelum musim hujan tiba agar terhindar dari genangan banjir. Setelah selesai bekerja bakti, warga dan siswa duduk bersama menikmati minuman dengan penuh keakraban. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kegiatan kerja bakti tersebut merupakan wujud pengamalan Pancasila sebagai pandangan hidup bangsa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mengajak teman ikut berpartisipasi dalam kerja bakti dengan ramah dapat menumbuhkan kebahagiaan dan kerukunan bersama.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa tidak perlu ikut menjaga kebersihan lingkungan sekitar karena kegiatan tersebut hanya kewajiban orang dewasa.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kerja bakti dan gotong royong adalah wujud nyata Pancasila sebagai pandangan hidup bangsa (BENAR).\n2. Ajakan ramah menciptakan suasana rukun, ringan sama dijinjing, dan bahagia bersama (BENAR).\n3. Menjaga kebersihan lingkungan merupakan tanggung jawab bersama seluruh warga termasuk pelajar sesuai kemampuan (SALAH).',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Sukar',
    text: 'Dalam kehidupan bermasyarakat, berbangsa, dan bernegara, terdapat empat macam norma yang mengatur perilaku warga agar hak dan kewajiban terpenuhi secara seimbang. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa dan sanksi atas pelanggarannya bersifat tidak langsung di akhirat kelak.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Salah satu contoh sanksi pelanggaran norma kesopanan adalah mendapat teguran, celaan, atau dikucilkan dari pergaulan masyarakat.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Setiap warga negara boleh menuntut haknya terlebih dahulu dan baru melaksanakan kewajiban apabila ada pengawasan petugas.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Norma agama bersumber dari wahyu Tuhan dengan sanksi berupa dosa dan balasan di akhirat (BENAR).\n2. Pelanggaran tata krama/kesopanan berdampak pada sanksi sosial seperti teguran atau cemoohan (BENAR).\n3. Pelaksanaan kewajiban harus didasari kesadaran pribadi tanpa menunggu diawasi petugas dan dilakukan secara seimbang dengan hak (SALAH).',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Mengenal Kewajiban Anak',
    difficulty: 'Mudah',
    text: 'Budi adalah siswa kelas 6 SD yang tinggal bersama kedua orang tua dan seorang adik. Setiap hari Budi membagi waktunya antara belajar, membantu orang tua menyapu halaman, bermain bersama teman, dan beristirahat cukup. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Membantu orang tua menyapu halaman dan belajar dengan tekun merupakan bagian dari kewajiban Budi sebagai anak.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mendapatkan waktu bermain, istirahat yang cukup, serta perlindungan dari orang tua merupakan hak anak yang perlu dipenuhi.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Apabila Budi lupa mengerjakan PR karena asyik bermain sepanjang sore, hal tersebut termasuk pelaksanaan hak bermain yang benar.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Membantu orang tua dan belajar adalah kewajiban utama anak (BENAR).\n2. Hak anak mencakup hak bermain, beristirahat, tumbuh kembang, dan mendapat perlindungan (BENAR).\n3. Menggunakan hak bermain secara berlebihan hingga melalaikan kewajiban belajar adalah sikap yang kurang bertanggung jawab (SALAH).',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Belajar Bermusyawarah',
    difficulty: 'Sedang',
    text: 'Kelas VI akan mengikuti lomba kebersihan dan keindahan kelas antar-tingkat. Wali kelas membimbing siswa melakukan musyawarah untuk menentukan tema hiasan kelas serta pembagian tugas membawa tanaman pot dan alat kebersihan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Musyawarah di kelas mencerminkan pengamalan sila keempat Pancasila yang mengutamakan hikmat kebijaksanaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setelah keputusan musyawarah disepakati, seluruh siswa wajib melaksanakannya bersama dengan penuh rasa tanggung jawab.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang usulannya tidak terpilih dalam musyawarah diperbolehkan menolak menjalankan tugas yang telah disepakati bersama.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pengambilan keputusan melalui musyawarah kelas merupakan praktik Sila ke-4 Pancasila (BENAR).\n2. Hasil mufakat mengikat seluruh anggota musyawarah untuk dilaksanakan bersama dengan tanggung jawab (BENAR).\n3. Meskipun usul pribadi belum terpilih, seluruh peserta musyawarah tetap wajib menghormati dan melaksanakan keputusan bersama (SALAH).',
  },
];
