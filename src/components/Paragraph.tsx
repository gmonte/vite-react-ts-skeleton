import { PropsWithChildren } from 'react'

type ParagraphProps = PropsWithChildren<{}>

export function Paragraph ({ children }: ParagraphProps) {
  return (
    <p>
      {children}
    </p>
  )
}
