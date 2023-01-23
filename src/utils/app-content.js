const homePage = {
    id: {
      title: 'Aplikasi Catatan',
      nav: {
        home: 'Beranda',
        archives: 'Terarsip'
      },
      msg: {
        loading: 'Memuat data...',
        error: 'Ada kesalahan teknis. Coba lagi nanti.'
      },
      add: 'Tambah',
      cancel: 'Batal',
      delete: 'Hapus',
      archive: 'Arsipkan',
      unarchive: 'Batalkan Arsip',
      back: 'Kembali',
      pageNotFound: 'Halaman Tidak Ditemukan.'
    },
    en: {
      title: 'Notes App',
      nav: {
        home: 'Home',
        archives: 'Archived'
      },
      msg: {
        loading: 'Loading...',
        error: 'Error. Try again later.'
      },
      add: 'Add',
      cancel: 'Cancel',
      delete: 'Delete',
      archive: 'Archive',
      unarchive: 'Unarchive',
      back: 'Back',
      pageNotFound: 'Page Not Found'
    }
  };
  
  const loginPage = {
    id: {
      header: 'Login untuk menggunakan aplikasi.',
      footer: 'Belum punya akun?',
      footerRegisterLink: 'Daftar disini'
    },
    en: {
      header: 'Login to use app.',
      footer: 'Don\'t have an account?',
      footerRegisterLink: 'Register here'
    }
  };
  
  const registerPage = {
    id: {
      header: 'Isi form untuk mendaftar akun.',
      footer: 'Sudah punya akun?',
      footerLoginLink: 'Login disini',
      msg: {
        registerSuccess: 'Akun berhasil dibuat.',
        wrongConfrimPassword: 'Konfirmasi password tidak sesuai.'
      }
    },
    en: {
      header: 'Fill the form to register account.',
      footer: 'Already have an account?',
      footerLoginLink: 'Login here',
      msg: {
        registerSuccess: 'User created successfully.',
        wrongConfrimPassword: 'The confirmation password does not match.'
      }
    }
  };
  
  const notePage = {
    id: {
      header: 'Catatan',
      searchPlaceholder: 'Cari berdasarkan judul ...',
      empty: 'Tidak ada catatan.'
    },
    en: {
      header: 'Notes',
      searchPlaceholder: 'Search by title ...',
      empty: 'No notes here.'
    }
  };
  
  const newNotePage = {
    id: {
      titlePlaceholder: 'Judul',
      bodyPlaceholder: 'Catatan'
    },
    en: {
      titlePlaceholder: 'Title',
      bodyPlaceholder: 'Notes'
    }
  };
  
  const detailNotePage = {
    id: {
      notFound: 'Catatan tidak ditemukan.'
    },
    en: {
      notFound: 'Not Found.'
    }
  };
  
  const archivePage = {
    id: {
      header: 'Catatan Arsip'
    },
    en: {
      header: 'Archived Notes'
    }
  };
  
  const content = {
    homePage,
    loginPage,
    registerPage,
    notePage,
    newNotePage,
    detailNotePage,
    archivePage
  };
  
  export {
    homePage,
    loginPage,
    registerPage,
    notePage,
    newNotePage,
    detailNotePage,
    archivePage
  };
  
  export default content;
  