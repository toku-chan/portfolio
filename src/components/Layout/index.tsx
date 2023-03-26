import React from "react";

type Props = {
  children: React.ReactNode
}

export function Layout({
  children
}: Props) {
  console.log('処理があるならなんかする')

  return (
    <div>
      {children}
    </div>
  )
}
