### Import Libraries

```python
from customtkinter import *
import numpy as np
```

- `from customtkinter import *`: Mengimpor semua fungsi dari modul `customtkinter`, yang merupakan versi modifikasi dari `tkinter` dengan penampilan yang lebih modern.
- `import numpy as np`: Mengimpor library `numpy`, yang digunakan untuk operasi matematika pada array dan matriks.

### Set Appearance and Scaling

```python
mode = "light"
set_appearance_mode(mode)
set_widget_scaling(1)
set_window_scaling(1)
```

- `mode = "light"`: Menetapkan mode tampilan aplikasi menjadi "light" (terang).
- `set_appearance_mode(mode)`: Mengatur mode tampilan sesuai dengan variabel `mode`.
- `set_widget_scaling(1)`: Mengatur skala widget ke nilai default (1).
- `set_window_scaling(1)`: Mengatur skala jendela ke nilai default (1).

### Class Definition and Initialization

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

- `class MatrixCalc(CTk)`: Mendefinisikan kelas `MatrixCalc` yang merupakan subclass dari `CTk`.
- `def __init__(self)`: Fungsi inisialisasi yang dijalankan saat objek kelas dibuat.
- `super().__init__()`: Memanggil inisialisasi dari kelas induk (`CTk`).
- `self.title("Matrix Kalkulator by Kelompok 5")`: Menetapkan judul jendela aplikasi.
- `self.geometry("625x450")`: Mengatur ukuran awal jendela aplikasi.
- `self.grid_columnconfigure((0, 1), weight=1)`: Mengatur konfigurasi kolom grid agar kolom 0 dan 1 dapat merentang secara proporsional.
- `self.grid_rowconfigure(2, weight=1)`: Mengatur konfigurasi baris grid agar baris 2 dapat merentang secara proporsional.
- `self.minsize(500, 350)`: Mengatur ukuran minimal jendela.

### Frame Judul

```python
        self.framej = CTkFrame(self, border_width=2)
        self.framej.grid(row=0, column=0, padx=10, pady=(10, 0), sticky="nswe")
        self.framej.grid_columnconfigure(0, weight=1)
```

- `self.framej = CTkFrame(self, border_width=2)`: Membuat frame (bingkai) baru dengan border width (ketebalan tepi) 2.
- `self.framej.grid(...)`: Menempatkan frame di grid pada baris 0, kolom 0 dengan padding.
- `self.framej.grid_columnconfigure(0, weight=1)`: Mengatur kolom dalam frame agar dapat merentang secara proporsional.

### Label Judul

```python
        self.label = CTkLabel(master=self.framej, text="Matrix Calculator", font=("Arial", 20, "bold"))
        self.label.grid(row=0, column=0, padx=15, pady=10, sticky="nsw")
```

- `self.label = CTkLabel(...)`: Membuat label dengan teks "Matrix Calculator".
- `self.label.grid(...)`: Menempatkan label di dalam frame judul (`self.framej`).

### Switch Mode

```python
        self.switch_var = StringVar(value="light")
        self.switch = CTkSwitch(self.framej, text="", command=self.switch_event, width=5,
            variable=self.switch_var, onvalue="light", offvalue="dark")
        self.switch.grid(row=0, column=1, pady=0, padx=5, sticky="e")
```

- `self.switch_var = StringVar(value="light")`: Membuat variabel string dengan nilai awal "light".
- `self.switch = CTkSwitch(...)`: Membuat switch untuk mengubah mode tampilan antara "light" dan "dark".
- `self.switch.grid(...)`: Menempatkan switch di dalam frame judul.

### Frame Main

```python
        self.frame_main2 = CTkFrame(self, border_width=2)
        self.frame_main2.grid(row=1, column=0, pady=(10, 5), sticky="ns")
        self.frame_main2.grid_columnconfigure((0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10), weight=1)
        self.frame_main = CTkFrame(self, border_width=2)
        self.frame_main.grid(row=2, column=0, padx=10, pady=10, sticky="swe")
        self.frame_main.grid_columnconfigure((0, 1), weight=1)
```

- `self.frame_main2 = CTkFrame(self, border_width=2)`: Membuat frame utama kedua.
- `self.frame_main2.grid(...)`: Menempatkan frame di grid pada baris 1, kolom 0.
- `self.frame_main2.grid_columnconfigure(...)`: Mengatur konfigurasi kolom dalam frame agar dapat merentang.
- `self.frame_main = CTkFrame(self, border_width=2)`: Membuat frame baru bernama `frame_main` dengan lebar border 2 piksel.
  - `CTkFrame` adalah widget frame dari `customtkinter` yang digunakan untuk menempatkan dan mengatur tata letak widget lain di dalamnya.
- `self.frame_main.grid(row=2, column=0, padx=10, pady=10, sticky="swe")`: Menempatkan `frame_main` di grid dengan konfigurasi berikut:
  - `row=2`: Menempatkan frame pada baris ke-2 dari grid utama.
  - `column=0`: Menempatkan frame pada kolom ke-0 dari grid utama.
  - `padx=10`: Memberikan padding (jarak) horizontal sebesar 10 piksel di kedua sisi frame.
  - `pady=10`: Memberikan padding (jarak) vertikal sebesar 10 piksel di kedua sisi frame.
  - `sticky="swe"`: Membuat frame menempel (stretch) ke arah selatan (bawah), barat (kiri), dan timur (kanan) dari sel grid yang ditempati.
- `self.frame_main.grid_columnconfigure((0, 1), weight=1)`: Mengatur konfigurasi kolom di dalam `frame_main`:
  - `(0, 1)`: Menunjukkan bahwa kolom 0 dan kolom 1 di dalam `frame_main` akan diatur konfigurasinya.
  - `weight=1`: Memberikan bobot yang sama untuk kedua kolom ini sehingga mereka akan membagi ruang yang tersedia secara proporsional.

### Slider dan Label

```python
        self.slidercol = CTkSlider(master=self.frame_main, from_=1, to=10, number_of_steps=9, orientation='horizontal')
        self.slidercol.grid(row=0, column=1, padx=10, pady=5, sticky="we")
        self.slidercol.bind("<ButtonRelease-1>", self.update_entries)
        self.slidercol.set(5)
```

- `self.slidercol = CTkSlider(...)`: Membuat slider untuk memilih jumlah kolom matriks.
- `self.slidercol.grid(...)`: Menempatkan slider di grid.
- `self.slidercol.bind(...)`: Menghubungkan event saat slider dilepas dengan fungsi `update_entries`.
- `self.slidercol.set(5)`: Menetapkan nilai awal slider menjadi 5.

### Entry Fields

```python
        self.entries = []
        self.create_entries()
```

- `self.entries = []`: Membuat daftar untuk menyimpan entri (input) matriks.
- `self.create_entries()`: Memanggil fungsi untuk membuat entri matriks berdasarkan nilai slider.

### Frame Hasil

```python
        self.frame_hasil = CTkFrame(self, border_width=2)
        self.frame_hasil.grid(row=0, column=1, padx=(0, 10), pady=10, sticky="nswe", rowspan=3)
        self.frame_hasil.grid_columnconfigure(0, weight=1)
```

- `self.frame_hasil = CTkFrame(...)`: Membuat frame untuk menampilkan hasil kalkulasi.
- `self.frame_hasil.grid(...)`: Menempatkan frame hasil di grid dan mengatur agar merentang beberapa baris.

### Buttons and Labels

```python
        self.button_inverse = CTkButton(master=self.frame_hasil, text="Inverse", command=self.find_inverse, font=("Arial", 14))
        self.button_inverse.grid(row=0, column=0, padx=15, pady=(10, 5), sticky="we")
```

- `self.button_inverse = CTkButton(...)`: Membuat tombol untuk menghitung invers matriks.
- `self.button_inverse.grid(...)`: Menempatkan tombol di grid dalam frame hasil.

### Display Results

```python
        self.label_hasil = CTkLabel(master=self.frame_hasil, text="Hasil :", font=("Arial", 14), wraplength=280, justify="left")
        self.label_hasil.grid(row=3, column=0, padx=15, pady=10, sticky="w")
```

- `self.label_hasil = CTkLabel(...)`: Membuat label untuk menampilkan hasil kalkulasi.
- `self.label_hasil.grid(...)`: Menempatkan label di grid dalam frame hasil.

### Calculation Functions

```python
    def find_inverse(self):
        try:
            matrix = self.get_matrix_from_entries()
            inverse = np.linalg.inv(matrix)
            self.display_result("Inverse:\n" + str(inverse))
        except Exception as e:
            self.display_result("Error: " + str(e))
```

- `def find_inverse(self)`: Mendefinisikan fungsi untuk menghitung invers matriks.
- `matrix = self.get_matrix_from_entries()`: Mendapatkan nilai matriks dari entri.
- `inverse = np.linalg.inv(matrix)`: Menghitung invers matriks menggunakan `numpy`.
- `self.display_result("Inverse:\n" + str(inverse))`: Menampilkan hasil invers.

Fungsi serupa juga digunakan untuk menghitung determinan (`find_determinant`) dan transpose (`find_transpose`).

### Main Application Loop

```python
app = MatrixCalc()
app.mainloop()
```

- `app = MatrixCalc()`: Membuat instance dari kelas `MatrixCalc`.
- `app.mainloop()`: Memulai loop utama aplikasi untuk menangani event.

Dokumentasi di atas memberikan penjelasan baris per baris untuk memudahkan pemula memahami cara kerja kode aplikasi kalkulator matriks.

Tentu, berikut adalah penjelasan lanjutan mengenai beberapa bagian kode yang sebelumnya belum dijelaskan secara detail:

### Switch Event

```python
    def switch_event(self):
        global mode
        mode = self.switch_var.get()
        set_appearance_mode(mode)
        self.update_widgets()
```

- `def switch_event(self)`: Mendefinisikan fungsi `switch_event` yang dipanggil saat switch ditekan.
- `global mode`: Menggunakan variabel global `mode`.
- `mode = self.switch_var.get()`: Mengatur nilai `mode` sesuai dengan nilai saat ini dari switch.
- `set_appearance_mode(mode)`: Mengatur mode tampilan berdasarkan nilai `mode`.
- `self.update_widgets()`: Memanggil fungsi `update_widgets` untuk memperbarui tampilan widget sesuai dengan mode baru.

### Update Widgets (Not Implemented)

```python
    def update_widgets(self):
        # Mengatur ulang tampilan widget dengan mode yang baru
        pass
```

- `def update_widgets(self)`: Mendefinisikan fungsi `update_widgets`.
- `pass`: Placeholder yang menunjukkan bahwa fungsi ini belum diimplementasikan. Fungsi ini seharusnya digunakan untuk memperbarui tampilan semua widget berdasarkan mode tampilan yang baru.

### Zero Function

```python
    def zero(self, integer):
        try:
            float_value = float(integer)
            if float_value == int(float_value):
                return int(float_value)
            return float_value
        except ValueError:
            return None
```

- `def zero(self, integer)`: Mendefinisikan fungsi `zero` yang menghilangkan angka nol di belakang koma pada bilangan desimal.
- `try`: Memulai blok try untuk menangani kesalahan.
- `float_value = float(integer)`: Mengubah nilai `integer` menjadi tipe float.
- `if float_value == int(float_value)`: Memeriksa apakah nilai float sama dengan nilai integer (tanpa angka desimal).
- `return int(float_value)`: Jika ya, mengembalikan nilai sebagai integer.
- `return float_value`: Jika tidak, mengembalikan nilai sebagai float.
- `except ValueError`: Jika terjadi kesalahan konversi, menangkap kesalahan dan mengembalikan `None`.

### Create Entries

```python
    def create_entries(self):
        for row in range(int(self.sliderrow.get())):
            row_entries = []
            for col in range(int(self.slidercol.get())):
                entry = CTkEntry(master=self.frame_main2, width=40)
                entry.grid(row=row, column=col, sticky="we")
                row_entries.append(entry)
            self.entries.append(row_entries)
```

- `def create_entries(self)`: Mendefinisikan fungsi `create_entries` untuk membuat entri matriks.
- `for row in range(int(self.sliderrow.get()))`: Loop melalui jumlah baris yang ditentukan oleh slider.
- `row_entries = []`: Membuat daftar untuk menyimpan entri pada baris tertentu.
- `for col in range(int(self.slidercol.get()))`: Loop melalui jumlah kolom yang ditentukan oleh slider.
- `entry = CTkEntry(master=self.frame_main2, width=40)`: Membuat entri baru dengan lebar 40.
- `entry.grid(row=row, column=col, sticky="we")`: Menempatkan entri di grid.
- `row_entries.append(entry)`: Menambahkan entri ke dalam daftar baris.
- `self.entries.append(row_entries)`: Menambahkan daftar baris ke dalam daftar entri utama.

### Update Entries

```python
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

- `def update_entries(self, event)`: Mendefinisikan fungsi `update_entries` yang dipanggil saat slider dilepas.
- `for row in self.entries`: Loop melalui daftar entri yang ada.
- `for entry in row`: Loop melalui entri pada setiap baris.
- `entry.destroy()`: Menghapus entri dari grid.
- `self.entries.clear()`: Mengosongkan daftar entri.
- `self.create_entries()`: Membuat ulang entri berdasarkan nilai slider yang baru.
- `self.label_slidercol.configure(...)`: Memperbarui teks label kolom dengan nilai slider saat ini.
- `self.label_sliderrow.configure(...)`: Memperbarui teks label baris dengan nilai slider saat ini.

### Get Matrix from Entries

```python
    def get_matrix_from_entries(self):
        matrix = []
        for row_entries in self.entries:
            row_values = [self.zero(entry.get()) for entry in row_entries]
            matrix.append(row_values)
        return np.array(matrix)
```

- `def get_matrix_from_entries(self)`: Mendefinisikan fungsi `get_matrix_from_entries` untuk mengambil nilai dari entri matriks.
- `matrix = []`: Membuat daftar untuk menyimpan nilai matriks.
- `for row_entries in self.entries`: Loop melalui setiap baris entri.
- `row_values = [self.zero(entry.get()) for entry in row_entries]`: Mengambil nilai dari setiap entri dalam baris dan mengubahnya dengan fungsi `zero`.
- `matrix.append(row_values)`: Menambahkan nilai baris ke dalam matriks.
- `return np.array(matrix)`: Mengembalikan matriks sebagai array `numpy`.

### Display Result

```python
    def display_result(self, result):
        self.label_hasil.configure(text=result)

        # Update history
        self.history_text.configure(state='normal')
        self.history_text.insert('end', result + '\n\n')
        self.history_text.configure(state='disabled')
```

- `def display_result(self, result)`: Mendefinisikan fungsi `display_result` untuk menampilkan hasil kalkulasi.
- `self.label_hasil.configure(text=result)`: Mengatur teks label hasil dengan hasil kalkulasi.
- `self.history_text.configure(state='normal')`: Mengatur state teks riwayat ke 'normal' agar dapat diedit.
- `self.history_text.insert('end', result + '\n\n')`: Menambahkan hasil ke dalam teks riwayat.
- `self.history_text.configure(state='disabled')`: Mengatur state teks riwayat ke 'disabled' agar tidak dapat diedit.

### Find Inverse

```python
    def find_inverse(self):
        try:
            matrix = self.get_matrix_from_entries()
            inverse = np.linalg.inv(matrix)
            self.display_result("Inverse:\n" + str(inverse))
        except Exception as e:
            self.display_result("Error: " + str(e))
```

- `def find_inverse(self)`: Mendefinisikan fungsi `find_inverse` untuk menghitung invers matriks.
- `try`: Memulai blok try untuk menangani kesalahan.
- `matrix = self.get_matrix_from_entries()`: Mendapatkan matriks dari entri.
- `inverse = np.linalg.inv(matrix)`: Menghitung invers matriks menggunakan `numpy`.
- `self.display_result("Inverse:\n" + str(inverse))`: Menampilkan hasil invers.
- `except Exception as e`: Menangkap kesalahan jika terjadi.
- `self.display_result("Error: " + str(e))`: Menampilkan pesan kesalahan.

### Find Determinant

```python
    def find_determinant(self):
        try:
            matrix = self.get_matrix_from_entries()
            determinant = np.linalg.det(matrix)
            self.display_result("Determinant: " + str(self.zero(determinant)))
        except Exception as e:
            self.display_result("Error: " + str(e))
```

- `def find_determinant(self)`: Mendefinisikan fungsi `find_determinant` untuk menghitung determinan matriks.
- `matrix = self.get_matrix_from_entries()`: Mendapatkan matriks dari entri.
- `determinant = np.linalg.det(matrix)`: Menghitung determinan matriks menggunakan `numpy`.
- `self.display_result("Determinant: " + str(self.zero(determinant)))`: Menampilkan hasil determinan.
- `except Exception as e`: Menangkap kesalahan jika terjadi.
- `self.display_result("Error: " + str(e))`: Menampilkan pesan kesalahan.

### Find Transpose

```python
    def find_transpose(self):
        try:
            matrix = self.get_matrix_from_entries()
            transpose = np.transpose(matrix)
            self.display_result("Transpose:\n" + str(transpose))
        except Exception as e:
            self.display_result("Error: " + str(e))
```

- `def find_transpose(self)`: Mendefinisikan fungsi `find_transpose` untuk menghitung transpose matriks.
- `matrix = self.get_matrix_from_entries()`: Mendapatkan matriks dari entri.
- `transpose = np.transpose(matrix)`: Menghitung transpose matriks menggunakan `numpy`.
- `self.display_result("Transpose:\n" + str(transpose))`: Menampilkan hasil transpose.
- `except Exception as e`: Menangkap kesalahan jika terjadi.
- `self.display_result("Error: " + str(e))`: Menampilkan pesan kesalahan.

Dengan penjelasan ini, setiap bagian kode sudah dijelaskan dengan detail untuk memudahkan pemula memahami cara kerja aplikasi kalkulator matriks ini.

Ya, saya akan melanjutkan dan memastikan bahwa setiap bagian kode dijelaskan dengan lengkap.

### Frame Hasil

```python
    # Frame Hasil
    self.frame_hasil = CTkFrame(self, border_width=2)
    self.frame_hasil.grid(row=0, column=1, padx=(0, 10), pady=10, sticky="nswe", rowspan=3)
    self.frame_hasil.grid_columnconfigure(0, weight=1)
```

- `self.frame_hasil = CTkFrame(self, border_width=2)`: Membuat frame baru dengan border width 2 untuk menampilkan hasil perhitungan.
- `self.frame_hasil.grid(...)`: Menempatkan frame ini pada grid di baris 0 dan kolom 1, dengan padding di sekitar dan menyebar pada tiga baris (`rowspan=3`).
- `self.frame_hasil.grid_columnconfigure(0, weight=1)`: Mengatur kolom di dalam `frame_hasil` agar dapat diperluas.

### Buttons

```python
    # Buttons
    self.button_inverse = CTkButton(master=self.frame_hasil, text="Inverse", command=self.find_inverse, font=("Arial", 14))
    self.button_inverse.grid(row=0, column=0, padx=15, pady=(10, 5), sticky="we")

    self.button_determinant = CTkButton(master=self.frame_hasil, text="Determinant", command=self.find_determinant, font=("Arial", 14))
    self.button_determinant.grid(row=1, column=0, padx=15, pady=5, sticky="we")

    self.button_transpose = CTkButton(master=self.frame_hasil, text="Transpose", command=self.find_transpose, font=("Arial", 14))
    self.button_transpose.grid(row=2, column=0, padx=15, pady=5, sticky="we")
```

- `self.button_inverse = CTkButton(...)`: Membuat tombol `Inverse` yang memanggil fungsi `find_inverse` saat ditekan.
- `self.button_inverse.grid(...)`: Menempatkan tombol `Inverse` di grid pada baris 0 dan kolom 0.
- `self.button_determinant = CTkButton(...)`: Membuat tombol `Determinant` yang memanggil fungsi `find_determinant` saat ditekan.
- `self.button_determinant.grid(...)`: Menempatkan tombol `Determinant` di grid pada baris 1 dan kolom 0.
- `self.button_transpose = CTkButton(...)`: Membuat tombol `Transpose` yang memanggil fungsi `find_transpose` saat ditekan.
- `self.button_transpose.grid(...)`: Menempatkan tombol `Transpose` di grid pada baris 2 dan kolom 0.

### Label Hasil

```python
    # Hasil
    self.label_hasil = CTkLabel(master=self.frame_hasil, text="Hasil :", font=("Arial", 14), wraplength=280, justify="left")
    self.label_hasil.grid(row=3, column=0, padx=15, pady=10, sticky="w")
```

- `self.label_hasil = CTkLabel(...)`: Membuat label untuk menampilkan hasil kalkulasi.
- `self.label_hasil.grid(...)`: Menempatkan label hasil di grid pada baris 3 dan kolom 0.

### Riwayat Penghitungan

```python
    # Riwayat Penghitungan
    self.history_text = CTkTextbox(master=self.frame_hasil, height=200, width=30)
    self.history_text.grid(row=4, column=0, padx=10, pady=(5, 10), sticky="nswe")
    self.history_text.configure(state='disabled')
```

- `self.history_text = CTkTextbox(...)`: Membuat textbox untuk menampilkan riwayat penghitungan.
- `self.history_text.grid(...)`: Menempatkan textbox di grid pada baris 4 dan kolom 0.
- `self.history_text.configure(state='disabled')`: Mengatur textbox agar tidak dapat diedit oleh pengguna.

### Main Loop

```python
app = MatrixCalc()
app.mainloop()
```

- `app = MatrixCalc()`: Membuat instance dari kelas `MatrixCalc`.
- `app.mainloop()`: Menjalankan aplikasi dalam loop utama, yang membuat aplikasi tetap berjalan dan menunggu interaksi pengguna.

Dengan ini, semua bagian kode telah dijelaskan secara detail. Jika ada bagian yang kurang jelas atau memerlukan penjelasan lebih lanjut, jangan ragu untuk bertanya.
