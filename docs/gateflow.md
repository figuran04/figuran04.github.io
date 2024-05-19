# GateFlow

<a href="//drive.google.com/u/0/uc?id=1khdOn-9qqM90tgaGY_aN74PopAVMjkR7&export=download">Download</a>

Software `Gate Flow` merupakan software gerbang logika yang bertujuan untuk memenuhi kebutuhan dan kelancaran proses belajar mengajar pada salah satu materi perkuliahan rangkaian digital.

## Fungsi Utama

Terdapat definisi fungsi-fungsi yang merepresentasikan operasi gerbang logika seperti `AND`, `OR`, `NOT`, `XOR`, `NOR`, `NAND`, dan `XNOR`. Setiap fungsi menerima parameter yang sesuai dengan operasi logika yang dilakukan dan mengembalikan hasil operasi tersebut.

```python
def gerbang_and(P, Q):
	return (P and Q)

def gerbang_or(P, Q):
	return (P or Q)

def gerbang_not(P):
	return not(P)

def gerbang_xor(P, Q):
	return (P or Q) and not (P and Q)

def gerbang_nor(P, Q):
	return not(P or Q)

def gerbang_nand(P, Q):
	return not(P and Q)

def gerbang_xnor(P, Q):
	return not(gerbang_xor(P, Q))
```

## Fungsi Tambahan

Ini adalah fungsi untuk mengatasi kesalahan yang diinputkan oleh user atau biasa disebut `Error Handling`. Alasan fungsi ini dibuat untuk mempermudah dalam mengatasi error yang akan diinputkanoeh user.

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

## Menu

Program meminta pengguna untuk memilih operasi gerbang logika yang diinginkan.

```python
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
pilihan = validasi_input(pilihan, "| Masukkan pilihan (1-8):", 8, 1, '| Input harus antara 1 and 8')
```

## Input P & Q

Pengguna diminta untuk memasukkan nilai `P` dan `Q` (jika diperlukan) yang kemudian digunakan dalam operasi yang dipilih.

```python
p = None
q = None

if hasil_terakhir is None:
    p = input("| Masukkan nilai P (0/1): ")
    p = validasi_input(p, "| Masukkan nilai P (0/1): ", 1, 0, '| Input harus 1 or 0')
    p = bool(p)
else:
    p = hasil_terakhir

if pilihan != 3:  # Operasi NOT tidak memerlukan nilai kedua
    print('| P:', p)
    q = input("| Masukkan nilai Q (0/1): ")
    q = validasi_input(q, "| Masukkan nilai Q (0/1): ", 1, 0, '| Input harus 1 or 0')
    q = bool(q)
    print('| Q:', q)
```

## Memanggil Fungsi

```python
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
```

## Pilihan

Program ini memberikan opsi kepada pengguna untuk melanjutkan, memulai ulang, atau keluar dari program.

```python
print('| [1] Lanjut\n| [2] Mulai Ulang\n| [3] Keluar')
cont = input('| Masukkan pilihan (1-3): ')
cont = validasi_input(cont, '| Masukkan pilihan (1-3): ', 3, 1, '| Input harus antara 1 and 3')

if cont == 3:
    break
```

Jika pengguna memilih keluar dari program, hasil terakhir dari operasi gerbang logika yang dilakukan akan ditampilkan sebelum program benar-benar berhenti.

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Meily Adennia',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Armando Firlian Ihza Yulianton',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Athifah Mufidah',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Wahyu Nur Hidayat',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Dika Elsaputra',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
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
      Pengembangan MatrixXpert dibangun oleh tim mahasiswa Teknologi Informasi, semuanya telah memilih untuk ditampilkan di bawah ini.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
