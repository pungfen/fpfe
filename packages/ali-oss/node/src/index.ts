export interface Options {
  accessKeyId: string
  accessKeySecret: string
}

export const createClient = (options: Options) => {
  const { accessKeyId, accessKeySecret } = options

  const client = { accessKeyId, accessKeySecret }

  return client
}
