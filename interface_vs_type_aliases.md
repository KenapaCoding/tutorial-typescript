
# Debat Penggunaan Interface atau Type Aliases

## 1. Membuat Interface Sederhana

### Menggunakan Interface:
```typescript
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "John Doe",
  age: 25,
  isAdmin: false,
};
```

### Menggunakan Type Alias:
```typescript
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  name: "John Doe",
  age: 25,
  isAdmin: false,
};
```

## 2. Properti yang Opsional

### Menggunakan Interface:
```typescript
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const user2: User = {
  name: "Jane Doe",
  age: 30,
  // isAdmin bersifat opsional
};
```

### Menggunakan Type Alias:
```typescript
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

const user2: User = {
  name: "Jane Doe",
  age: 30,
  // isAdmin bersifat opsional
};
```

## 3. Method di dalam Interface atau Type Alias

### Menggunakan Interface:
```typescript
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
  greet(): string;
}

const user3: User = {
  name: "Alice",
  age: 22,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};
```

### Menggunakan Type Alias:
```typescript
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
  greet(): string;
};

const user3: User = {
  name: "Alice",
  age: 22,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};
```

## 4. Penggabungan Interface dan Type Alias

### Menggunakan Interface:
Interface di TypeScript dapat digabungkan secara otomatis jika memiliki nama yang sama. Ini dikenal sebagai interface merging.
```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person1: Person = {
  name: "Bob",
  age: 40,
};
```

### Menggunakan Type Alias:
Type alias tidak mendukung merging. Sebagai gantinya, Anda dapat menggabungkan beberapa tipe menggunakan intersection types dengan `&`.
```typescript
type Person = {
  name: string;
};

type Age = {
  age: number;
};

type PersonWithAge = Person & Age;

const person1: PersonWithAge = {
  name: "Bob",
  age: 40,
};
```

## 5. Pewarisan Interface dan Type Alias

### Menggunakan Interface:
Interface mendukung pewarisan menggunakan kata kunci `extends`.
```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Charlie",
  age: 28,
  employeeId: 1234,
};
```

### Menggunakan Type Alias:
Type alias tidak memiliki keyword `extends`, tetapi Anda dapat menggunakan intersection types (`&`) untuk "mewarisi" properti dari type alias lain.
```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};

const emp: Employee = {
  name: "Charlie",
  age: 28,
  employeeId: 1234,
};
```

## 6. Index Signatures

### Menggunakan Interface:
Index signatures memungkinkan pembuatan objek yang memiliki properti dengan kunci dinamis.
```typescript
interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  welcome: "Selamat Datang",
  goodbye: "Selamat Tinggal",
};
```

### Menggunakan Type Alias:
```typescript
type StringMap = {
  [key: string]: string;
};

const translations: StringMap = {
  welcome: "Selamat Datang",
  goodbye: "Selamat Tinggal",
};
```

## 7. Interface atau Type Alias untuk Function Types

### Menggunakan Interface:
```typescript
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
```

### Menggunakan Type Alias:
```typescript
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

## Alasan Developer Memilih Type Alih-alih Interface

### Fleksibilitas Tipe:
Type alias bisa digunakan untuk mendefinisikan berbagai tipe, bukan hanya objek. Misalnya, type bisa digunakan untuk union, intersection, primitive types, fungsi, tuple, dan banyak lagi.

### Penggunaan Intersection:
Type alias mendukung intersection types yang memungkinkan penggabungan beberapa tipe menjadi satu. Hal ini serupa dengan inheritance pada interface, tetapi banyak developer merasa penggunaan intersection types lebih mudah dan lebih konsisten dengan tipe lainnya di TypeScript.

Misalnya:
```typescript
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

const person: Person = { name: "Alice", age: 25 };
```

### Kejelasan dan Penghindaran Penggabungan Otomatis:
Banyak developer merasa bahwa fitur interface merging bisa menimbulkan kebingungan. Type alias tidak mendukung merging secara otomatis, sehingga memberikan kontrol penuh kepada developer.

### Consistency Across Types:
Dengan menggunakan type alias untuk segala jenis tipe, developer dapat menjaga konsistensi dalam seluruh codebase.

## Alasan Interface Masih Direkomendasikan dalam Situasi Tertentu

### Inheritance yang Natural:
Interface menyediakan mekanisme inheritance yang alami, mirip dengan paradigma OOP (Object-Oriented Programming).

### Interface Merging:
Merging di interface memungkinkan ekstensi interface yang sama di berbagai tempat tanpa menyebabkan masalah.

### Penggunaan pada Library:
Banyak library besar, seperti React atau Express.js, menggunakan interface untuk mendefinisikan tipe-tipe objek.

## Kesimpulan
Pernyataan bahwa interface lebih cocok untuk objek yang kompleks sering dikaitkan dengan fitur inheritance dan merging yang dimiliki oleh interface. Namun, type alias sering lebih disarankan karena fleksibilitas dan kemampuan yang lebih luas.

## Rekomendasi Praktis
- Gunakan interface jika Anda mendefinisikan struktur objek yang bisa diekspansi.
- Gunakan type alias untuk tipe lainnya (fungsi, union, tuple) atau jika Anda lebih menyukai pendekatan yang lebih fleksibel.
