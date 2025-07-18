import type React from "react"

interface FallbackImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

export function FallbackImg({ fallbackSrc = "/placeholder.png", ...props }: FallbackImgProps) {
  return (
    <img
      {...props}
      onError={(e) => {
        const target = e.currentTarget
        if (target.src !== fallbackSrc) target.src = fallbackSrc
      }}
    />
  )
}
