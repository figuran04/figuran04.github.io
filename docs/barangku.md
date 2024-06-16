---
layout: doc
---

# BarangKu

<a href="https://drive.google.com/u/0/uc?id=116dB4InGsfLMO_PNccoyKC-UJOdshiN2&export=download" target="blank">Download</a>

Software ini adalah aplikasi berbasis terminal untuk mengelola data dan persediaan barang. Aplikasi ini memungkinkan pengguna untuk menambah, melihat, dan menghapus data serta persediaan barang. Terdiri dari dua modul utama yaitu `main.py` dan `Customize.py`.

## Struktur File

1. **main.py**: File utama yang mengatur alur program dan interaksi pengguna.
2. **Customize.py**: Modul yang berisi kelas `Main` yang menangani operasi-operasi utama seperti menambah, melihat, dan menghapus data.

```markdown
BarangKu
├─ main.py
└─ Customize.py
```

## Modul `main.py`

### Import

```python
import os
from Customize import Main
```

Modul `os` digunakan untuk membersihkan layar terminal sesuai dengan sistem operasi. Modul `Main` dari `Customize.py` digunakan untuk mengelola data dan barang.

### Fungsi `bersihkanLayar`

```python
def bersihkanLayar():
    sistemOperasi = os.name
    match sistemOperasi:
        case 'posix': os.system('clear')
        case 'nt': os.system('cls')
```

Membersihkan layar terminal. Untuk sistem operasi berbasis Unix (`posix`), menggunakan perintah `clear`. Untuk Windows (`nt`), menggunakan perintah `cls`.

### Fungsi `namaProgram`

```python
def namaProgram():
    print(" ____                              _  __")
    print("| __ )  __ _ _ __ __ _ _ __   __ _| |/ /   _")
    print("|  _ \ / _` | '__/ _` | '_ \ / _` | ' / | | |")
    print("| |_) | (_| | | | (_| | | | | (_| | . \ |_| |")
    print("|____/ \__,_|_|  \__,_|_| |_|\__, |_|\_\__,_|")
    print("                             |___/")
```

Menampilkan judul program dengan seni ASCII.

### Fungsi `subProgram`

```python
def subProgram(namaFile, judul, tipe):
    bersihkanLayar()
    namaProgram()
    main = Main(namaFile, judul, tipe)
    main.buatFile()
    main.lihat()
    with open(namaFile, 'r') as file:
        datas = file.readlines()
        if not datas:
            print('[1]Tambah [2]Kembali')
            ubah = input('Pilih opsi(1-2): ')
            ubah = errorHandling(ubah, 1, 2, '')
            bersihkanLayar()
            if tipe == 1:
                if ubah == 1:
                    try:
                        with open('barang.txt', 'x') as file:
                            namaProgram()
                            input('Cek persediaan barang(Enter untuk melanjutkan)')
                    except:
                        with open('barang.txt', 'r') as file:
                            dataBarang = file.readlines()
                            if not dataBarang:
                                namaProgram()
                                input('Cek persediaan barang(Enter untuk melanjutkan)')
                    namaProgram()
                    main.tambah()
                elif ubah == 2: print('Kembali')
            elif tipe == 2:
                if ubah == 1: main.tambah()
                elif ubah == 2: print('Kembali')

        else:
            if tipe == 1:
                print('[1]Tambah [2]Lunasi [3]Kembali')
                ubah = input('Pilih opsi(1-3): ')
                ubah = errorHandling(ubah, 1, 3, '')
            elif tipe == 2:
                print('[1]Tambah [2]Hapus [3]Kembali')
                ubah = input('Pilih opsi(1-3): ')
                ubah = errorHandling(ubah, 1, 3, '')
            bersihkanLayar()
            if ubah == 1: main.tambah()
            elif ubah == 2: main.hapus()
            elif ubah == 3: print('Kembali')
```

Fungsi ini mengelola tampilan dan interaksi saat pengguna memilih untuk melihat data atau persediaan barang. Menangani logika untuk menambah dan menghapus data berdasarkan input pengguna.

### Fungsi `errorHandling`

```python
def errorHandling(Var, nilai1, nilai2, pilihan):
    while True:
        if halamanAwal == 1: bersihkanLayar()
        try:
            Var = int(Var)
            if nilai1 <= Var <= nilai2: return Var
            else:
                if halamanAwal == 1:
                    namaProgram()
                    print(pilihan)
                print(f'Input harus antara {nilai1} dan {nilai2}')
                Var = input(f'Pilih opsi({nilai1}-{nilai2}): ')
        except:
            if Var == '':
                if halamanAwal == 1:
                    namaProgram()
                    print(pilihan)
                print('Input tidak boleh kosong')
            else:
                if halamanAwal == 1:
                    namaProgram()
                    print(pilihan)
                print('Input harus berupa angka')
            Var = input(f'Pilih opsi({nilai1}-{nilai2}): ')
```

Menangani kesalahan input dari pengguna, memastikan input berada dalam rentang yang diharapkan dan merupakan angka.

### Alur Program Utama

```python
while True:
    pilih = None
    halamanAwal = 1
    bersihkanLayar()
    namaProgram()
    print('[1]Lihat data [2]Persediaan Barang [3]Keluar')
    pilih = input('Pilih opsi(1-3): ')
    pilih = errorHandling(pilih, 1, 3, '[1]Lihat data [2]Persediaan Barang [3]Keluar')
    halamanAwal = 0
    if pilih == 1:
        subProgram('data.txt', 'Data', pilih)
    elif pilih == 2:
        subProgram('barang.txt', 'List barang', pilih)
    elif pilih == 3: break
```

Program dijalankan dalam loop utama yang terus berulang hingga pengguna memilih untuk keluar. Pengguna dapat memilih untuk melihat data, melihat persediaan barang, atau keluar dari program.

## Modul `Customize.py`

### Kelas `Main`

```python
class Main:
    def __init__(self, namaFile, judul, tipe):
        self.namaFile = namaFile
        self.judul = judul
        self.tipe = tipe
```

Konstruktor untuk inisialisasi objek dengan nama file, judul, dan tipe operasi (data atau barang).

### Fungsi `buatFile`

```python
    def buatFile(self):
        try:
            with open(self.namaFile, 'r') as file:
                data = file.readlines()
        except FileNotFoundError:
            file = open(self.namaFile, 'w')
            file.close()
```

Membuat file baru jika file yang ditentukan tidak ditemukan.

### Fungsi `lihat`

```python
    def lihat(self):
        with open(self.namaFile, 'r') as file:
            datas = file.readlines()
            if not datas: print('Belum ada data')
            else:
                print(f'{self.judul}: ')
                if self.tipe == 1:
                    for i, baris in enumerate(datas, 1):
                        print(f'{i}. {baris.strip()}')
                elif self.tipe == 2:
                    for i, baris in enumerate(datas, 1):
                        data = baris.strip().split(', ')
                        namaBarang = data[0].split(':')[1].strip()
                        hargaBarang = data[1].split(':')[1].strip()
                        print(f'{i}. {namaBarang}, {hargaBarang}')
```

Menampilkan isi file. Format tampilan disesuaikan dengan tipe operasi (data atau barang).

### Fungsi `handling`

```python
    def handling(Param, teks1, model, teks2):
        while True:
            if model == 1:
                if Param == '':
                    print('Input tidak boleh kosong')
                    Param = input(f'{teks1}: ')
                else: return Param
            elif model == 2:
                try:
                    Param = int(Param)
                    return Param
                except:
                    if Param == '': print('Input tidak boleh kosong')
                    else: print('Input harus berupa angka')
                    Param = input(f'{teks1}: ')
            elif model == 3:
                try:
                    Param = int(Param)
                    if teks1 <= Param <= teks2: return Param
                    else:
                        print('Angka tidak ada dalam pilihan')
                        Param = input('Pilih (masukkan angka): ')
                except:
                    if Param == '': print('Input tidak boleh kosong')
                    else: print('Input harus berupa angka')
                    Param = input('Pilih (masukkkan angka): ')
```

Fungsi statis untuk menangani kesalahan input yang mirip dengan `errorHandling` pada `main.py`.

### Fungsi `tambah`

```python
    def tambah(self):
        if self.tipe == 1:
            with open('barang.txt', 'r') as file:
                dataBarang = file.readlines()
                if not dataBarang: print('Belum ada data')
                else:
                    nama = input('Nama: ')
                    nama = Main.handling(nama, 'Nama', 1, '')
                    npm = input('NPM: ')
                    npm = Main.handling(npm, 'NPM', 2, '')
                    print(f'{self.judul}: ')
                    for i, hasil in enumerate(dataBarang, 1):
                        print(f'{i}. {hasil.strip()}')
                    pilih = input('Pilih (masukkan angka): ')
                    pilih = Main.handling(pilih, 1, len(dataBarang), 3)
                    lamaPinjam = input('Lama hari penyewaan: ')
                    lamaPinjam = Main.handling(lamaPinjam, 'Lama hari penyewaan', 2, '')
                    barang = dataBarang[pilih-1].strip().split(',')
                    barang = barang[0].split(':')[1].strip()
                    harga = dataBarang[pilih-1].strip().split(',')
                    harga = harga[1].split(':')[1].strip()
                    total = int(lamaPinjam)*int(harga)
                    hasilAkhir = f'Nama: {nama}, NPM: {npm}, Nama barang: {barang}, Total harga: {total}\n'
                    with open(self.namaFile, 'a') as file:
                        file.write(hasilAkhir)
        elif self.tipe == 2:
            namaBarang = input('Nama barang: ')
            namaBarang = Main.handling(namaBarang, 'Nama barang', 1, '')
            hargaBarang = input('Harga per hari: ')
            hargaBarang = Main.handling(hargaBarang, 'Harga per hari', 2, '')
            hasilAkhir = f'Nama barang: {namaBarang}, Harga per hari: {hargaBarang}\n'
            with open(self.namaFile, 'a') as file:
                file.write(hasilAkhir)
```

Menambah data baru ke file. Proses penambahan berbeda tergantung pada tipe operasi (data atau barang).

### Fungsi `hapus`

```python
    def hapus(self):
        if self.tipe == 1:
            with open(self.namaFile, 'r') as file:
                datas = file.readlines()
            if not datas:
                print('Tidak ada data')
            else:
                for i, data in enumerate(datas, 1):
                    print(f'{i}. {data.strip()}')
                pilih = input('Pilih data yang akan dihapus (masukkan angka): ')
                pilih = Main.handling(pilih, 1, len(datas), 3)
                del datas[pilih-1]
                with open(self.namaFile, 'w') as file:
                    for data in datas:
                        file.write(data)
        elif self.tipe == 2:
            with open(self.namaFile, 'r') as file:
                datas = file.readlines()
            if not datas:
                print('Tidak ada barang')
            else:
                for i, data in enumerate(datas, 1):
                    print(f'{i}. {data.strip()}')
                pilih = input('Pilih barang yang akan dihapus (masukkan angka): ')
                pilih = Main.handling(pilih, 1, len(datas), 3)
                del datas[pilih-1]
                with open(self.namaFile, 'w') as file:
                    for data in datas:
                        file.write(data)
```

Menghapus data dari file. Proses penghapusan juga berbeda tergantung pada tipe operasi (data atau barang).

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'images/safiul.jpg',
    name: 'Muhammad Safiul Rifki',
    title: '2310506005',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/_safiulrifki/' },
    ]
  },
  {
    avatar: 'images/dika.jpg',
    name: 'Dika Elsaputra',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/figuran04' },
      { icon: 'instagram', link: 'https://instagram.com/figuran_04' },
    ]
  },
  {
    avatar: 'images/profile.jpg',
    name: 'Hassan Faiz Laudza',
    title: '2320506037',
    links: [
      { icon: 'instagram', link: 'https://instagram.com' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Tim Kami
    </template>
    <template #lead>
      Pengembangan BarangKu dibangun oleh tim mahasiswa Teknologi Informasi, semuanya telah memilih untuk ditampilkan di bawah ini.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
