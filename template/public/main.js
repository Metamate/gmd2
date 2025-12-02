export default {
  iconLinks: [
    {
      icon: "github",
      href: "https://github.com/Metamate/gmd2",
      title: "GitHub",
    },
  ],
  start: () => {
    console.log("DocFX Custom JS: Starting...")

    const initScrollSpy = (container) => {
      const links = container.querySelectorAll("a")
      const headers = document.querySelectorAll("h1, h2, h3")

      console.log(
        `DocFX Custom JS: Found ${links.length} TOC links and ${headers.length} headers.`
      )

      if (links.length === 0) {
        return false
      }

      if (headers.length) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id")
                const link = Array.from(links).find((l) => {
                  const href = l.getAttribute("href")
                  return href === `#${id}` || href.endsWith(`#${id}`)
                })

                if (link) {
                  links.forEach((l) => l.classList.remove("active"))
                  link.classList.add("active")
                }
              }
            })
          },
          {
            rootMargin: "-5px 0px -95% 0px",
          }
        )

        headers.forEach((header) => observer.observe(header))
        return true
      }
      return false
    }

    // Try multiple selectors for the TOC container
    const tocContainer =
      document.querySelector("#affix") ||
      document.querySelector(".affix") ||
      document.querySelector(".sideaffix")

    if (!tocContainer) {
      console.warn(
        "DocFX Custom JS: TOC container not found. Selectors tried: #affix, .affix, .sideaffix"
      )
      return
    }

    console.log("DocFX Custom JS: TOC container found:", tocContainer)

    // Try to initialize immediately
    if (!initScrollSpy(tocContainer)) {
      console.log("DocFX Custom JS: TOC empty, waiting for content...")
      // If empty, observe for changes
      const observer = new MutationObserver((mutations, obs) => {
        if (initScrollSpy(tocContainer)) {
          obs.disconnect() // Stop observing once initialized
          console.log("DocFX Custom JS: Scroll spy initialized after mutation.")
        }
      })

      observer.observe(tocContainer, { childList: true, subtree: true })
    }
  },
}
