export function gregorian_to_jalali(
  gy: number,
  gm: number,
  gd: number
): [number, number, number] {
  const g_d_m: number[] = [
    0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
  ];
  const gy2: number = gm > 2 ? gy + 1 : gy;
  let days: number =
    355666 +
    365 * gy +
    Math.floor((gy2 + 3) / 4) -
    Math.floor((gy2 + 99) / 100) +
    Math.floor((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1];
  let jy: number = -1595 + 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  let jm: number, jd: number;
  if (days < 186) {
    jm = 1 + Math.floor(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + Math.floor((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  return [jy, jm, jd];
}

export function getCurrentJalaliDate(): string {
  const today = new Date();
  const gy = today.getFullYear();
  const gm = today.getMonth() + 1; // ماه در Date از 0 شروع می‌شود، بنابراین +1
  const gd = today.getDate();

  // تبدیل تاریخ میلادی به شمسی
  const [jy, jm, jd] = gregorian_to_jalali(gy, gm, gd);

  // آرایه نام‌های ماه‌های پارسی
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  // گرفتن نام روز هفته به انگلیسی و تبدیل به پارسی
  const dayNameEn = today.toLocaleString("en-US", { weekday: "short" });
  const dayNameFa =
    {
      Sun: "یک‌شنبه",
      Mon: "دوشنبه",
      Tue: "سه‌شنبه",
      Wed: "چهارشنبه",
      Thu: "پنج‌شنبه",
      Fri: "جمعه",
      Sat: "شنبه",
    }[dayNameEn] || "نامعلوم";

  // ساخت خروجی در فرمت مورد نظر
  return `${dayNameFa} ${jd} ${persianMonths[jm - 1]} ${jy}`;
}
