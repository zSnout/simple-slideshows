# Simple Slideshows Starter Kit

Welcome to Simple Slideshows! If you haven't downloaded this project already, do
so now by running `git clone`.

```sh
git clone https://github.com/zSnout/simple-slideshows.git
```

To create new slideshow decks, add Markdown files to the `decks` folder. Simple
Slideshows will automatically create slides at each level 1 & 2 heading. For
example, this code...

```md
# Hello world

A presentation made with Simple Slideshows

## A slide

With some content.
```

...will generate two slides: a title slide for the level 1 heading, and a
standard slide for the level 2 heading.

## Slide Guidelines

Simple Slideshows doesn't support everything, but it can do most anything you'll
like. The heading of a slide automatically becomes its title, and everything
else is turned into content.

Simple Slideshows supports...

- Paragraphs
- Lists (unordered and ordered)
- Tables
- Code blocks
- LaTeX equations
- Background images

## Background Images

To mark something as a background image, write "background" in place of its alt
text.

```md
![background](/path-to-my-image.jpg)
```

This makes the background cover the entire slide. Because of the cover behavior,
some of your image may be chopped off. To prioritize a certain side of the
image, add `b`, `t`, `r`, or `l` to the alt text, or a combination of two
directions.

```md
<!-- `t` shows as much of the top part of the image as possible. -->

![background t](/path-to-my-image.jpg)
```

```md
<!-- `br` shows as much of the bottom-right part of the image as possible. -->

![background br](/path-to-my-image.jpg)
```

## Theming

To change the theme of your slideshow, open `.astro/src/components/Layout.astro`
and change the class name of the `<html>` tag to something other than
`z-slate-light`. Currently, there are ten themes available:

- z-slate-light
- z-slate-dark
- z-zinc-light
- z-zinc-dark
- z-gray-light
- z-gray-dark
- z-neutral-light
- z-neutral-dark
- z-stone-light
- z-stone-dark

If you know CSS, you can also customize your theme by opening `theme.postcss`
and modifying the styles included in it.

## Homepage information

To change the title and subtitle shown on your project's homepage, edit their
respective variables in `.env`.

## Publishing to Vercel and Netlify

To make working with the repo more ergonomic, the main Astro project underlying
Simple Slideshows is packed into an `.astro` folder. As such, the project output
will be located in `.astro/dist`, not `dist`. You may need to configure Vercel,
Netlify, and other cloud providers to handle this case.
