Untuk menjalankan command terminal dan **mendeteksi apakah program sudah selesai atau belum** di Node.js, kamu bisa gunakan module built-in `child_process`. Ada dua metode utama:

---

## ✅ 1. **Menggunakan `exec()`**

> Cocok untuk perintah ringan atau hasil output pendek (karena ada batas buffer)

```js
import { exec } from 'child_process'

exec('echo Hello dari Terminal', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`)
    return
  }
  console.log(`✅ Output:\n${stdout}`)
})
```

---

## ✅ 2. **Menggunakan `spawn()`**

> Lebih fleksibel, cocok untuk program berat, menampilkan output realtime

```js
import { spawn } from 'child_process'

// Contoh menjalankan perintah `ls -la`
const ls = spawn('ls', ['-la'])

ls.stdout.on('data', (data) => {
  console.log(`📄 stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
  console.error(`⚠️ stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`🚀 Proses selesai dengan kode keluar: ${code}`)
})
```

---

## 🧠 Cara Mengetahui Program Selesai

* `exec()` → callback terakhir dijalankan **saat program selesai**
* `spawn()` → gunakan event listener `.on('close', callback)` untuk mendeteksi program sudah selesai
* `spawn()` juga punya `.on('exit', ...)` jika kamu hanya ingin tahu status keluar

---

## 🧪 Contoh Jalankan FFmpeg

Misalnya menjalankan FFmpeg dan menunggu hingga selesai:

```js
import { spawn } from 'child_process'

const ffmpeg = spawn('ffmpeg', ['-i', 'input.mp4', '-t', '10', 'output.mp4'])

ffmpeg.stdout.on('data', (data) => {
  console.log(`📥 stdout: ${data}`)
})

ffmpeg.stderr.on('data', (data) => {
  console.error(`⚠️ stderr: ${data}`)
})

ffmpeg.on('close', (code) => {
  console.log(`✅ FFmpeg selesai dengan kode: ${code}`)
})
```

---

## ⛏ Tips Tambahan

| Hal yang Diinginkan      | Metode                            |
| ------------------------ | --------------------------------- |
| Butuh output hasil       | Gunakan `exec()`                  |
| Butuh proses berat/live  | Gunakan `spawn()`                 |
| Butuh sinkronisasi penuh | Bungkus dalam `Promise` / `await` |

---

## 🔁 Bungkus dalam Promise (versi async/await)

```js
function runCommand(cmd, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args)
    let output = ''

    child.stdout.on('data', (data) => output += data.toString())
    child.stderr.on('data', (err) => console.error('stderr:', err.toString()))
    child.on('close', (code) => {
      if (code === 0) resolve(output)
      else reject(new Error(`Process exited with code ${code}`))
    })
  })
}

// Contoh pemakaian
const result = await runCommand('ls', ['-la'])
console.log(result)
```

---

Kalau kamu ingin **menjalankan command di Termux**, atau ingin output disimpan ke file, atau bahkan menjalankan command dari input pengguna — saya bisa bantu buatkan juga versinya!


Tentu! Mari kita bahas **cara menjalankan program Python dan command lainnya secara universal** di Node.js menggunakan `child_process`, lalu **mendeteksi apakah prosesnya selesai atau gagal**, **dengan penjelasan rinci dan contoh nyata**.

---

## 🔧 DASAR: Import `child_process`

```js
import { spawn } from 'child_process'
```

> Gunakan `spawn` karena lebih fleksibel dan mendukung output besar dan streaming.

---

## ✅ CONTOH 1: Menjalankan Program Python

Misalnya kamu ingin menjalankan file `script.py` yang ada di folder project.

### 📄 `script.py`

```python
# script.py
print("Halo dari Python!")
```

### 🚀 `runPython.js`

```js
import { spawn } from 'child_process'

const runPython = spawn('python3', ['script.py'])

runPython.stdout.on('data', (data) => {
  console.log(`📥 Output Python:\n${data.toString()}`)
})

runPython.stderr.on('data', (data) => {
  console.error(`❌ Error Python:\n${data.toString()}`)
})

runPython.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Python program selesai dengan sukses')
  } else {
    console.error(`⚠️ Python program keluar dengan kode: ${code}`)
  }
})
```

---

## ✅ CONTOH 2: Menjalankan Command Umum (Universal)

```js
function runCommand(cmd, args = []) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { shell: true })
    let output = ''

    proc.stdout.on('data', data => output += data.toString())
    proc.stderr.on('data', err => console.error(`⚠️ STDERR:\n${err.toString()}`))
    
    proc.on('close', code => {
      if (code === 0) {
        resolve(output.trim())
      } else {
        reject(new Error(`❌ Gagal dijalankan, kode: ${code}`))
      }
    })
  })
}
```

### 🔍 Cara Pakai:

```js
const result = await runCommand('echo', ['"Hello from shell!"'])
console.log(result)
```

---

## 💡 CARA MENJALANKAN:

| Tujuan                   | Cara panggil                              |
| ------------------------ | ----------------------------------------- |
| Jalankan Python          | `spawn('python3', ['script.py'])`         |
| Jalankan Bash script     | `spawn('bash', ['script.sh'])`            |
| Jalankan Termux command  | `spawn('termux-<command>', [...args])`    |
| Jalankan perintah sistem | `spawn('ls', ['-la'])`                    |
| Jalankan ffmpeg          | `spawn('ffmpeg', ['-i', 'vid.mp4', ...])` |

---

## 🧠 PENJELASAN BAGIAN `spawn(command, args, options)`

| Parameter             | Penjelasan                                                             |
| --------------------- | ---------------------------------------------------------------------- |
| `command`             | Nama perintah (contoh: `python3`, `ls`, `ffmpeg`)                      |
| `args`                | Array dari argumen yang dikirim ke command                             |
| `options.shell: true` | Perlu diaktifkan jika kamu pakai string command seperti `"echo hello"` |
| `stdout.on('data')`   | Menangkap output dari program                                          |
| `stderr.on('data')`   | Menangkap error dari program                                           |
| `on('close')`         | Dipanggil saat proses selesai                                          |

---

## ✅ BONUS: Menjalankan Python & Ambil Output

```js
async function runPythonScript(file) {
  try {
    const output = await runCommand('python3', [file])
    console.log('Output dari Python:', output)
  } catch (err) {
    console.error('Terjadi error:', err.message)
  }
}

await runPythonScript('script.py')
```

---

Kalau kamu butuh versi untuk **Termux**, **Windows**, atau butuh menjalankan dan mengirim input ke Python dari Node.js (bi-directional), aku bisa bantu buatkan juga!
