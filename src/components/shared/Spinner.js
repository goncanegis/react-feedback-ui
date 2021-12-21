import React from "react"
import { css } from "@emotion/react"
import BeatLoader from "react-spinners/BeatLoader"

const override = css`
  display: block;
  margin: auto;
`

export const Spinner = () => {
  return <BeatLoader color="#FF6A95" size={50} css={override} />
}
