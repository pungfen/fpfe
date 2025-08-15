export const makeMap = (str: string): ((key: string) => boolean) => {
  const map = Object.create(null)
  for (const key of str.split(',')) map[key] = 1
  return val => val in map
}
