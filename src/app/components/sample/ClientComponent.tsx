"use client"

import { useEffect, useState } from "react"

export function ClientComponent() {
  const [data, setData] = useState<string>("loading...")

  useEffect(() => {
    ;(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setData("データが読み込まれました")
    })()
  }, [])

  return <div>{data}</div>
}
