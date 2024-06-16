---
layout: doc
---

# GateFlow

<a href="https://drive.google.com/u/0/uc?id=1khdOn-9qqM90tgaGY_aN74PopAVMjkR7&export=download" target="blank">Download</a>

Software `Gate Flow` merupakan software berbasis terminal yang memungkinkan pengguna untuk melakukan operasi gerbang logika dasar (AND, OR, NOT, XOR, NOR, NAND, dan XNOR). Aplikasi ini memungkinkan pengguna untuk memasukkan nilai-nilai biner (0 atau 1) dan memilih operasi logika yang diinginkan, kemudian menampilkan hasilnya. Pengguna juga dapat melanjutkan dengan hasil operasi terakhir atau memulai ulang dari awal.

## Struktur File

1. **main.py**: File utama yang mengatur alur program, interaksi pengguna, dan operasi logika.

## Deskripsi Fungsi

### Fungsi Operasi Logika

1. **gerbang_and(P, Q)**

```python
def gerbang_and(P, Q):
    return (P and Q)
```

Mengembalikan hasil operasi logika AND dari dua input biner.

2. **gerbang_or(P, Q)**

```python
def gerbang_or(P, Q):
    return (P or Q)
```

Mengembalikan hasil operasi logika OR dari dua input biner.

3. **gerbang_not(P)**

```python
def gerbang_not(P):
    return not(P)
```

Mengembalikan hasil operasi logika NOT dari satu input biner.

4. **gerbang_xor(P, Q)**

```python
def gerbang_xor(P, Q):
    return (P or Q) and not (P and Q)
```

Mengembalikan hasil operasi logika XOR dari dua input biner.

5. **gerbang_nor(P, Q)**

```python
def gerbang_nor(P, Q):
    return not(P or Q)
```

Mengembalikan hasil operasi logika NOR dari dua input biner.

6. **gerbang_nand(P, Q)**

```python
def gerbang_nand(P, Q):
    return not(P and Q)
```

Mengembalikan hasil operasi logika NAND dari dua input biner.

7. **gerbang_xnor(P, Q)**

```python
def gerbang_xnor(P, Q):
    return not(gerbang_xor(P, Q))
```

Mengembalikan hasil operasi logika XNOR dari dua input biner.

### Fungsi Validasi Input

```python
def validasi_input(w, teks, lebih, kurang, teksValidasi):
    while True:
        try:
            w = int(w)
            if w > lebih or w < kurang:
                raise ValueError(teksValidasi)
            return w
        except ValueError as e:
            if w == '':
                print('| Input tidak boleh kosong')
            else:
                print(teksValidasi)
            w = input(teks)
```

Fungsi ini menangani validasi input dari pengguna, memastikan input berupa angka dalam rentang yang ditentukan dan tidak kosong.

## Alur Program Utama

```python
hasil_terakhir = None

while True:
    print('+-------------------------------')
    print("| MASUKKAN OPERASI GERBANG ")
    print('+-------------------------------')
    print("| [1] AND".ljust(10), "[5] NOR")
    print("| [2] OR".ljust(10), "[6] NAND")
    print("| [3] NOT".ljust(10), "[7] XNOR")
    print("| [4] XOR".ljust(10), "[8] Keluar")
    if hasil_terakhir != None:
        if cont == 1:
            print('| P:', hasil_terakhir)
    pilihan = input("| Masukkan pilihan (1-8): ")
    pilihan = validasi_input(pilihan, "| Masukkan pilihan (1-8):", 8, 1, '| Input harus antara 1 dan 8')

    if pilihan == 8:
        if hasil_terakhir != None:
            print('+-------------------------------')
            print(f"| Hasil terakhir: {hasil_terakhir}")
            print('+-------------------------------')
        else:
            print("| Program dihentikan.")
        break

    operasi = None
    p = None
    q = None

    if hasil_terakhir is None:
        p = input("| Masukkan nilai P (0/1): ")
        p = validasi_input(p, "| Masukkan nilai P (0/1): ", 1, 0, '| Input harus 1 atau 0')
        p = bool(p)
    else:
        p = hasil_terakhir

    if pilihan != 3:  # Operasi NOT tidak memerlukan nilai kedua
        print('| P:', p)
        q = input("| Masukkan nilai Q (0/1): ")
        q = validasi_input(q, "| Masukkan nilai Q (0/1): ", 1, 0, '| Input harus 1 atau 0')
        q = bool(q)
        print('| Q:', q)

    if pilihan == 1:
        hasil = gerbang_and(p, q)
        operasi = "AND"
    elif pilihan == 2:
        hasil = gerbang_or(p, q)
        operasi = "OR"
    elif pilihan == 3:
        hasil = gerbang_not(p)
        operasi = "NOT"
    elif pilihan == 4:
        hasil = gerbang_xor(p, q)
        operasi = "XOR"
    elif pilihan == 5:
        hasil = gerbang_nor(p, q)
        operasi = "NOR"
    elif pilihan == 6:
        hasil = gerbang_nand(p, q)
        operasi = "NAND"
    elif pilihan == 7:
        hasil = gerbang_xnor(p, q)
        operasi = "XNOR"

    print('+-------------------------------')
    print(f"| Hasil dari P {operasi} Q adalah: {hasil}")
    print('+-------------------------------')
    hasil_terakhir = hasil
    print('| [1] Lanjut\n| [2] Mulai Ulang\n| [3] Keluar')
    cont = input('| Masukkan pilihan (1-3): ')
    cont = validasi_input(cont, '| Masukkan pilihan (1-3): ', 3, 1, '| Input harus antara 1 dan 3')
    if cont == 3:
        break

if pilihan != 8:
    print('+-------------------------------')
    print(f"| Hasil terakhir: {hasil_terakhir}")
    print('+-------------------------------')
exit_program = input('Tekan Enter untuk keluar')
```

### Deskripsi Alur

1. Program dimulai dengan menampilkan menu operasi logika.
2. Pengguna memilih operasi yang diinginkan (1-8).
3. Program memvalidasi input pengguna.
4. Jika pengguna memilih untuk keluar (8), program akan menampilkan hasil terakhir (jika ada) dan berhenti.
5. Jika pengguna memilih operasi selain NOT (3), program meminta nilai Q.
6. Program melakukan operasi logika yang dipilih dan menampilkan hasilnya.
7. Pengguna dapat memilih untuk melanjutkan dengan hasil terakhir, memulai ulang, atau keluar.

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'images/profile.jpg',
    name: 'Meily Adennia',
    title: '2310506013',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/meily.adn' }
    ]
  },
  {
    avatar: 'images/profile.jpg',
    name: 'Armando Firlian Ihza Yulianton',
    title: '2310506016',
    links: [
      { icon: 'instagram', link: 'https://instagram.com' }
    ]
  },
  {
    avatar: 'images/profile.jpg',
    name: 'Athifah Mufidah',
    title: '2320506017',
    links: [
      { icon: 'instagram', link: 'https://instagram.com' }
    ]
  },
  {
    avatar: 'images/profile.jpg',
    name: 'Wahyu Nur Hidayat',
    title: '2320506027',
    links: [
      { icon: 'instagram', link: 'https://instagram.com' }
    ]
  },
  {
    avatar: 'images/dika.jpg',
    name: 'Dika Elsaputra',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/figuran04' },
      { icon: 'instagram', link: 'https://instagram.com/figuran_04' }
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
      Pengembangan GateFlow dibangun oleh tim mahasiswa Teknologi Informasi, semuanya telah memilih untuk ditampilkan di bawah ini.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
