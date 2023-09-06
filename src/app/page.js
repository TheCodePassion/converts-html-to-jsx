'use client'
import { useState } from 'react'

export default function Home() {
  const [html, setHtml] = useState('')
  const [jsxCode, setJsxCode] = useState('')

  const convertCode = () => {
    let convertedCode = html.replace(/class/g, 'className')

    const styleMatches = html.match(/style="([^"]*)"/g)

    if (styleMatches) {
      styleMatches.forEach((match) => {
        const styleValue = match.match(/style="([^"]*)"/)[1]
        const jsxStyle = styleValue
          .split(';')
          .filter((styleProp) => styleProp.trim())
          .map((styleProp) => {
            const [property, value] = styleProp.split(':').map((s) => s.trim())
            return `${property}: '${value}'`
          })
          .join(', ')

        convertedCode = convertedCode.replace(match, `style={{ ${jsxStyle} }}`)
      })
    }

    setJsxCode(convertedCode)
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
      <main>
        <h1 className="text-4xl font-semibold text-center p-4 text-white">
          JSX Wizard - Converts HTML to JSX
        </h1>
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold">Enter your html code:</h2>
            <textarea
              className="w-full h-40 p-2 mt-2 border rounded"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              style={{ height: '75vh' }}
            ></textarea>
            <button
              className="px-4 py-2 mt-4 text-white bg-green-500 hover:bg-blue-500  rounded-full flex justify-center items-center"
              onClick={convertCode}
            >
              Convert
            </button>
          </div>

          <div className="w-1/2 p-4">
            <h2 className="text-xl font-semibold">JSXcode:</h2>
            <textarea
              className="w-full h-40 p-2 mt-2 border rounded"
              value={jsxCode}
              readOnly
              style={{ height: '75vh' }}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  )
}
