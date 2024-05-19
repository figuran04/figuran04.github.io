---
layout: doc
---

# MatrixXpert

Program ini adalah sebuah aplikasi kalkulator matriks berbasis GUI (Graphical User Interface) yang dibuat menggunakan pustaka `customtkinter` dan `numpy`. Aplikasi ini menyediakan fungsi untuk menghitung invers, determinan, dan transpose dari sebuah matriks. Program ini juga memungkinkan pengguna untuk mengatur ukuran matriks menggunakan slider dan menampilkan hasil penghitungan beserta riwayat penghitungan.

## Struktur Kode

Kode ini terdiri dari beberapa bagian:

1.  [Inisialisasi dan Pengaturan Tampilan](#_1-inisialisasi-dan-pengaturan-tampilan)
2.  [Definisi Kelas MatrixCalc](#_2-definisi-kelas-matrixcalc)
    - [Inisialisasi GUI](#a-inisialisasi-gui)
    - [Frame dan Label](#b-frame-dan-label)
    - [Slider untuk Mengatur Ukuran Matriks](#c-slider-untuk-mengatur-ukuran-matriks)
    - [Bidang Input Matriks](#d-bidang-input-matriks)
    - [Frame Hasil dan Tombol Operasi](#e-frame-hasil-dan-tombol-operasi)
3.  [Metode untuk Mengelola Event dan Penghitungan](#_3-metode-untuk-mengelola-event-dan-penghitungan)
    - [Mengubah Mode Tampilan](#a-mengubah-mode-tampilan)
    - [Mengelola Entri Matriks](#b-mengelola-entri-matriks)
    - [Fungsi Penghitungan Matriks](#c-fungsi-penghitungan-matriks)

## 1. Inisialisasi dan Pengaturan Tampilan

Pada bagian ini, mode tampilan diatur ke mode "light", dan pengaturan skala widget serta window dilakukan.

```python
from customtkinter import *
import numpy as np

mode = "light"
set_appearance_mode(mode)
set_widget_scaling(1)
set_window_scaling(1)
```

## 2. Definisi Kelas `MatrixCalc`

Kelas `MatrixCalc` adalah turunan dari `CTk`, yang merupakan kerangka utama untuk GUI aplikasi ini.

### a. Inisialisasi GUI

Metode `__init__` menginisialisasi GUI, mengatur judul, ukuran, dan tata letak window.

```python
class MatrixCalc(CTk):
    def __init__(self):
        super().__init__()
        self.title("Matrix Kalkulator by Kelompok 5")
        self.geometry("625x450")
        self.grid_columnconfigure((0, 1), weight=1)
        self.grid_rowconfigure(2, weight=1)
        self.minsize(500, 350)
```

### b. Frame dan Label

Membuat frame untuk judul aplikasi dan menambahkan label "Matrix Calculator" serta switch untuk mengganti mode tampilan.

```python
        # Frame Judul
        self.framej = CTkFrame(self, border_width=2)
        self.framej.grid(row=0, column=0, padx=10, pady=(10, 0), sticky="nswe")
        self.framej.grid_columnconfigure(0, weight=1)

        # Judul Aplikasi
        self.label = CTkLabel(master=self.framej, text="Matrix Calculator", font=("Arial", 20, "bold"))
        self.label.grid(row=0, column=0, padx=15, pady=10, sticky="nsw")

        self.switch_var = StringVar(value="light")
        self.switch = CTkSwitch(self.framej, text="", command=self.switch_event, width=5, variable=self.switch_var, onvalue="light", offvalue="dark")
        self.switch.grid(row=0, column=1, pady=0, padx=5, sticky="e")
```

### c. Slider untuk Mengatur Ukuran Matriks

Menambahkan slider untuk mengatur jumlah kolom dan baris dari matriks, beserta label untuk menampilkan nilai slider.

```python
        # Slider Option
        self.slidercol = CTkSlider(master=self.frame_main, from_=1, to=10, number_of_steps=9, orientation='horizontal')
        self.slidercol.grid(row=0, column=1, padx=10, pady=5, sticky="we")
        self.slidercol.bind("<ButtonRelease-1>", self.update_entries)
        self.slidercol.set(5)

        self.label_slidercol = CTkLabel(master=self.frame_main, text="Kolom: 5", font=("Arial", 14))
        self.label_slidercol.grid(row=0, column=0, padx=10, pady=5, sticky="w")

        self.sliderrow = CTkSlider(master=self.frame_main, from_=1, to=10, number_of_steps=9, orientation='horizontal')
        self.sliderrow.grid(row=1, column=1, padx=10, pady=5, sticky="we")
        self.sliderrow.bind("<ButtonRelease-1>", self.update_entries)
        self.sliderrow.set(5)

        self.label_sliderrow = CTkLabel(master=self.frame_main, text="Baris: 5", font=("Arial", 14))
        self.label_sliderrow.grid(row=1, column=0, padx=10, pady=5, sticky="w")
```

### d. Bidang Input Matriks

Menambahkan entri untuk input elemen matriks berdasarkan nilai dari slider.

```python
        # Entry Fields
        self.entries = []
        self.create_entries()
```

### e. Frame Hasil dan Tombol Operasi

Membuat frame untuk hasil penghitungan serta menambahkan tombol untuk menghitung invers, determinan, dan transpose matriks.

```python
        # Frame Hasil
        self.frame_hasil = CTkFrame(self, border_width=2)
        self.frame_hasil.grid(row=0, column=1, padx=(0, 10), pady=10, sticky="nswe", rowspan=3)
        self.frame_hasil.grid_columnconfigure(0, weight=1)

        # Buttons
        self.button_inverse = CTkButton(master=self.frame_hasil, text="Inverse", command=self.find_inverse, font=("Arial", 14))
        self.button_inverse.grid(row=0, column=0, padx=15, pady=(10, 5), sticky="we")

        self.button_determinant = CTkButton(master=self.frame_hasil, text="Determinant", command=self.find_determinant, font=("Arial", 14))
        self.button_determinant.grid(row=1, column=0, padx=15, pady=5, sticky="we")

        self.button_transpose = CTkButton(master=self.frame_hasil, text="Transpose", command=self.find_transpose, font=("Arial", 14))
        self.button_transpose.grid(row=2, column=0, padx=15, pady=5, sticky="we")

        # Hasil
        self.label_hasil = CTkLabel(master=self.frame_hasil, text="Hasil :", font=("Arial", 14), wraplength=280, justify="left")
        self.label_hasil.grid(row=3, column=0, padx=15, pady=10, sticky="w")

        # Riwayat Penghitungan
        self.history_text = CTkTextbox(master=self.frame_hasil, height=200, width=30)
        self.history_text.grid(row=4, column=0, padx=10, pady=(5, 10), sticky="nswe")
        self.history_text.configure(state='disabled')
```

## 3. Metode untuk Mengelola Event dan Penghitungan

### a. Mengubah Mode Tampilan

Metode `switch_event` untuk mengubah mode tampilan aplikasi.

```python
    def switch_event(self):
        global mode
        mode = self.switch_var.get()
        set_appearance_mode(mode)
        self.update_widgets()
```

### b. Mengelola Entri Matriks

Metode `create_entries` dan `update_entries` untuk membuat dan memperbarui entri matriks sesuai dengan nilai slider.

```python
    def create_entries(self):
        for row in range(int(self.sliderrow.get())):
            row_entries = []
            for col in range(int(self.slidercol.get())):
                entry = CTkEntry(master=self.frame_main2, width=40)
                entry.grid(row=row, column=col, sticky="we")
                row_entries.append(entry)
            self.entries.append(row_entries)

    def update_entries(self, event):
        # Clear existing entries
        for row in self.entries:
            for entry in row:
                entry.destroy()
        self.entries.clear()

        # Recreate entries based on slider values
        self.create_entries()

        # Update slider labels
        self.label_slidercol.configure(text=f"Kolom: {self.zero(self.slidercol.get())}")
        self.label_sliderrow.configure(text=f"Baris: {self.zero(self.sliderrow.get())}")
```

### c. Fungsi Penghitungan Matriks

Metode untuk mendapatkan matriks dari entri, menampilkan hasil, dan melakukan operasi matriks (inverse, determinan, transpose).

```python
    def get_matrix_from_entries(self):
        matrix = []
        for row_entries in self.entries:
            row_values = [self.zero(entry.get()) for entry in row_entries]
            matrix.append(row_values)
        return np.array(matrix)

    def display_result(self, result):
        self.label_hasil.configure(text=result)

        # Update history
        self.history_text.configure(state='normal')
        self.history_text.insert('end', result + '\n\n')
        self.history_text.configure(state='disabled')

    def find_inverse(self):
        try:
            matrix = self.get_matrix_from_entries()
            inverse = np.linalg.inv(matrix)
            self.display_result("Inverse:\n" + str(inverse))
        except Exception as e:
            self.display_result("Error: " + str(e))

    def find_determinant(self):
        try:
            matrix = self.get_matrix_from_entries()
            determinant = np.linalg.det(matrix)
            self.display_result("Determinant: " + str(determinant))
        except Exception as e:
            self.display_result("Error: " + str(e))

    def find_transpose(self):
        try:
            matrix = self.get_matrix_from_entries()
            transpose = np.transpose(matrix)
            self.display_result("Transpose:\n" + str(transpose))
        except Exception as e:
            self.display_result("Error: " + str(e))
```

## Menjalankan Program

Untuk menjalankan program ini, cukup buat instance dari kelas `MatrixCalc` dan panggil `mainloop`.

```python
app = MatrixCalc()
app.mainloop()
```

::: info

1. Program ini menggunakan pustaka `customtkinter` yang perlu diinstal terlebih dahulu.
2. Pastikan juga pustaka `numpy` telah terinstal untuk melakukan operasi matriks.

:::

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
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
