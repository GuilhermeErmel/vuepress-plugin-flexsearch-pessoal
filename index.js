const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
    extendPageData ($page) {
        if (!$page._strippedContent) {
            return
        }
        // _strippedContent does not contain the YAML frontmatter
        const { html } = $page._context.markdown.render($page._strippedContent)
        const text = html
            .replace(/(<[^>]+>)+/g, " ") // remove HTML tags
            .replace(/^\s*#\s/gm, "") // remove header anchors inserted by vuepress
        $page.content = text
    },
    alias: {
        '@SearchBox':
            path.resolve(__dirname, 'SearchBox.vue')
    },
})
