
export function getTodayTime() {
  return new Date(new Date().toDateString()).getTime()
}

export function onOrAfter(a: number, b: string) {
  return a <= new Date(b).getTime()
}

export function onOrBefore(a: number, b: string) {
  return new Date(b).getTime() <= a
}
