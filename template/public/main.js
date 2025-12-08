import highlightActiveHeader from "./highlightActiveHeader.js"
import questionAnswer from "./questionAnswer.js"
import details from "./details.js"

export default {
  defaultTheme: "dark",
  iconLinks: [
    {
      icon: "github",
      href: "https://github.com/Metamate/gmd2",
      title: "GitHub",
    },
  ],
  start: () => {
    highlightActiveHeader()
    questionAnswer()
    details()
  },
}
