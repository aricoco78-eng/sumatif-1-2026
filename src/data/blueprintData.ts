import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Matematika
 * Lingkup Materi: Pecahan dan Desimal (Perkalian Pecahan, Pembagian Pecahan, dan Bilangan Desimal)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Pecahan dan Desimal (25 PG, 2 PGK, 3 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi perkalian bilangan asli dengan pecahan biasa dalam konteks sehari-hari.',
    indikatorSoal:
      'Disajikan narasi pembuatan kue yang memerlukan pecahan kg tepung terigu per loyang, peserta didik dapat menentukan total kebutuhan tepung untuk sejumlah loyang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil perkalian pecahan biasa dengan bilangan asli secara tepat.',
    indikatorSoal:
      'Disajikan operasi perkalian pecahan biasa dengan bilangan asli, peserta didik dapat menentukan hasil perhitungannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menginterpretasikan representasi visual pecahan dan menyelesaikan perkalian bilangan asli dengan pecahan.',
    indikatorSoal:
      'Disajikan gambar realitas potongan pizza yang merepresentasikan pecahan 3/4 bagian, peserta didik dapat menghitung total pizza dari beberapa loyang dengan sisa bagian serupa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan perkalian dua pecahan biasa dan menyederhanakan hasilnya.',
    indikatorSoal:
      'Disajikan operasi perkalian dua pecahan biasa, peserta didik dapat menentukan hasil perkalian dalam bentuk pecahan paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual perkalian pecahan biasa dengan pecahan campuran.',
    indikatorSoal:
      'Disajikan luas kebun dalam bentuk pecahan campuran dan bagian pecahan yang ditanami padi, peserta didik dapat menghitung luas lahan yang ditanami padi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perkalian bilangan asli dengan pecahan campuran.',
    indikatorSoal:
      'Disajikan kebutuhan pakan ternak harian dalam pecahan campuran, peserta didik dapat menentukan total kebutuhan pakan selama beberapa hari.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan perkalian dua pecahan campuran untuk menghitung luas bangun datar.',
    indikatorSoal:
      'Disajikan ukuran panjang dan lebar taman berbentuk persegi panjang dalam pecahan campuran, peserta didik dapat menghitung luas taman tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis masalah multi-langkah yang melibatkan perkalian pecahan terhadap sisa kuantitas.',
    indikatorSoal:
      'Disajikan jumlah uang tabungan dan dua tahap penggunaan dalam bentuk pecahan dari total dan sisa, peserta didik dapat menentukan harga barang yang dibeli.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perkalian bilangan asli dengan pecahan biasa pada satuan volume.',
    indikatorSoal:
      'Disajikan jumlah gelas jus dan kapasitas pecahan liter tiap gelas, peserta didik dapat menghitung total volume jus dalam pecahan campuran.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil pembagian bilangan asli dengan pecahan biasa.',
    indikatorSoal:
      'Disajikan operasi pembagian bilangan asli dengan pecahan biasa, peserta didik dapat menentukan hasil pembagiannya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian pecahan campuran dengan pecahan biasa melalui konteks gambar realitas.',
    indikatorSoal:
      'Disajikan gambar gulungan pita prakarya dan panjang total pita dalam pecahan campuran, peserta didik dapat menentukan banyak potongan pita dengan ukuran pecahan tertentu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian pecahan biasa dengan bilangan asli.',
    indikatorSoal:
      'Disajikan volume sirup dalam pecahan biasa yang dituang rata ke sejumlah gelas, peserta didik dapat menentukan volume sirup di tiap gelas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung pembagian pecahan biasa dengan pecahan biasa dan menyederhanakan hasilnya.',
    indikatorSoal:
      'Disajikan operasi pembagian dua pecahan biasa, peserta didik dapat menentukan hasil dalam bentuk pecahan campuran paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah pembagian pecahan campuran dengan pecahan satuan berbasis gambar realitas.',
    indikatorSoal:
      'Disajikan gambar gelas ukur berisi minyak goreng dan botol kecil, peserta didik dapat menghitung jumlah botol yang dibutuhkan untuk menampung seluruh minyak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian pecahan campuran dengan pecahan campuran.',
    indikatorSoal:
      'Disajikan berat total panen buah dan kapasitas tiap kemasan dalam pecahan campuran, peserta didik dapat menentukan banyak kemasan yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung pembagian pecahan campuran dengan bilangan asli pada satuan panjang.',
    indikatorSoal:
      'Disajikan panjang kawat dalam pecahan campuran yang dipotong menjadi beberapa bagian sama panjang, peserta didik dapat menentukan panjang tiap potongan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis masalah pembagian pecahan campuran dengan pecahan biasa terkait jarak dan waktu.',
    indikatorSoal:
      'Disajikan jarak tempuh dalam pecahan campuran dan waktu tempuh pecahan jam, peserta didik dapat menentukan jarak tempuh dalam 1 jam.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengubah bentuk pecahan biasa menjadi bilangan desimal secara akurat.',
    indikatorSoal:
      'Disajikan sebuah pecahan biasa berpenyebut 8, peserta didik dapat menentukan bentuk bilangan desimalnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengubah bilangan desimal menjadi bentuk pecahan biasa paling sederhana.',
    indikatorSoal:
      'Disajikan bilangan desimal dua angka di belakang koma, peserta didik dapat menyatakan bilangan tersebut dalam bentuk pecahan biasa paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan berbagai bentuk bilangan (desimal, pecahan, dan persen).',
    indikatorSoal:
      'Disajikan kumpulan bilangan yang terdiri atas desimal, pecahan biasa, dan persen, peserta didik dapat mengurutkannya dari yang terkecil hingga terbesar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil perkalian dua bilangan desimal.',
    indikatorSoal:
      'Disajikan operasi perkalian dua bilangan desimal satu angka di belakang koma, peserta didik dapat menentukan hasil perhitungannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perkalian bilangan desimal dengan bilangan asli dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan jumlah bungkus dan berat per bungkus bahan makanan dalam bilangan desimal, peserta didik dapat menentukan total berat belanjaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil pembagian dua bilangan desimal.',
    indikatorSoal:
      'Disajikan operasi pembagian dua bilangan desimal satu angka di belakang koma, peserta didik dapat menentukan hasil baginya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual pembagian bilangan desimal dua angka di belakang koma.',
    indikatorSoal:
      'Disajikan volume total air galon dan kapasitas botol kemasan dalam bilangan desimal, peserta didik dapat menentukan banyak botol yang terisi penuh.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan memecahkan masalah multi-langkah yang memadukan perkalian pecahan dan pembagian bilangan desimal.',
    indikatorSoal:
      'Disajikan persediaan bahan bakar dalam desimal yang dipakai sebagian (pecahan) lalu sisanya dibagi rata beberapa hari, peserta didik dapat menentukan pemakaian per hari.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengonversi pecahan ke desimal, menjumlahkan desimal, dan menghitung perkalian desimal dalam konteks belanja buah.',
    indikatorSoal:
      'Disajikan gambar realitas buah dan timbangan pasar beserta berat belanjaan dalam desimal dan pecahan campuran, peserta didik dapat memilih semua pernyataan yang benar dari 3 opsi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kesetaraan pecahan-desimal serta operasi perkalian dan pembagiannya dalam konteks pembuatan kue.',
    indikatorSoal:
      'Disajikan persediaan bahan dalam pecahan campuran dan takaran resep dalam desimal, peserta didik dapat memilih seluruh pernyataan yang benar dari 3 pilihan jawaban.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis permasalahan bertingkat perkalian dan pembagian pecahan pada konteks menjahit kain.',
    indikatorSoal:
      'Disajikan panjang gulungan kain, bagian pecahan untuk seragam, dan ukuran potongan taplak meja, peserta didik dapat menentukan Benar/Salah pada 3 pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi pembagian bilangan desimal dan perkalian pecahan dalam konteks penyiraman tanaman berbasis gambar realitas.',
    indikatorSoal:
      'Disajikan gambar kebun sekolah dan data volume larutan desimal serta air pecahan untuk 4 pot tanaman, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hasil perkalian dan pembagian antara bilangan pecahan campuran dan bilangan desimal.',
    indikatorSoal:
      'Disajikan dua bilangan P (pecahan campuran) dan Q (desimal), peserta didik dapat mengevaluasi kebenaran (Benar/Salah) hasil P × Q, P ÷ Q, dan Q ÷ P.',
    levelKognitif: 'L3',
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

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
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
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

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
  if (t.includes('bilangan') || t.includes('pecahan') || t.includes('desimal') || t.includes('fpb') || t.includes('kpk') || t.includes('pangkat')) {
    return 'Bilangan';
  }
  if (t.includes('lingkaran') || t.includes('bangun datar') || t.includes('kubus') || t.includes('geometri') || t.includes('layang')) {
    return 'Geometri';
  }
  if (t.includes('debit') || t.includes('volume') || t.includes('kecepatan') || t.includes('jarak')) {
    return 'Pengukuran';
  }
  if (t.includes('skala') || t.includes('perbandingan') || t.includes('diskon') || t.includes('bruto') || t.includes('aritmatika')) {
    return 'Aljabar';
  }
  if (t.includes('statistika') || t.includes('diagram') || t.includes('mean') || t.includes('modus') || t.includes('median')) {
    return 'Analisis Data dan Peluang';
  }
  return 'Bilangan';
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

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
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
