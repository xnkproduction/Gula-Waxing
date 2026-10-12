export interface Branch {
  id: string;
  name: string;
  city: string;
  badge?: string;
  isPrimary?: boolean;
  address: string;
  landmark?: string;
  hours?: string;
  whatsapp?: string;
  mapsUrl: string;
  verificationStatus: 'verified' | 'unverified';
  note?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Body' | 'Face' | 'Intimate' | 'Arms & Legs';
  treatmentArea: string;
  description: string;
  duration?: string;
  priceNote: string;
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const businessConfig = {
  brandName: "GULA Waxing",
  tagline: "Your Smooth Skin Journey Starts Here",
  instagramUrl: "https://www.instagram.com/gulawaxing/",
  instagramHandle: "@gulawaxing",
  linktreeUrl: "https://linktr.ee/gulawaxing",
  branches: {
    purwokerto: {
      id: "purwokerto",
      name: "GULA Waxing Purwokerto",
      city: "Purwokerto, Jawa Tengah",
      badge: "Flagship Branch",
      isPrimary: true,
      whatsapp: "6288989575099",
      address:
        "Ruko depan pintu masuk UNSOED, Jl. Profesor DR. HR Bunyamin No. 702E, Dukuhbandong, Grendeng, Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53121",
      landmark: "Tepat di depan gerbang / pintu masuk Universitas Jenderal Soedirman (UNSOED)",
      hours: "Konfirmasi jadwal via WhatsApp",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Gula+Waxing+Purwokerto",
      verificationStatus: 'verified' as const,
      note: "Kontak & WhatsApp resmi terverifikasi untuk Purwokerto"
    },
    gejayan: {
      id: "gejayan",
      name: "GULA Waxing Gejayan",
      city: "Yogyakarta",
      badge: "Yogyakarta",
      isPrimary: false,
      address: "Gejayan, Yogyakarta",
      hours: "08.00 – 20.00 WIB (Perlu konfirmasi)",
      mapsUrl: "https://linktr.ee/gulawaxing",
      verificationStatus: 'unverified' as const,
      note: "Informasi detail alamat & kontak tersedia melalui Instagram/Linktree resmi"
    },
    jambon: {
      id: "jambon",
      name: "GULA Waxing Jambon",
      city: "Yogyakarta",
      badge: "Yogyakarta",
      isPrimary: false,
      address: "Jambon, Yogyakarta",
      hours: "09.00 – 19.00 WIB (Perlu konfirmasi)",
      mapsUrl: "https://linktr.ee/gulawaxing",
      verificationStatus: 'unverified' as const,
      note: "Informasi detail alamat & kontak tersedia melalui Instagram/Linktree resmi"
    },
    tambakbayan: {
      id: "tambakbayan",
      name: "GULA Waxing Tambakbayan",
      city: "Yogyakarta",
      badge: "Yogyakarta",
      isPrimary: false,
      address: "Tambakbayan 9/1, Yogyakarta",
      hours: "10.00 – 19.00 WIB (Perlu konfirmasi)",
      mapsUrl: "https://linktr.ee/gulawaxing",
      verificationStatus: 'unverified' as const,
      note: "Informasi detail alamat & kontak tersedia melalui Instagram/Linktree resmi"
    }
  }
};

export const branchList: Branch[] = [
  businessConfig.branches.purwokerto,
  businessConfig.branches.gejayan,
  businessConfig.branches.jambon,
  businessConfig.branches.tambakbayan
];

export function createWhatsAppUrl(
  phone: string,
  branchName: string,
  serviceName?: string
): string {
  const service = serviceName || "layanan waxing";

  const message =
    `Halo GULA Waxing, saya ingin bertanya mengenai ${service} ` +
    `di cabang ${branchName}. Mohon informasi harga dan jadwal booking yang tersedia. Terima kasih.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const servicesData: ServiceItem[] = [
  {
    id: "underarm-waxing",
    name: "Underarm Waxing",
    category: "Body",
    treatmentArea: "Area Ketiak",
    description: "Perawatan pencabutan bulu ketiak dengan formula lembut untuk kulit halus, cerah, dan bebas iritasi.",
    duration: "15-20 menit",
    priceNote: "Hubungi WhatsApp untuk update promo & tarif resmi",
    isPopular: true
  },
  {
    id: "full-legs-waxing",
    name: "Full Legs Waxing",
    category: "Arms & Legs",
    treatmentArea: "Seluruh Kaki",
    description: "Pembersihan bulu kaki secara menyeluruh dari paha hingga pergelangan untuk tampilan kaki mulus bercahaya.",
    duration: "40-50 menit",
    priceNote: "Hubungi WhatsApp untuk update promo & tarif resmi",
    isPopular: true
  },
  {
    id: "half-legs-waxing",
    name: "Half Legs Waxing",
    category: "Arms & Legs",
    treatmentArea: "Betis / Paha",
    description: "Pilihan fleksibel untuk area betis atau paha agar tetap tampil percaya diri mengenakan outfit favorit.",
    duration: "25-30 menit",
    priceNote: "Hubungi WhatsApp untuk update promo & tarif resmi"
  },
  {
    id: "arms-waxing",
    name: "Full Arms & Half Arms",
    category: "Arms & Legs",
    treatmentArea: "Lengan Penuh / Setengah",
    description: "Menghilangkan bulu halus di area lengan dengan cepat, nyaman, dan hasil tahan lama.",
    duration: "20-35 menit",
    priceNote: "Hubungi WhatsApp untuk update promo & tarif resmi"
  },
  {
    id: "brazilian-bikini-waxing",
    name: "Bikini & Brazilian Waxing",
    category: "Intimate",
    treatmentArea: "Area Intim & Sensitif",
    description: "Perawatan higienis dengan teknik profesional di ruangan privat yang nyaman dan terjaga privasinya.",
    duration: "30-45 menit",
    priceNote: "Hubungi WhatsApp untuk update promo & tarif resmi",
    isPopular: true
  },
  {
    id: "facial-waxing",
    name: "Facial & Brow Waxing",
    category: "Face",
    treatmentArea: "Alis, Upper Lip, Dagu & Wajah",
    description: "Merapikan alis dan membersihkan bulu halus di wajah untuk hasil makeup lebih flawless dan kulit lebih halus.",
    duration: "15-25 menit",
    priceNote: "Hubungi WhatsApp untuk update promo & tarif resmi"
  }
];

export const faqList: FAQItem[] = [
  {
    question: "What waxing services are available?",
    answer: "GULA Waxing menyediakan beragam perawatan waxing mulai dari Underarm, Arms, Full & Half Legs, Brazilian & Bikini Line, hingga Facial & Eyebrow waxing. Setiap perawatan dikerjakan secara teliti dengan memprioritaskan kenyamanan serta kebersihan Anda."
  },
  {
    question: "How much does each service cost?",
    answer: "Daftar harga resmi dan paket promo berkala dikonfirmasi langsung oleh admin cabang. Silakan hubungi WhatsApp resmi GULA Waxing Purwokerto (0889-8957-5099) untuk mendapatkan pricelist terkini dan paket hemat yang sedang berlaku."
  },
  {
    question: "How do I book an appointment?",
    answer: "Pemesanan sangat mudah! Cukup klik tombol 'Book via WhatsApp' di website ini atau hubungi langsung 0889-8957-5099 untuk cabang Purwokerto. Sebutkan layanan yang Anda inginkan serta tanggal dan jam yang Anda rencanakan."
  },
  {
    question: "Which branch should I visit?",
    answer: "Bagi Anda yang berdomisili atau sedang berkegiatan di Purwokerto dan sekitarnya (terutama mahasiswa/civitas akademika UNSOED), silakan kunjungi GULA Waxing Purwokerto di Jl. Profesor DR. HR Bunyamin No. 702E (ruko persis depan pintu masuk UNSOED). Untuk area D.I. Yogyakarta, tersedia cabang Gejayan, Jambon, dan Tambakbayan."
  },
  {
    question: "What are the operating hours?",
    answer: "Jam operasional cabang Purwokerto dapat Anda konfirmasikan langsung melalui chat WhatsApp 0889-8957-5099 agar Anda mendapatkan slot waktu yang paling nyaman tanpa perlu menunggu."
  },
  {
    question: "Do I need to book in advance?",
    answer: "Kami sangat menyarankan untuk reservasi terlebih dahulu via WhatsApp agar terapis dan ruangan telah siap khusus untuk Anda, sehingga Anda terhindar dari antrean di jam-jam sibuk."
  },
  {
    question: "How can I reschedule or cancel?",
    answer: "Jika ada perubahan jadwal, cukup kirimkan pesan konfirmasi ke WhatsApp admin cabang Purwokerto (0889-8957-5099) paling lambat beberapa jam sebelum waktu janji temu agar jadwal dapat disesuaikan kembali."
  },
  {
    question: "What should I prepare before my appointment?",
    answer: "Pastikan panjang bulu minimal sekitar 0.5 cm (ukuran butir beras) agar waxing dapat mencabut secara optimal. Hindari scrubbing atau eksfoliasi keras 24 jam sebelum perawatan, kenakan pakaian longgar yang nyaman, dan pastikan kulit dalam kondisi bersih."
  }
];

export const whyChooseGula = [
  {
    title: "Lokasi Strategis Depan UNSOED",
    description: "Cabang Purwokerto berada tepat di ruko depan pintu gerbang masuk UNSOED Jl. HR Bunyamin, sangat mudah dijangkau dengan akses parkir nyaman.",
    point: "01"
  },
  {
    title: "Ruangan Privat & Nyaman",
    description: "Setiap sesi perawatan dilakukan di ruang tertutup yang bersih, tenang, dan higienis demi kenyamanan dan rasa aman privasi Anda.",
    point: "02"
  },
  {
    title: "Proses Booking WhatsApp Cepat",
    description: "Tidak perlu registrasi akun rumit. Cukup kirim pesan WhatsApp langsung ke admin resmi Purwokerto di 0889-8957-5099 untuk cek jadwal dan promo.",
    point: "03"
  },
  {
    title: "Jaringan Multi-Cabang Terpercaya",
    description: "Telah hadir di berbagai titik favorit seperti Purwokerto dan Yogyakarta, membuktikan konsistensi mutu dan kepercayaan ribuan pelanggan.",
    point: "04"
  }
];
