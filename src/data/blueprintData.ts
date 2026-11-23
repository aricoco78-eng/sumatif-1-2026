import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Pendidikan Pancasila
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Pendidikan Pancasila (30 PG, 5 PGK, 5 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami hubungan antarsila Pancasila sebagai satu kesatuan nilai yang utuh dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan narasi keterkaitan sila pertama dan sila kedua, peserta didik dapat menentukan contoh sikap saling menghormati teman berbeda agama di sekolah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik membiasakan pengamalan nilai-nilai Pancasila dengan menyenangkan di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan gambar realistis siswa berdoa dengan khidmat di kelas sebelum belajar, peserta didik dapat mengidentifikasi sila Pancasila yang diamalkan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis hubungan nilai-nilai Pancasila dalam praktik tolong-menolong dan keadilan sosial.',
    indikatorSoal:
      'Disajikan cerita kegiatan penggalangan dan penyaluran bantuan korban banjir secara merata, peserta didik dapat menentukan sila-sila Pancasila yang saling berhubungan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menerapkan nilai kemanusiaan yang adil dan beradab dalam pergaulan sehari-hari di sekolah.',
    indikatorSoal:
      'Disajikan situasi teman yang terjatuh dan terluka di halaman sekolah, peserta didik dapat menentukan tindakan pengamalan sila kedua Pancasila yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menjaga persatuan dan kesatuan di tengah keberagaman suku dan budaya bangsa.',
    indikatorSoal:
      'Disajikan kondisi kelas yang memiliki beragam suku dan budaya, peserta didik dapat memilih sikap yang mendukung persatuan Indonesia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi bentuk pengamalan sila kelima Pancasila dalam kegiatan sehari-hari.',
    indikatorSoal:
      'Disajikan tiga perilaku hidup hemat, menghargai karya teman, dan adil membagi tugas, peserta didik dapat menentukan sila Pancasila yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami kedudukan Pancasila sebagai pandangan hidup bangsa Indonesia.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan makna Pancasila sebagai pandangan hidup bangsa Indonesia secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis manfaat pengamalan Pancasila bagi terwujudnya kebahagiaan bersama.',
    indikatorSoal:
      'Disajikan pertanyaan tentang tujuan pengamalan Pancasila, peserta didik dapat menentukan alasan Pancasila menciptakan kebahagiaan bersama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik mempraktikkan budaya gotong royong untuk kebersamaan dan kebahagiaan di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan gambar realistis siswa bergotong royong membersihkan taman sekolah, peserta didik dapat menentukan manfaat utama budaya gotong royong.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mampu mengajak teman mengamalkan Pancasila melalui keteladanan dan komunikasi yang santun.',
    indikatorSoal:
      'Disajikan kasus teman yang membuang sampah sembarangan di selokan, peserta didik dapat memilih cara bijak mengajak teman menjaga kebersihan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menunjukkan sikap persuasif dan sukarela saat mengajak teman berbuat kebaikan sesuai Pancasila.',
    indikatorSoal:
      'Disajikan rencana penggalangan dana sukarela untuk teman yang sakit, peserta didik dapat menentukan sikap ajakan yang tepat dan tidak memaksa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik membiasakan cinta tanah air dan produk dalam negeri sebagai pengamalan Pancasila.',
    indikatorSoal:
      'Disajikan sikap bangga menggunakan kerajinan lokal Indonesia, peserta didik dapat menentukan alasan perilaku tersebut mencerminkan Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami pengertian norma sebagai pedoman hidup bermasyarakat.',
    indikatorSoal:
      'Disajikan definisi aturan berisi perintah dan larangan untuk ketertiban masyarakat, peserta didik dapat menyebutkan istilah yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik membedakan macam-macam norma beserta sumber dan sanksinya.',
    indikatorSoal:
      'Disajikan ciri norma yang bersumber dari hati nurani dengan sanksi rasa bersalah, peserta didik dapat mengidentifikasi norma kesusilaan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menerapkan norma kesopanan dalam interaksi di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan perilaku siswa yang tersenyum, menunduk, dan menyapa guru di koridor, peserta didik dapat menentukan jenis norma yang diterapkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menaati norma hukum dalam kehidupan berbangsa dan bernegara demi keselamatan bersama.',
    indikatorSoal:
      'Disajikan gambar realistis siswa menyeberang melalui zebra cross dengan tertib, peserta didik dapat mengidentifikasi jenis norma dan tujuannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menganalisis ciri khas norma hukum dibandingkan norma lainnya.',
    indikatorSoal:
      'Peserta didik dapat membedakan sifat tertulis, lembaga pembuat, dan sanksi tegas pada norma hukum.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami pengertian hak dan kewajiban secara tepat.',
    indikatorSoal:
      'Disajikan definisi sesuatu yang harus dilaksanakan penuh tanggung jawab, peserta didik dapat menentukan istilah kewajiban.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami prinsip keseimbangan antara pelaksanaan kewajiban dan pemenuhan hak.',
    indikatorSoal:
      'Peserta didik dapat menentukan hubungan yang tepat antara mendahulukan kewajiban dan menuntut hak dalam kehidupan bernegara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi kewajiban warga negara untuk mendukung tercapainya hak atas lingkungan bersih.',
    indikatorSoal:
      'Disajikan hak warga negara atas lingkungan bersih, peserta didik dapat menentukan kewajiban yang mendukung terwujudnya hak tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik menganalisis wujud nyata kewajiban bela negara dan cinta tanah air bagi pelajar.',
    indikatorSoal:
      'Disajikan konteks kehidupan pelajar kelas 6 SD, peserta didik dapat memilih bentuk pelaksanaan kewajiban membela negara yang tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik mengenal dan melaksanakan kewajiban anak di lingkungan keluarga.',
    indikatorSoal:
      'Peserta didik dapat memilih contoh kewajiban anak di rumah yang harus dilaksanakan sehari-hari.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menumbuhkan kemandirian dalam menjalankan kewajiban belajar sebagai anak.',
    indikatorSoal:
      'Disajikan gambar realistis anak merapikan buku pelajaran di meja belajarnya, peserta didik dapat menentukan wujud kewajiban anak yang tampak.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami keseimbangan hak dan kewajiban anak di fasilitas sekolah.',
    indikatorSoal:
      'Disajikan hak anak membaca dan meminjam buku perpustakaan, peserta didik dapat menentukan kewajiban yang menyertainya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi dampak positif pelaksanaan kewajiban anak di sekolah.',
    indikatorSoal:
      'Disajikan perilaku siswa yang disiplin waktu dan piket kebersihan, peserta didik dapat menentukan manfaatnya bagi hak belajar bersama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami hakikat dan tujuan musyawarah untuk mufakat.',
    indikatorSoal:
      'Disajikan pengertian musyawarah, peserta didik dapat menentukan tujuan utama dari kegiatan bermusyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik bersikap lapang dada dan bertanggung jawab terhadap hasil keputusan musyawarah.',
    indikatorSoal:
      'Disajikan kasus usulan siswa yang tidak terpilih dalam musyawarah karya wisata, peserta didik dapat menentukan sikap bijak yang harus ditunjukkan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menerapkan etika menghargai pendapat orang lain saat berdiskusi.',
    indikatorSoal:
      'Disajikan situasi teman sedang menyampaikan pendapat di kelas, peserta didik dapat menentukan sikap bermusyawarah yang santun.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami mekanisme pengambilan keputusan apabila mufakat belum tercapai.',
    indikatorSoal:
      'Disajikan situasi diskusi yang belum menghasilkan kata mufakat, peserta didik dapat menentukan langkah demokratis berikutnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis peran pemimpin musyawarah dalam mengambil keputusan bagi kepentingan bersama.',
    indikatorSoal:
      'Disajikan masalah penggunaan uang kas kelas, peserta didik dapat menganalisis tindakan pemimpin musyawarah sesuai sila keempat Pancasila.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi beragam contoh pengamalan Pancasila di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan tiga perilaku siswa di sekolah, peserta didik dapat memilih semua tindakan yang sesuai pengamalan nilai Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi cara mengajak teman mengamalkan Pancasila secara ramah dan teladan.',
    indikatorSoal:
      'Disajikan tiga pernyataan cara mengajak teman berbuat baik di sekolah, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menghubungkan macam-macam norma dengan contoh penerapannya dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan tiga pasangan jenis norma dan contoh perilaku, peserta didik dapat memilih semua pasangan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik membedakan antara kewajiban anak dan hak anak di rumah maupun sekolah.',
    indikatorSoal:
      'Disajikan tiga pernyataan aktivitas anak, peserta didik dapat memilih semua pernyataan yang termasuk kewajiban anak.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis prinsip-prinsip musyawarah demokratis berdasarkan stimulus gambar.',
    indikatorSoal:
      'Disajikan gambar realistis musyawarah kelas dan tiga pernyataan terkait etika diskusi, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi keterkaitan antarsila Pancasila dalam kerukunan hidup di sekolah.',
    indikatorSoal:
      'Disajikan studi kasus keberagaman siswa di kelas dan 3 pernyataan, peserta didik dapat menilai Benar atau Salah pada masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menilai makna pengamalan Pancasila sebagai pandangan hidup bangsa melalui kegiatan gotong royong.',
    indikatorSoal:
      'Disajikan narasi kerja bakti lingkungan sekolah dan 3 pernyataan, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menganalisis sumber, sanksi norma, dan kesadaran melaksanakan kewajiban berbangsa dan bernegara.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai norma agama, sanksi norma kesopanan, dan pelaksanaan hak-kewajiban, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi pelaksanaan kewajiban dan hak anak dalam kehidupan keluarga.',
    indikatorSoal:
      'Disajikan cerita keseharian anak di rumah dan 3 pernyataan terkait kewajiban serta hak bermain, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menilai sikap demokratis dan tanggung jawab terhadap hasil keputusan musyawarah kelas.',
    indikatorSoal:
      'Disajikan narasi musyawarah persiapan lomba kebersihan kelas dan 3 pernyataan, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan Pendidikan Pancasila.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('norma') || t.includes('hak') || t.includes('kewajiban')) {
    return 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945';
  }
  if (t.includes('bhinneka') || t.includes('keberagaman') || t.includes('suku')) {
    return 'Bhinneka Tunggal Ika';
  }
  if (t.includes('gotong royong') || t.includes('nkri') || t.includes('negara')) {
    return 'Negara Kesatuan Republik Indonesia';
  }
  return 'Pancasila';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
