//Đầu vào: Nhập số nguyên và lưu trữ trong mảng
var lstNumber = [];
function addNumber() {
  var number = document.getElementById("number").value * 1;

  // làm tròn xuống khi không phải số nguyên
  number = Math.floor(number);

  //thêm số vào mảng
  lstNumber.push(number);

  var rsListNumber = "Danh sách số đã thêm vào mảng: ";
  for (var i = 0; i < lstNumber.length; i++) {
    rsListNumber += lstNumber[i] + "; ";
  }
  document.getElementById("listNumber").innerHTML = rsListNumber;
}

// 1. Tổng các số dương trong mảng.
function tinhTongSoDuong() {
  if (lstNumber.length > 0) {
    var tinhTong = 0;
    for (var i = 0; i < lstNumber.length; i++) {
      if (lstNumber[i] > 0) {
        tinhTong += lstNumber[i];
      }
    }
    var tongSo = "Tổng số nguyên dương: " + tinhTong;
    document.getElementById("tongSoNguyenDuong").innerHTML = tongSo;
  } else {
    alert("Vui lòng nhập số");
  }
}

// 2. Đếm có bao nhiêu số dương trong mảng.
function demSoDuong() {
  if (lstNumber.length > 0) {
    var dem = 0;
    for (var i = 0; i < lstNumber.length; i++) {
      if (lstNumber[i] > 0) {
        dem++;
      }
    }
    var tongSo = "Số nguyên dương trong mảng: " + dem;
    document.getElementById("demSoNguyenDuong").innerHTML = tongSo;
  } else {
    alert("Vui lòng nhập số");
  }
}
// 3. Tìm số nhỏ nhất trong mảng.
function timSoNhoNhat() {
  if (lstNumber.length > 0) {
    var min = lstNumber[0];
    for (var i = 0; i < lstNumber.length; i++) {
      if (min > lstNumber[i]) {
        min = lstNumber[i];
      }
    }
    var soNhoNhat = "Số nguyên nhỏ nhất là: " + min;
    document.getElementById("soNhoNhat").innerHTML = soNhoNhat;
  } else {
    alert("Vui lòng nhập số");
  }
}
// 4. Tìm số dương nhỏ nhất trong mảng.
function timSoDuongNhoNhat() {
  var min = null;
  if (lstNumber.length > 0) {
    for (var i = 0; i < lstNumber.length; i++) {
      if (lstNumber[i] > 0 && (min === null || min > lstNumber[i])) {
        min = lstNumber[i];
      }
    }
    var soDuongNhoNhat = "Số nguyên dương nhỏ nhất là: " + min;
    document.getElementById("soDuongNhoNhat").innerHTML = soDuongNhoNhat;
  } else {
    alert("Vui lòng nhập số");
  }
}

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function timSoChanCuoiCung() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập số");
    return;
  }
  var soChan = [];
  for (var i = 0; i < lstNumber.length; i++) {
    if (lstNumber[i] % 2 == 0) {
      soChan.push(lstNumber[i]);
    }
  }

  var soChanCuoiCung = "Số chẵn cuối cùng trong mảng là: ";
  if (soChan.length > 0) {
    soChanCuoiCung += soChan[soChan.length - 1];
  } else {
    soChanCuoiCung += -1;
  }
  document.getElementById("soChanCuoiCung").innerHTML = soChanCuoiCung;
}

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiChoGiaTri() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập số");
    return;
  }
  var vt1 = document.getElementById("vt1").value * 1;
  var vt2 = document.getElementById("vt2").value * 1;

  var m = lstNumber[vt1 - 1];
  lstNumber[vt1 - 1] = lstNumber[vt2 - 1];
  lstNumber[vt2 - 1] = m;

  var rsDoiCho = "Mảng sau khi đổi chỗ: ";
  for (var i = 0; i < lstNumber.length; i++) {
    rsDoiCho += lstNumber[i] + "; ";
  }

  document.getElementById("doiCho").innerHTML = rsDoiCho;
}

// 7. Sắp xếp mảng theo thứ tự tăng dần.
function sapXepThuTuTangDan() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập số");
    return;
  }
  var temp = 0;
  var tangDan = "";
  for (var i = 0; i < lstNumber.length - 1; i++) {
    for (var j = i + 1; j < lstNumber.length; j++) {
      if (lstNumber[i] > lstNumber[j]) {
        //hoán vị
        temp = lstNumber[i];
        lstNumber[i] = lstNumber[j];
        lstNumber[j] = temp;
      }
    }
  }
  tangDan = lstNumber;

  var rsTangDan = "Thứ tự tăng dần của mảng: ";
  for (var t = 0; t < tangDan.length; t++) {
    rsTangDan += tangDan[t] + "; ";
  }
  document.getElementById("thuTuTangDan").innerHTML = rsTangDan;
}

// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function kiemTraSoNguyenTo(number) {
  if (number <= 1) {
    return false;
  } else if (number >= 2) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function timSoNguyenToDauTienTrongMang() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập số");
    return;
  }
  var soNguyenTo = [];
  for (var i = 0; i < lstNumber.length; i++) {
    if (kiemTraSoNguyenTo(lstNumber[i])) {
      soNguyenTo.push(lstNumber[i]);
    }
  }
  var rsSoNguyenToDauTien = "Số nguyên tố đầu tiên trong mảng: ";
  if (soNguyenTo.length > 0) {
    rsSoNguyenToDauTien += soNguyenTo[0];
  } else {
    rsSoNguyenToDauTien += -1;
  }

  document.getElementById("soNguyenToDauTien").innerHTML = rsSoNguyenToDauTien;
}

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var lstNumber2 = [];
var lstAll = [];
function addNumber2() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập mảng 1");
    return;
  }

  var number2 = document.getElementById("number2").value * 1;
  lstNumber2.push(number2);

  lstAll = [...lstNumber, ...lstNumber2];
  console.log(lstAll);

  var rsListNumber2 = "Danh sách số đã thêm vào mảng: ";
  for (var i = 0; i < lstAll.length; i++) {
    rsListNumber2 += lstAll[i] + "; ";
  }
  document.getElementById("listNumber2").innerHTML = rsListNumber2;
}

function demSoNguyen() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập số");
    return;
  }

  var dem = 0;
  for (var i = 0; i < lstAll.length; i++) {
    if (Math.floor(lstAll[i]) === lstAll[i]) {
      dem++;
    }
  }

  var rsSoNguyen = "Số lượng số nguyên trong mảng: " + dem;
  document.getElementById("soLuongSoNguyen").innerHTML = rsSoNguyen;
}

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanhSoLuong() {
  if (lstNumber.length == 0) {
    alert("Vui lòng nhập số");
    return;
  }
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < lstNumber.length; i++) {
    if (lstNumber[i] < 0) {
      soAm++;
    } else if (lstNumber[i] > 0) {
      soDuong++;
    }
  }

  if (soAm > soDuong) {
    document.getElementById("ketLuan").innerHTML = "KL: Số âm nhiều hơn";
  } else if (soAm < soDuong) {
    document.getElementById("ketLuan").innerHTML = "KL: Số dương nhiều hơn";
  } else {
    document.getElementById("ketLuan").innerHTML = "KL: Hai số bằng nhau";
  }
  var rsSoAm = "Số lượng số âm là: " + soAm;
  var rsSoDuong = "Số lượng số dương là: " + soDuong;
  document.getElementById("soLuongSoAm").innerHTML = rsSoAm;
  document.getElementById("soLuongSoDuong").innerHTML = rsSoDuong;
}
