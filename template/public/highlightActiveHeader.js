const highlightActiveHeader = () => {
  const initScrollSpy = (container) => {
    const links = container.querySelectorAll("a")
    const headers = document.querySelectorAll("h1, h2, h3")

    if (links.length === 0) {
      return false
    }

    if (headers.length) {
      const updateActiveHeader = () => {
        let activeHeader = null
        for (const header of headers) {
          const rect = header.getBoundingClientRect()
          if (rect.top < 100) {
            activeHeader = header
          } else {
            break
          }
        }

        if (activeHeader) {
          const id = activeHeader.getAttribute("id")
          const link = Array.from(links).find((l) => {
            const href = l.getAttribute("href")
            return href === `#${id}` || href.endsWith(`#${id}`)
          })

          if (link) {
            links.forEach((l) => l.classList.remove("active"))
            link.classList.add("active")
          }
        } else {
          links.forEach((l) => l.classList.remove("active"))
        }
      }

      updateActiveHeader()

      window.addEventListener("scroll", updateActiveHeader)
      
      return true
    }
    return false
  }

  const tocContainer = document.getElementById("affix")

  if (!tocContainer) {
    return
  }

  if (!initScrollSpy(tocContainer)) {
    const observer = new MutationObserver((mutations, obs) => {
      if (initScrollSpy(tocContainer)) {
        obs.disconnect()
      }
    })

    observer.observe(tocContainer, { childList: true, subtree: true })
  }
}

export default highlightActiveHeader
