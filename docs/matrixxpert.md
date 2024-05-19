---
layout: doc
---

# MatrixXpert

<a href="https://drive.google.com/u/0/uc?id=1I2sF6WMHtGfIhnadrO2cAr8gO0k1Mdjf&export=download">Download</a>

Software MatrixXpert adalah sebuah aplikasi berbasis GUI (Graphical User Interface) yang dibuat menggunakan library `customtkinter` dan `numpy`. Aplikasi ini menyediakan fitur-fitur untuk melakukan operasi dasar pada matriks seperti menghitung invers, determinan, dan transpose dari matriks yang diinput oleh pengguna. Program ini dikembangkan oleh Kelompok 5.

## Fitur Utama

1. **Input Dinamis**: Pengguna dapat menyesuaikan jumlah baris dan kolom matriks menggunakan slider.
2. **Operasi Matriks**:
   - Menghitung invers matriks
   - Menghitung determinan matriks
   - Menghitung transpose matriks
3. **Tampilan yang Dapat Disesuaikan**: Pengguna dapat mengubah mode tampilan antara "light" dan "dark".

## Struktur Program

### 1. Import Library

```python
from customtkinter import *
import numpy as np
```

Library `customtkinter` digunakan untuk membuat antarmuka pengguna, sedangkan `numpy` digunakan untuk melakukan operasi matriks.

### 2. Pengaturan Awal

```python
mode = "light"
set_appearance_mode(mode)
set_widget_scaling(1)
set_window_scaling(1)
```

Mengatur mode tampilan awal dan skala widget serta jendela.

### 3. Kelas `MatrixCalc`

Kelas `MatrixCalc` merupakan turunan dari kelas `CTk` yang mengimplementasikan antarmuka dan logika aplikasi.

#### a. Inisialisasi

```python
class MatrixCalc(CTk):
    def __init__(self):
        super().__init__()
        self.title("Matrix Kalkulator by Kelompok 5")
        self.geometry("625x450")
        ...
```

Metode `__init__` menginisialisasi jendela utama dan mengatur tata letak elemen GUI.

#### b. Switch Mode Tampilan

```python
def switch_event(self):
    global mode
    mode = self.switch_var.get()
    set_appearance_mode(mode)
    self.update_widgets()
```

Metode ini digunakan untuk mengubah mode tampilan antara "light" dan "dark".

#### c. Pembuatan dan Pembaruan Entry Fields

```python
def create_entries(self):
    ...

def update_entries(self, event):
    ...
```

Metode `create_entries` dan `update_entries` bertanggung jawab untuk membuat dan memperbarui entry fields untuk input matriks berdasarkan nilai slider.

#### d. Mengambil Data Matriks dari Entry Fields

```python
def get_matrix_from_entries(self):
    ...
```

Metode ini mengumpulkan data dari entry fields dan mengubahnya menjadi array numpy.

#### e. Menampilkan Hasil

```python
def display_result(self, result):
    ...
```

Metode ini menampilkan hasil operasi matriks pada label hasil dan menambahkan ke riwayat penghitungan.

#### f. Operasi Matriks

```python
def find_inverse(self):
    ...

def find_determinant(self):
    ...

def find_transpose(self):
    ...
```

Metode `find_inverse`, `find_determinant`, dan `find_transpose` melakukan operasi matriks yang sesuai dan menampilkan hasilnya.

### 4. Menjalankan Aplikasi

```python
app = MatrixCalc()
app.mainloop()
```

Bagian ini membuat instance dari kelas `MatrixCalc` dan menjalankan loop utama aplikasi.

## Cara Penggunaan

<a href="https://drive.google.com/u/0/uc?id=1I2sF6WMHtGfIhnadrO2cAr8gO0k1Mdjf&export=download">Download</a>

1. **Menyesuaikan Ukuran Matriks**: Gunakan slider untuk menentukan jumlah baris dan kolom matriks.
2. **Mengisi Matriks**: Masukkan nilai-nilai matriks pada entry fields yang tersedia.
3. **Operasi Matriks**: Klik tombol "Inverse", "Determinant", atau "Transpose" untuk melakukan operasi yang diinginkan.
4. **Mengubah Mode Tampilan**: Gunakan switch untuk beralih antara mode "light" dan "dark".

## Kode Sumber Lengkap

```python
from customtkinter import *
import numpy as np

mode = "light"
set_appearance_mode(mode)
set_widget_scaling(1)
set_window_scaling(1)

class MatrixCalc(CTk):
    def __init__(self):
        super().__init__()
        self.title("Matrix Kalkulator by Kelompok 5")
        self.geometry("625x450")
        self.grid_columnconfigure((0, 1), weight=1)
        self.grid_rowconfigure(2, weight=1)
        self.minsize(500, 350)

        # Frame Judul
        self.framej = CTkFrame(self, border_width=2)
        self.framej.grid(row=0, column=0, padx=10, pady=(10, 0), sticky="nswe")
        self.framej.grid_columnconfigure(0, weight=1)

        # Judul Aplikasi
        self.label = CTkLabel(master=self.framej, text="Matrix Calculator", font=("Arial", 20, "bold"))
        self.label.grid(row=0, column=0, padx=15, pady=10, sticky="nsw")

        self.switch_var = StringVar(value="light")
        self.switch = CTkSwitch(self.framej, text="", command=self.switch_event, width=5,
            variable=self.switch_var, onvalue="light", offvalue="dark")
        self.switch.grid(row=0, column=1, pady=0, padx=5, sticky="e")

        # Frame Main
        self.frame_main2 = CTkFrame(self, border_width=2)
        self.frame_main2.grid(row=1, column=0, pady=(10, 5), sticky="ns")
        self.frame_main2.grid_columnconfigure((0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10), weight=1)
        self.frame_main = CTkFrame(self, border_width=2)
        self.frame_main.grid(row=2, column=0, padx=10, pady=10, sticky="swe")
        self.frame_main.grid_columnconfigure((0, 1), weight=1)

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

        # Entry Fields
        self.entries = []
        self.create_entries()

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

    def switch_event(self):
        global mode
        mode = self.switch_var.get()
        set_appearance_mode(mode)
        self.update_widgets()

    def update_widgets(self):
        # Mengatur ulang tampilan widget dengan mode yang baru
        pass

    # menghilangkan koma 0
    def zero(self, integer):
        try:
            float_value = float(integer)
            if float_value == int(float_value):
                return int(float_value)
            return float_value
        except ValueError:
            return None

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

app = MatrixCalc()
app.mainloop()
```

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'safiul.jpg',
    name: 'Muhammad Safiul Rifki',
    title: '2310506005',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/_safiulrifki/' },
    ]
  },
  {
    avatar: 'wiyandra.jpg',
    name: 'Wiyandra Syaiful Abidin',
    title: '2310506009',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/wiyandra.sfl' },
    ]
  },
  {
    avatar: 'profile.jpg',
    name: 'Meily Adennia',
    title: '2310506013',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/meily.adn' },
    ]
  },
  {
    avatar: 'defa.jpg',
    name: 'Defa Augista Montaine Dhanarto Putera',
    title: '2320506028',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/putra1029384756' },
    ]
  },
  {
    avatar: 'dika.jpg',
    name: 'Dika Elsaputra',
    title: '2320506032',
    links: [
      { icon: 'github', link: 'https://github.com/figuran04' },
      { icon: 'instagram', link: 'https://instagram.com/figuran_04' },
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
