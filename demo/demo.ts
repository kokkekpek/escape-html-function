import 'demo-css'
import escapeHTML from '../'

const html: string = `<div>&nbsp</div>`
const result: string = escapeHTML(html)
document.getElementById('js').innerHTML = result