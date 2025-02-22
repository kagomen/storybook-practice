"use client"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function SampleButton() {
  const path = usePathname()
  return <Button className="bg-fuchsia-300">current path: {path}</Button>
}
