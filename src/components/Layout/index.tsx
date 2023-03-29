import React from "react";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

type Props = {
  children: React.ReactNode
}

export function Layout({
  children
}: Props) {
  console.log('処理があるならなんかする')

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
