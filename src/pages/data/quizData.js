const questions = [
  {
    section: "Section 1",
    question: "MBTI Choice",
    options: [
      "ISTJ",
      "ISFJ",
      "ISTP",
      "ISFP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ENTP",
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ESTP",
      "ESFP",
      "ESTJ",
      "ESFJ",
    ],
  },
  {
    section: "Section 2",
    question: "Primary vs Nonprimary",
    options: ["Primary", "Surgical", "Nonsurgical"],
    description: `
    Primary (Penyakit Dalam, Pediatri), Surgical (Bedah, Bedah Saraf, Ortopedi, Mata, THT, Urologi), Nonsurgical (selain primary & surgical).
    `,
  },
  {
    section: "Section 3A",
    question: "Kamu adalah orang yang cenderung ...",
    options: ["Egois dan dingin", "Suportif dan sering menghibur"],
  },
  {
    section: "Section 3A",
    question: "Kamu adalah orang yang cenderung ...",
    options: [
      "Menyesuaikan diri dan suka terhadap aturan",
      "Memberontak dan tidak suka diatur",
    ],
  },
  {
    section: "Section 3A",
    question: "Kamu adalah orang yang cenderung ...",
    options: ["Percaya diri", "Tidak percaya diri dan takut"],
  },
  {
    section: "Section 3A",
    question: "Kamu adalah orang yang cenderung ...",
    options: ["Dominan (suka mengontrol)", "Tidak dominan (sederhana)"],
  },
  {
    section: "Section 3A",
    question: "Kamu adalah orang yang cenderung ...",
    options: ["Waspada dan curiga", "Percaya pada orang"],
  },
  {
    section: "Section 3A",
    question: "Kamu adalah orang yang cenderung ...",
    options: ["Mudah stress dan tidak puas", "Santai dan tenang"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka untuk menyenangkan orang lain?",
    options: ["Ya", "Tidak"],
    description:
      "(misal : membantu teman, mudah memaafkan atau peduli pada sesama)",
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka bergaul dengan lawan jenis?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka untuk bersifat mandiri ",
    options: ["Ya", "Tidak"],
    description:
      "(misal : ingin kebebasan, suka mengerjakan apa yang diinginkan, dsb)",
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa berguna, percaya dan empati pada orang lain",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka mengalah?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka mudah terharu?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka untuk menguasai orang lain?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka bekerja secara teratur?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka menonjolkan diri?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka mendapatkan pengakuan secara sosial?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka menyerang/mengkritik orang lain?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3B",
    question: "Apakah kamu merasa suka membela diri?",
    options: ["Ya", "Tidak"],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: ["Bekerja dengan orang", "Merawat dengan orang"],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: ["Bekerja secara luas", "Bekerja secara spesifik"],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: [
      "Terlibat dalam kehidupan seseorang",
      "Tidak terlalu terlibat dalam kehidupan seseorang",
    ],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: ["Menangani pasien pertama kali", "Menangani pasien rujukan"],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: [
      "Menangani pasien dalam jangka panjang",
      "Menangani pasien dalam jangka pendek/langsung",
    ],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: [
      "Menangani masalah umum",
      "Menangani masalah tidak umum (spesifik)",
    ],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: ["Bekerja di rumah sakit", "Bekerja di klinik"],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: ["Mengumpulkan informasi", "Memberikan masukan/konsultasi"],
  },
  {
    section: "Section 3C",
    question: "Kamu suka",
    options: [
      "Tidak terlalu peduli dengan perkembangan teknologi",
      "peduli dengan teknologi",
    ],
  },
  // SECTION 4 JOB PREFERENCE
  {
    section: "Section 4",
    question: "Jenis kelamin anda",
    options: ["Laki-laki", "Perempuan"],
  },
  {
    section: "Section 4",
    question: "Berapa jam anda ingin bekerja dalam satu hari?",
    options: ["6 jam", "7 jam", "8 jam", "9 jam"],
  },
];

export default questions;
