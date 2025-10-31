export const interopDefault = async <T>(module: T): Promise<T> => {
  try {
    const resolved = await module

    if (typeof resolved === 'object' && resolved !== null) {
      if ('default' in resolved) {
        return (resolved as { default: unknown }).default as T
      }
      return resolved
    }

    return resolved
  } catch (error) {
    throw new Error(`Cannot import module: ${String(error)}`, { cause: error })
  }
}

export const pascalize = (value: string): string => {
  return value.replaceAll(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}
