import React from "react"
import ContentLoader from "react-content-loader"

const Loading = () => (
  <>
    <ContentLoader
      speed={4}
      width={280}
      height={550}
      viewBox="0 0 280 550"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="136" cy="144" r="117" />
      <rect x="0" y="366" rx="0" ry="0" width="280" height="90" />
      <rect x="16" y="495" rx="0" ry="0" width="75" height="21" />
      <rect x="117" y="484" rx="0" ry="0" width="155" height="40" />
      <rect x="20" y="308" rx="0" ry="0" width="246" height="21" />
    </ContentLoader>
  </>

)

export default Loading