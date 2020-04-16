import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useImages } from "../hooks/use-images"

const SetImg = styled(Img)`
  display: block !important;
  margin: 0 auto;
  align-self: flex-end;
  flex-grow: 1;
  max-width: 100%;
  filter: drop-shadow(0px 0px 6px #0004);
  padding: 15px;

  @media (max-width: 420px) {
    width: 100vw;
    flex-grow: unset;
    height: 70vh;
  }
`

export default function Images() {
  const images = useImages()
  return (
    <div>
      {images &&
        images.map(({ fluid, date }, i) =>
          date !== "Invalid Date" ? (
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-height: 130vh;
                position: relative;
                flex-direction: ${i % 2 === 0 ? "row-reverse" : "row"};

                h3 {
                  top: 50%;
                  position: sticky;
                  flex: 1;
                  margin: 0 1.45rem 1.45rem;
                }

                @media (max-width: 420px) {
                  flex-direction: column;

                  h3 {
                    flex: unset;
                    font-size: 1.2em;
                  }
                }
              `}
            >
              <h3>{date}</h3>
              <SetImg
                objectFit="contain"
                objectPosition="0% 50%"
                imgStyle={{
                  width: "auto",
                }}
                fluid={fluid}
                alt={date}
              />
            </div>
          ) : (
            <></>
          )
        )}
      <h3
        css={css`
          margin: 2em;
          font-size: 2em;
          text-align: center;
        `}
      >
        😘😘
      </h3>
    </div>
  )
}
