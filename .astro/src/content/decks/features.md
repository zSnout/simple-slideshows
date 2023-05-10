# Features of this project

An overview of different slide types.

## An example slide

Containing nothing but text. And lots of it. Yup, there's a lot of text here. If
this were an actual presentation, I'd be bored by now. But this isn't, and I'm
not.

## Another slide

![background](https://virginiaduran.files.wordpress.com/2014/02/virginia-duran-blog-10-sites-to-take-the-best-skyline-pictures-in-san-francisco-mandarin-oriental-at-dusk.jpg)

- this time,
- with bullet points.
- And an background image!

## Another slide

![background](https://virginiaduran.files.wordpress.com/2014/02/virginia-duran-blog-10-sites-to-take-the-best-skyline-pictures-in-san-francisco-mandarin-oriental-at-dusk.jpg)

- this time,
- with bullet points.
- And an background image!

## Lists with titles & detail

- Sometimes, list items have titles in bold with details below them.

- **A title**

  And some detail

- **Another title**

  More detail

- Good thing that looks good.

## Math

Math is a great use case for this, because you can write LaTeX directly into
your source file. It can be an inline $x^2$, or something a bit more blocky,
like

$$
\begin{align*}
\left(5 + \frac{x}{2}\right)^2 &= 9 \\
5 + \frac{x}{2} &= \pm 3 \\
\frac{x}{2} &= \pm 3 - 5 \\
x &= 2 \left(\pm 3 - 5\right) \\
  &= 2 \cdot (-2) \text{ or } 2 \cdot (-8) \\
  &= (-4) \text{ or } (-16). \\
\end{align*}
$$

## Tables?

| Name      | Release date |
| --------- | ------------ |
| Node.js   | 2009         |
| AngularJS | 2010         |
| React     | 2013         |
| Vue       | 2014         |
| Angular   | 2016         |

Of course we can have tables! They're automatically pushed to the side to make
space for the rest of your content, whether it be paragraphs, equations, or
lists.

$$2 + 3 \not = 4$$

## Formatting

Always gotta check that advanced formatting. **Bold** text? Check. _Italics?_
Check. What about `inline code?` Check. And let's make sure links, such as this
one to [zSnout](https://zsnout.com/), work.

1. Ordered lists
2. work just as well
3. as unordered ones.

- work just as well
- Unordered lists
- as ordered ones.

## Automated links

Yeah, we can [link to other slides](#code-blocks--tables-reversed). It's
Markdown!

## Code blocks!

```ts
function greet(name: string) {
  alert("Hello, " + name + "!")
}
```

How could we forget code blocks? We'll probably style them the same as tables,
and offset them to the side.

## Code blocks, but reversed.

Let's check that we can put code blocks on the right.

And maybe have an extra paragraph.

- And lists.
- With multiple items.

```ts
function greet(name: string) {
  alert("Hello, " + name + "!")
}
```

## Code blocks + tables

```js
function analyzeData(data) {
  for (const [name, releaseYear] of data) {
    console.log(`${name} was released in ${releaseYear}.`)
  }
}
```

| Name      | Release date |
| --------- | ------------ |
| Node.js   | 2009         |
| AngularJS | 2010         |
| React     | 2013         |
| Vue       | 2014         |
| Angular   | 2016         |

## Code blocks + tables: reversed!

| Name      | Release date |
| --------- | ------------ |
| Node.js   | 2009         |
| AngularJS | 2010         |
| React     | 2013         |
| Vue       | 2014         |
| Angular   | 2016         |

```js
function analyzeData(data) {
  for (const [name, releaseYear] of data) {
    console.log(`${name} was released in ${releaseYear}.`)
  }
}
```
