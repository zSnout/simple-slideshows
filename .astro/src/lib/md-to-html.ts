import GithubSlugger from "github-slugger"
import * as katex from "katex"
import MarkdownIt from "markdown-it"
import tex from "markdown-it-texmath"
import Token from "markdown-it/lib/token"
import { getHighlighter } from "shiki"

const highlighter = await getHighlighter({ theme: "github-dark" })

const options: MarkdownIt.Options = {
  html: true,
  highlight(str, lang) {
    return highlighter.codeToHtml(str, { lang })
  },
  linkify: true,
  typographer: true,
}

const md = new MarkdownIt(options)

md.use(tex, {
  engine: katex,
  delimiters: "dollars",
})

function isHeadingOpeningTag(node: Token) {
  return node.type == "heading_open" && (node.tag == "h1" || node.tag == "h2")
}

function isHeadingClosingTag(node: Token) {
  return node.type == "heading_close" && (node.tag == "h1" || node.tag == "h2")
}

function toText(node: Token): string {
  if (node.children?.length) {
    return node.children.map(toText).join("")
  }

  return node.content
}

function getHeadingContent(tree: Token[], index: number) {
  if (!isHeadingOpeningTag(tree[index]!)) {
    throw new Error("Expected the given index to point to a heading opener.")
  }

  const tokens: Token[] = []

  while (tree[++index] && !isHeadingClosingTag(tree[index]!)) {
    tokens.push(tree[index]!)
  }

  return tokens.map(toText).join("")
}

export function convertToHTML(markdown: string) {
  const slugger = new GithubSlugger()

  const env: any = {}

  const tree = md.parse(markdown, env)

  const open = new Token("section_open", "section", 1)
  open.block = true
  open.attrSet("tabindex", "-1")

  if (tree[0] && isHeadingOpeningTag(tree[0])) {
    const content = getHeadingContent(tree, 0)
    open.attrSet("id", slugger.slug(content))
  }

  const close = new Token("section_close", "section", -1)
  close.block = true

  tree.splice(0, 0, open)
  tree.splice(tree.length, 0, close)

  for (let index = 2; index < tree.length - 1; index++) {
    if (isHeadingOpeningTag(tree[index]!)) {
      const open = new Token("section_open", "section", 1)
      open.block = true
      open.attrSet("tabindex", "-1")

      const content = getHeadingContent(tree, index)
      open.attrSet("id", slugger.slug(content))

      const close = new Token("section_close", "section", -1)
      close.block = true

      tree.splice(index, 0, close, open)
      index += 2
    }
  }

  return md.renderer.render(tree, options, env)
}

export function convertToHTMLWithoutSections(markdown: string) {
  const slugger = new GithubSlugger()

  const env: any = {}

  const tree = md.parse(markdown, env)

  for (let index = 2; index < tree.length - 1; index++) {
    if (isHeadingOpeningTag(tree[index]!)) {
      const content = getHeadingContent(tree, index)
      tree[index]!.attrSet("id", slugger.slug(content))
    }
  }

  return md.renderer.render(tree, options, env)
}
