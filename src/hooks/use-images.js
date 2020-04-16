import { useStaticQuery, graphql } from "gatsby"

const getDate = src => {
  const parts = src.split("/")
  const fullPicName = parts[parts.length - 1]
  const picName = fullPicName.split(".")[0]
  return new Date(picName.split("_").splice(0, 3).join("-"))
}

export function useImages() {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const images = []

  data.allImageSharp.edges.forEach(({ node }) => {
    const date = getDate(node.fluid.src)
    images.push({
      fluid: node.fluid,
      date: date.toLocaleDateString("es-AR", options),
      dateDate: date,
    })
  })

  return images.sort((a, b) => {
    return a.dateDate > b.dateDate ? 1 : -1
  })
}
