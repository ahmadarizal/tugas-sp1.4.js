var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == 0 || x == 4 || x == n - 1) {
      document.write("&nbsp* ");
    } else if (y == 0 || y == 4 || y == n - 1) {
      document.write("&nbsp* ");
    } else {
      document.write("&nbsp - ");
    }
  }
  document.write("<br>");
}
