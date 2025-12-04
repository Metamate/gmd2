import highlightActiveHeader from "./highlightActiveHeader.js"
import questionAnswer from "./questionAnswer.js"

export default {
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
  },
}
