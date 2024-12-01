const currentYear = new Date().getFullYear();
export const yearsArray = Array.from({ length: 51 }, (_, i) =>
  (currentYear - i).toString(),
);
