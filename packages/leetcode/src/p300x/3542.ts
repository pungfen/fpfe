export const minOperations = (nums: number[]) => {
  let ans = 0
  let top = -1
  for (const n of nums) {
    while (top >= 0 && n < nums[top]) {
      top -= 1
      ans += 1
    }

    if (top < 0 || n !== nums[top]) {
      top += 1
      nums[top] = n
    }
  }
  return ans + top + nums[0]
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest
  it('x', () => {
    expect(minOperations([0, 2])).toBe(1)
    expect(minOperations([3, 1, 2, 1])).toBe(3)
    expect(minOperations([1, 2, 1, 2, 1, 2])).toBe(4)
  })
}
