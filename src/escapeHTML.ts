const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;'
}

/**
 * @param string Example:
 *     '<div> </div>'
 * @returns {string} Example:
 *     '&ltdiv&gt &lt/div&gt'
 */
export default function escapeHTML(string: string): string {
    return string.replace(/[&<>"'\/]/g, subString => map[subString])
}