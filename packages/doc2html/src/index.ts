import { access, constants, mkdir, writeFile } from 'fs/promises'
import { convertToHtml } from 'mammoth'
import { dirname, resolve } from 'path'
import { format } from 'prettier'

const cwd = process.cwd()
const root = '/mnt/c/Users/fp942/Desktop/enoch/excel'
const names = [
  '用户协议中文-中国', '用户协议英文-中国', '用户协议中文-沙特', '用户协议英文-沙特',
  '隐私政策中文-中国', '隐私政策英文-中国', '隐私政策中文-沙特', '隐私政策英文-沙特'
]
const html = (body: string): string => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title></title>
    <style>
      html {background: white;color:black;height: 100%;}
      body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
        margin:0;padding:0;
      }
      body{padding:20px;line-height: 2; max-width: 1200px;margin: 0 auto;}
      h1{font-size:24px;font-weight: bold;}
      h2{font-size:20px;font-weight: bold;}
      h3{font-size:16px;font-weight: bold;}
      h4{font-size:16px;padding:10px 0;}
      ol,ul {list-style:none;}
      ol,ul,p,table{font-size:14px;}
      i{font-style: normal;}
      a:hover {text-decoration:none;}
      a,dt{-webkit-tap-highlight-color: transparent;-webkit-tap-highlight-color: transparent;}
      a:active {text-decoration:none;-webkit-tap-highlight-color: transparent;-webkit-tap-highlight-color: transparent;}
      ins,a {text-decoration:none;}
      .text-center{text-align: center;}
      .text-right{text-align: right;}
      .underline{text-decoration: underline;}
      table, th, td {border: 1px solid black;border-collapse: collapse;}
      td {padding: 0 10px;}
    </style>
  </head>
  <body>
      ${body}
  </body>
</html>
`

interface DocElement {
  alignment?: 'center' | 'right'
  children?: DocElement[]
  font?: string
  fontSize?: number
  highlight?: boolean
  indent?: {
    end?: string
    firstLine?: string
    hanging?: string
    start?: string
  }
  isAllCaps?: boolean
  isBold?: boolean
  isItalic?: boolean
  isSmallCaps?: boolean
  isStrikethrough?: boolean
  isUnderline?: boolean
  styleId?: string
  styleName?: string
  type?: 'paragraph' | 'run' | 'text'
  value?: string
  verticalAlignment?: 'baseline'
}

const transformDocument = (element: DocElement) => {
  if (element.children) {
    element.children = element.children.map(transformDocument)
  }
  // eslint-disable-next-line no-empty
  if (element.type === 'paragraph') {
  }
  return element
}

await Promise.all(
  names.map(
    async (name) => {
      const res = await convertToHtml({ path: `${root}/${name}.docx` },
        {
          // styleMap: [
          //   `p[style-name='text-center'] => p:fresh`
          // ],
          transformDocument
        }
      )
      const file = resolve(cwd, '.output', `${name}.html`)
      const dir = dirname(file)
      try {
        await access(dir, constants.R_OK | constants.W_OK)
      }
      catch (err) {
        if (
          err !== null
          && typeof err == 'object'
          && 'code' in err
          && err.code === 'ENOENT'
        ) {
          await mkdir(dir, { recursive: true })
        }
      }
      await writeFile(file, await format(html(res.value), { parser: 'html' }), 'utf-8')
    }
  )
)
