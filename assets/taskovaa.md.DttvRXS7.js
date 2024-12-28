import{V as s,a as r,b as l}from"./chunks/theme.fQ6Zof7X.js";import{c as u,I as a,w as i,k as t,a3 as g,o,a as e}from"./chunks/framework.Da9NPsf7.js";const k="/assets/diagram-kelas-dark.0Bj9PXla.png",m=g('<h1 id="taskova" tabindex="-1">Taskova <a class="header-anchor" href="#taskova" aria-label="Permalink to &quot;Taskova&quot;">​</a></h1><p><a href="https://github.com/figuran04/taskova" target="blank">Download</a></p><p>Taskova merupakan aplikasi manajemen tugas yang dirancang untuk membantu pengguna dalam mengorganisasi, memprioritaskan, dan menyelesaikan berbagai aktivitas secara efisien. Dengan memanfaatkan konsep Pemrograman Berorientasi Objek (OOP) dalam pengembangannya, Taskova menawarkan sistem yang modular dan mudah dikembangkan.</p><h3 id="diagram-kelas" tabindex="-1">Diagram Kelas <a class="header-anchor" href="#diagram-kelas" aria-label="Permalink to &quot;Diagram Kelas&quot;">​</a></h3><p>Diagram kelas merupakan representasi visual struktur utama aplikasi yang dirancang untuk memenuhi kebutuhan fungsionalitas. Diagram ini mencakup identifikasi kelas utama, atribut, metode, serta hubungan antar kelas. Diagram kelas dari aplikasi Taskova dapat dilihat pada gambar berikut.</p><p><img src="'+k+'" alt="diagram kelas"></p><h3 id="kelas-utama" tabindex="-1">Kelas Utama <a class="header-anchor" href="#kelas-utama" aria-label="Permalink to &quot;Kelas Utama&quot;">​</a></h3><ol><li>Task: Kelas ini merepresentasikan setiap tugas yang dikelola dalam aplikasi.</li><li>Kelas TaskManager: Mengelola kumpulan tugas pengguna.</li><li>Kelas User: Mewakili pengguna aplikasi.</li><li>Kelas Notification: Menangani pemberitahuan dan pengingat tugas.</li><li>Kelas Visualization: Menyediakan fitur visualisasi data.</li></ol><h3 id="hubungan-antar-kelas" tabindex="-1">Hubungan Antar Kelas <a class="header-anchor" href="#hubungan-antar-kelas" aria-label="Permalink to &quot;Hubungan Antar Kelas&quot;">​</a></h3><ol><li>Asosiasi: TaskManager ↔ Task (TaskManager mengelola daftar Task).</li><li>Agregasi: User ↔ TaskManager, TaskManager ↔ Visualization (Visualisasi hanya membaca data dari TaskManager).</li><li>Komposisi: Task ↔ Notification (Notifikasi bergantung pada keberadaan Task).</li></ol><h3 id="daftar-fitur-utama" tabindex="-1">Daftar Fitur Utama <a class="header-anchor" href="#daftar-fitur-utama" aria-label="Permalink to &quot;Daftar Fitur Utama&quot;">​</a></h3><ol><li>Penambahan, Pencarian, dan Penghapusan Tugas</li></ol><ul><li>Membantu pengguna untuk menambah, mencari, dan menghapus tugas.</li><li>Kelas terkait: TaskManager.</li></ul><ol start="2"><li>Mengatur Prioritas dan Kategori Tugas</li></ol><ul><li>Memudahkan pengguna untuk mengelompokkan tugas berdasarkan kategori dan prioritas.</li><li>Kelas terkait:Task</li></ul><ol start="3"><li>Pengaturan Tenggat Waktu dan Pengingat</li></ol><ul><li>Memberikan pengingat otomatis untuk tugas mendekati tenggat waktu.</li><li>Kelas Terkait: Notification, Task.</li></ul><ol start="4"><li>Visualisasi Progres Tugas Pengguna</li></ol><ul><li>Menampilkan progres dalam bentuk grafik atau diagram untuk memotivasi pengguna.</li><li>Kelas Terkait: Visualization, TaskManager.</li></ul><h3 id="hubungan-fitur-dan-kelas" tabindex="-1">Hubungan Fitur dan Kelas <a class="header-anchor" href="#hubungan-fitur-dan-kelas" aria-label="Permalink to &quot;Hubungan Fitur dan Kelas&quot;">​</a></h3><p>Hubungan fitur dan kelas dapat dilihat pada tabel di bawah ini:</p><table><thead><tr><th>Fitur</th><th>Deskripsi</th><th>Kelas yang Terlibat</th></tr></thead><tbody><tr><td>Penambahan, pencarian, penghapusan</td><td>Pengelolaan tugas: tambah, hapus, cari.</td><td>TaskManager</td></tr><tr><td>Mengatur prioritas dan kategori</td><td>Penentuan prioritas tugas, pengelompokan kategori.</td><td>Task</td></tr><tr><td>Pengaturan tenggat waktu/pengingat</td><td>Mengelola pengingat untuk tugas tertentu.</td><td>Notification, Task</td></tr><tr><td>Visualisasi progres</td><td>Menampilkan progres tugas dalam grafik atau diagram.</td><td>Visualization, TaskManager</td></tr></tbody></table><h3 id="taskova-perview" tabindex="-1">Taskova Perview <a class="header-anchor" href="#taskova-perview" aria-label="Permalink to &quot;Taskova Perview&quot;">​</a></h3><p><a href="https://figuran04.github.io/taskova" target="_blank" rel="noreferrer">Review lebih lanjut</a></p>',24),T=JSON.parse('{"title":"Taskova","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"taskovaa.md","filePath":"taskovaa.md","lastUpdated":null}'),d={name:"taskovaa.md"},v=Object.assign(d,{setup(h){const n=[{avatar:"images/profile.jpg",name:"Ida Faizatun Zakiyah",title:"2320506026",links:[{icon:"github",link:"https://github.com/idafaizatun"}]},{avatar:"images/dika.jpg",name:"Dika Elsaputra",title:"2320506032",links:[{icon:"github",link:"https://github.com/figuran04"},{icon:"instagram",link:"https://instagram.com/figuran_04"}]},{avatar:"images/profile.jpg",name:"Fadhila Syahida Wibowo",title:"2320506046",links:[{icon:"github",link:"https://github.com/cimol11uyy"}]},{avatar:"images/profile.jpg",name:"Ariel Numara Ravi Yudhistira",title:"2330506052",links:[{icon:"github",link:"https://github.com/numararavi"}]}];return(p,b)=>(o(),u("div",null,[m,a(t(l),null,{default:i(()=>[a(t(s),null,{title:i(()=>[e(" Tim Kami ")]),lead:i(()=>[e(" Pengembangan BarangKu dibangun oleh tim mahasiswa Teknologi Informasi, semuanya telah memilih untuk ditampilkan di bawah ini. ")]),_:1}),a(t(r),{members:n})]),_:1})]))}});export{T as __pageData,v as default};