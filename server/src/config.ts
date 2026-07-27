export default () => ({
  prefix: 'api',
  port: 3000,
  oss: {
    accessKeyId: process.env.OSS_ACCESSKEYID,
    accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
    ossStsRoleArn: ''
  }
})
