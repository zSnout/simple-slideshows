const entries =
  document.querySelectorAll<HTMLParagraphElement>("li > p:only-child")

for (const entry of entries) {
  if (entry.children.length == 3) {
    const [em, br, strong] = entry.children as unknown as [
      HTMLElement,
      HTMLElement,
      HTMLElement,
    ]

    if (
      em.tagName == "EM" &&
      br.tagName == "BR" &&
      strong.tagName == "STRONG"
    ) {
      em.innerHTML = em.innerHTML
        .replace(/{{/g, "<span class='t3'>")
        .replace(/}}/g, "</span>")

      strong.innerHTML = strong.innerHTML
        .replace(/{{/g, "<span class='t3'>")
        .replace(/}}/g, "</span>")

      em.innerHTML = em.innerHTML
        .replace(/{/g, "<span class='t1'>")
        .replace(/}/g, "</span>")

      strong.innerHTML = strong.innerHTML
        .replace(/{/g, "<span class='t1'>")
        .replace(/}/g, "</span>")

      em.innerHTML = em.innerHTML
        .replace(/\[/g, "<span class='t2'>")
        .replace(/]/g, "</span>")

      strong.innerHTML = strong.innerHTML
        .replace(/\[/g, "<span class='t2'>")
        .replace(/]/g, "</span>")

      for (const i of [1, 2, 3]) {
        const tpSpans: ArrayLike<HTMLElement> = em.querySelectorAll(
          "span.t" + i,
        )

        let enSpans: ArrayLike<HTMLElement> = strong.querySelectorAll(
          "span.t" + i,
        )

        if (i == 3) {
          enSpans = Array.prototype.slice.call(enSpans).reverse()
        }

        const length = Math.min(tpSpans.length, enSpans.length)

        for (let index = 0; index < length; index++) {
          tpSpans[index]!.match = enSpans[index] as HTMLSpanElement
          enSpans[index]!.match = tpSpans[index] as HTMLSpanElement
        }
      }

      const tpSpans = em.getElementsByTagName("span")

      let i = 0

      for (const span of tpSpans) {
        if ("match" in span) {
          span.setAttribute("index", "" + (i % 4))
          span.match!.setAttribute("index", "" + (i % 4))
          i++
        }
      }
    }
  }
}

addEventListener("click", (event) => {
  if (
    event.target &&
    event.target instanceof HTMLSpanElement &&
    "match" in event.target
  ) {
    if (event.target.dataset.clicked) {
      delete event.target.dataset.clicked
      delete event.target.match.dataset.clicked
    } else {
      event.target.dataset.clicked = "true"
      event.target.match.dataset.clicked = "true"
    }
  }
})

addEventListener("mouseover", (event) => {
  for (const target of event.composedPath()) {
    if (target instanceof HTMLSpanElement && "match" in target) {
      target.classList.add("active")
      target.match.classList.add("active")
    }
  }
})

addEventListener("mouseout", (event) => {
  for (const target of event.composedPath()) {
    if (
      target instanceof HTMLSpanElement &&
      "match" in target &&
      !target.dataset.clicked
    ) {
      target.classList.remove("active")
      target.match.classList.remove("active")
    }
  }
})

declare global {
  interface EventTarget {
    match?: HTMLSpanElement
  }
}

export {}
