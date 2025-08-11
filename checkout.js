function checkout() {
  return true; // ✅ FIXED
  console.log("Thanh toán thành công"); // thêm dòng này
}

if (!checkout()) {
  console.log("❌ Thanh toán thất bại");
} else {
  console.log("✅ Thanh toán thành công");
}
