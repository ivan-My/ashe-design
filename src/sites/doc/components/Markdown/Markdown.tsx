import React, { useEffect } from 'react'
import { marked } from 'marked'
import sdk from '@stackblitz/sdk'
import { getProject } from './template'
import '@/sites/assets/prism/prism.js'
import '@/sites/assets/prism/prism.css'
import './style.scss'

// @ts-ignore
const Prism = window.Prism

const Markdown = ({ element }: any) => {
  const renderer = {
    heading: (text: string, level: number) => {
      if (level === 1) {
        return ` <h1 class='demo-doc-name'>${text}</h1>`
      } else if (level === 2 || level === 3) {
        return `<h2 class='demo-code-title'>${text}</h2>`
      }
      return `<h${level}>${text}</h${level}>`
    },
    code: (code: any, language: string) => {
      const formatScript = Prism.highlight(
        code,
        Prism.languages[language],
        language
      )
      return `<div class='demo-code-content' >
              <div class='demo-code-bar'>
                <button class='demo-copy' type='button' >
               <svg viewBox='0 0 48 48' width='1em' height='1em' fill='currentColor' class='arco-icon arco-icon-copy'><path fill='none' d='M0 0h48v48H0z'></path><path d='M32 12c1.1 0 2 .9 2 2v28.2c0 1-.8 1.8-1.9 1.8H7.9c-1 0-1.9-.8-1.9-1.8V13.8c0-1 .8-1.8 1.9-1.8H32zm-2 4H10v24h20V16zM40 4c1.1 0 2 .9 2 2v25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V8H19c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h21z'></path></svg>
                </button>
                <button class='demo-open' type='button'>
                  <svg viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' class='arco-icon'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.119229 5.97028L0.40124 5.5574C0.473125 5.45216 0.611199 5.4191 0.721691 5.47589L0.748685 5.49197L4.99981 8.39562L9.24455 5.49228C9.34975 5.42033 9.4904 5.43967 9.57273 5.53271L9.59204 5.55749L9.87432 5.97019C9.94627 6.07539 9.92693 6.21604 9.83389 6.29837L9.80911 6.31768L5.14124 9.51042C5.06564 9.56213 4.96874 9.5679 4.88838 9.52773L4.85909 9.51051L0.184664 6.31773C0.0794207 6.24584 0.0463627 6.10777 0.10315 5.99727L0.119229 5.97028L0.40124 5.5574L0.119229 5.97028ZM9.75 3C9.88807 3 10 3.11193 10 3.25V3.75C10 3.88807 9.88807 4 9.75 4H0.25C0.111929 4 0 3.88807 0 3.75V3.25C0 3.11193 0.111929 3 0.25 3H9.75ZM9.75 0C9.88807 0 10 0.111929 10 0.25V0.75C10 0.888071 9.88807 1 9.75 1H0.250001C0.111929 1 5.44957e-07 0.888071 5.44957e-07 0.75V0.25C5.44957e-07 0.111929 0.111929 0 0.250001 0H9.75Z'></path></svg>
                </button>
                <button class='demo-go ' type='button'>
                 <svg fill='none' stroke='currentColor' stroke-width='4' viewBox='0 0 48 48' class='arco-icon arco-icon-codepen'><path fill='currentColor' stroke='none' d='M45 15.7v17.1L24.5 44.7c-.3.2-.7.2-1 0l-20-11.5c-.3-.2-.5-.5-.5-.9V15.7c0-.4.2-.7.5-.9l20-11.6c.3-.2.7-.2 1 0l20 11.6c.3.2.5.5.5.9zM26 9v9.8l5.5 3.2 8.5-4.9L26 9zm-4 0L8 17.1l8.4 4.9 5.6-3.2V9zm0 21.2L16.5 27 9 31.4 22 39v-8.8zm17 1.2L31.4 27 26 30.2V39l13-7.6zm2-3.4v-6l-5 3 5 3zm-29-3-5-3v6l5-3zm8 0 4 2 4-2-4-2-4 2z'></path></svg>
                 </button>
              </div>
               <pre><code class='demo-code'>${formatScript}</code></pre>
        </div>`
    },
    paragraph: (text: string) => {
      return `<p class='demo-doc-desc'>${text}</p>`
    },
    table: (header: string, body: string) => {
      const headerMatch = header.match(/<th.*?>(.*?)<\/th>/g)
      console.log(header)
      console.log(headerMatch)
      const typeIndex = headerMatch
        ? headerMatch.findIndex((item) => item.indexOf('类型') >= 0)
        : -1
      const defaultIndex = headerMatch
        ? headerMatch.findIndex((item) => item.indexOf('默认值') >= 0)
        : -1
      let newBody = body
      // “类型”这一列body为蓝色字体
      if (typeIndex >= 0 || defaultIndex >= 0) {
        let typeBodyCount = -1
        newBody = body.replace(/<td.*?>/g, (value) => {
          typeBodyCount += 1
          // @ts-ignore
          const currentIndex = typeBodyCount % headerMatch.length
          if (currentIndex === typeIndex || currentIndex === defaultIndex) {
            return '<td class="special">'
          }
          return value
        })
      }

      // 设置特定列定宽
      const newHeader = header
        .replace(
          /<th>(参数|名称|默认值|Property|DefaultValue)<\/th>/g,
          '<th class="props-names">$1</th>'
        )
        .replace(/<th>(类型|Type)<\/th>/g, '<th class="props-type">$1</th>')
      return `<table><thead>${newHeader}</thead><tbody>${newBody}</tbody></table>`
    },
  }
  // @ts-ignore
  marked.use({ renderer })
  const result = marked.parse(element)
  useEffect(() => {
    const eles = document.querySelectorAll('.demo-open')
    eles.forEach((ele) => {
      ele.addEventListener('click', function () {
        // @ts-ignore
        const self = this
        const eleParent = self.parentElement.parentElement
        const status = eleParent.classList.contains('show-all')
        if (status) {
          eleParent.classList.remove('show-all')
          self.classList.remove('rorate')
        } else {
          eleParent.classList.add('show-all')
          self.classList.add('rorate')
        }
      })
    })
    const copyEles = document.querySelectorAll('.demo-copy')
    copyEles.forEach((ele) => {
      ele.addEventListener('click', function () {
        // @ts-ignore
        const text =
          this.parentElement.parentElement.querySelector('.demo-code').innerText
        navigator.clipboard.writeText(text).then(() => {
          // @ts-ignore
          this.classList.add('status')
          setTimeout(() => {
            // @ts-ignore
            this.classList.remove('status')
          }, 2000)
        })
      })
    })

    const goEles = document.querySelectorAll('.demo-go')
    goEles.forEach((ele) => {
      ele.addEventListener('click', function () {
        // @ts-ignore
        const text =
          this.parentElement.parentElement.querySelector('.demo-code').innerText
        sdk.openProject(getProject(text), {
          openFile: 'src/App.jsx',
        })
      })
    })
  })
  return (
    <div className="doc-wrapper">
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  )
}

export default Markdown
