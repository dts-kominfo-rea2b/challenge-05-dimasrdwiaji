const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (nameArray, sortType) => {
  // Return sorted name (ascendingly or descendingly based on sortType)
  let result = sortType(nameArray);

  // Create index number + 1
  let indexNumber = [];
  for (const element of nameArray) {
    indexNumber.push(nameArray.indexOf(element) + 1);
  }

  // Merged index number + 1 and sortedName
  let mergedArr = [];
  for (let i = 0; i < nameArray.length; i++) {
    mergedArr.push(`${indexNumber[i]}. ${result[i]}`);
  }
  return mergedArr;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (nameArray) => {
  // Sort array ascendingly
  let sortedName = nameArray.sort();

  return sortedName;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (nameArray) => {
  // Sort array ascendingly
  let sortedName = nameArray.reverse();

  return sortedName;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
