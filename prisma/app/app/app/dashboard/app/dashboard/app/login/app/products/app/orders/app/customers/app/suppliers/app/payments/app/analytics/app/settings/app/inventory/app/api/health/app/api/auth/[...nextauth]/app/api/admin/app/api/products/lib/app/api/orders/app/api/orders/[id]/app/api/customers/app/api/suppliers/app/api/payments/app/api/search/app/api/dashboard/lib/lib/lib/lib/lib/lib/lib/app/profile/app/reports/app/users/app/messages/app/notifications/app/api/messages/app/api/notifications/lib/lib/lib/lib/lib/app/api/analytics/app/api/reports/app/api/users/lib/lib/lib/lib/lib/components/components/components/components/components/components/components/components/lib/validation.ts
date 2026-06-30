export function required(value: any) {
  return value !== undefined && value !== null && value !== "";
}

export function email(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
