export function goto(id: string) {
  document.location = document.location.toString().split("#")[0] + "#" + id
}
