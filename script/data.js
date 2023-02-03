const items = [
  {
    title: 'rendang',
    desc: 'Sobat LaukLama tentu saja pernah mencicipi kuliner yang satu ini, bukan? Pasalnya, makanan yang satu ini menjadi salah satu sajian utama di setiap Rumah Makan Padang yang ada di seluruh penjuru negeri. Ya, apalagi kalau bukan rendang. Rendang merupakan masakan yang berasal dari Minangkabau, terbuat dari olahan daging yang dimasak dengan bumbu rempah. Kuliner yang satu ini begitu digemari karena punya cita rasa yang lezat. Bahkan, tahun 2017 lalu, rendang dinobatkan sebagai makanan terenak nomor 1 versi CNN Travel, lho! Hebat, ya.',
    image: 'rendang.jpg',
  },
  {
    title: 'pempek',
    desc: 'Bicara tentang makanan khas Indonesia, tak akan lengkap jika tak menyebutkan Pempek Palembang. Makanan berbahan daging ikan dan tepung kanji ini konon sudah ada sejak abad ke-16 lho, Sobat LaukLama! Pempek menjadi kuliner favorit masyarakat, karena punya rasa yang komplit. Ada rasa asam, manis, pedas, dan gurih. Pempek juga hadir dalam beberapa jenis, antara lain pempek lenjer, bulat, kulit ikan, dan yang paling terkenal adalah pempek kapal selam, yang berisi telur ayam.',
    image: 'pempek.webp',
  },
  {
    title: 'nasi goreng',
    desc: 'Siapa sih yang tak kenal dengan makanan yang Indonesia banget ini? Saking terkenalnya, makanan ini sudah sangat mendunia dan sering direkomendasikan kepada orang asing yang baru pertama kali ke Indonesia. Rasa nikmat dari nasi goreng sudah diakui oleh dunia. Bahkan, pada tahun 2011 silam, nasi goreng menyabet peringkat kedua dalam daftar "50 Makanan Paling Enak di Dunia" berdasarkan hasil survei CNN Internasional. Sobat LaukLama pasti sudah pernah mencoba dong kuliner yang satu ini?',
    image: 'nasi-goreng.webp',
  },
  {
    title: 'gudeg',
    desc: 'Sobat LaukLama pasti sudah tahu kan kalau Jogja dikenal juga dengan nama Kota Gudeg? Kalau berkunjung ke Jogja, rasanya kurang lengkap jika belum makan gudeg atau dijadikan sebagai oleh-oleh untuk orang tersayang. Gudeg Jogja terkenal dengan rasanya yang manis dan terbuat dari nangka muda yang diolah dengan santan. Makanan khas Jogja ini akan terasa lebih nikmat jika disantap dengan nasi hangat, kuah santan kental, ayam kampung, tempe, tahu, dan telur.',
    image: 'gudeg.webp',
  },
  {
    title: 'nasi liwet',
    desc: 'Setelah puas menyantap kuliner di Jogja,  Sobat LaukLama bisa melanjutkan wisata kuliner ke kota yang letaknya cukup dekat dengan Jogja, yakni Kota Solo. Di sini, Sobat LaukLama bisa kembali memanjakan perut dengan menyantap nasi liwet. Sudah tahu dong pasti dengan kuliner yang satu ini? Nasi liwet adalah nasi yang dimasak dengan santan dan punya rasa yang gurih, mirip dengan nasi uduk. Nasi ini disajikan dengan suwiran ayam, areh (santan kental), dan sayur labu siam. Rasanya benar-benar gurih sekali. Cocok disantap saat sarapan maupun makan malam.',
    image: 'nasi-liwet.webp',
  },
  {
    title: 'tengkleng',
    desc: 'Sobat LaukLama mungkin juga tak asing dengan Tengkleng. Makanan berkuah yang terbuat dari tulang kambing ini memang selalu menjadi incaran wisatawan yang berkunjung ke Solo. Ada cerita menarik lho mengenai kuliner yang satu ini. Konon, di masa lampau hanya para bangsawan dan orang Belanda lah yang mampu menyantap daging kambing, sedangkan para juru masak dan pekerja hanya bisa makan kepala, kaki, dan tulang saja. Dari sanalah muncul ide untuk mengolah tulang-tulang dengan daging yang sedikit tersebut menjadi kuliner yang mirip dengan gulai kambing. Kemudian, terciptalah tengkleng dengan kuah yang lebih encer dibandingkan gulai.',
    image: 'tengkleng.webp',
  },
  {
    title: 'bakso',
    desc: 'Inilah makanan khas Indonesia yang bisa ditemukan di hampir seluruh daerah di Indonesia, mulai dari kota besar hingga ke desa-desa. Makanan yang berupa bola daging ini biasanya terbuat dari campuran daging sapi giling dan tepung tapioka. Kini, bakso hadir dalam jenis yang lebih variatif dan tidak selalu berbentuk bulat lho, Sobat LaukLama. Satu porsi bakso biasanya akan disajikan dengan kuah kaldu dan diberi topping berupa mie, tahu, bawang goreng, dan seledri. ',
    image: 'bakso.webp',
  },
  {
    title: 'lumpia',
    desc: 'Kuliner nikmat yang ada #DiIndonesiaAja belum habis nih, Sobat LaukLama. Kalau sebelumnya sudah ada makanan berat, saatnya Sobat LaukLama mencoba jajanan yang terkenal dari Semarang, yakni lumpia. Jika dilihat dari sejarahnya, lumpia merupakan jajanan tradisional yang berasal dari Tiongkok. Lumpia merupakan hasil olahan dari tepung beras yang dibentuk menjadi lembaran yang sangat tipis kemudian diberi berbagai macam isian, seperti rebung, telur, daging, sayuran segar, atau makanan laut.',
    image: 'lumpia.webp',
  },
  {
    title: 'rawon',
    desc: 'Jika Sobat LaukLama menyukai kuliner yang terbuat dari aneka olahan daging, Indonesia punya banyak sekali makanan khas yang terbuat dari daging. Salah satunya adalah rawon. Sup daging dengan kuah kental berwarna hitam ini merupakan makanan khas yang berasal dari Jawa Timur. Warna hitam gelap pada rawon dihasilkan oleh kluwek dicampur dengan potongan daging sapi yang lembut. Rawon biasanya disajikan dengan nasi, tauge, daun bawang, telur asin, dan daun kerupuk udang sebagai pelengkap.',
    image: 'rawon.webp',
  },
  {
    title: 'sate lilit',
    desc: 'Untuk Sobat LaukLama yang sedang atau akan ke Bali, perlu menjadikan sate lilit sebagai menu yang akan Sobat LaukLama santap ketika berlibur, ya! Sate yang menjadi ikon dari kuliner Bali ini cukup mudah ditemukan di berbagai lokasi wisata, seperti di Badung, Denpasar, hingga Gianyar. Untuk yang belum pernah mencoba, sate lilit itu apa sih? Berbeda dari sate pada umumnya yang berupa tusukan potongan daging, sate lilit berbentuk gumpalan adonan yang terbuat dari daging yang membalut tusuk sate. Selain itu, sate ini juga tidak dihidangkan dengan bumbu kacang, karena bumbu adonannya sudah kaya akan cita rasa.',
    image: 'sate-lilit.webp',
  },
];
