function checkout() {
  return true; // ✅ FIXED
}

if (!checkout()) {
  console.log("❌ Thanh toán thất bại");
} else {
  console.log("✅ Thanh toán thành công");
}
