import React, { useEffect, useRef } from 'react'
import { marked } from 'marked'
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
                <button class='demo-copy'>copy</button>
                <button class='demo-open'>show </button>
                 <button class='demo-go'>code </button>
              </div>
               <pre><code class='demo-code'>${formatScript}</code></pre>
        </div>`
    },
    paragraph: (text: string) => {
      return `<p class='demo-doc-desc'>${text}</p>`
    },

    table: (header: string, body: string) => {
      const headerMatch = header.match(/<th.*?>(.*?)<\/th>/g)
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
        const eleParent = this.parentElement.parentElement
        const status = eleParent.classList.contains('show-all')
        if (status) {
          eleParent.classList.remove('show-all')
        } else {
          eleParent.classList.add('show-all')
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
        // @ts-ignore
        // window.StackBlitzSDK.openProjectId('stackblitz-starters-vrzbp5',{
        //   openFile: 'src/App.jsx',
        // })
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
