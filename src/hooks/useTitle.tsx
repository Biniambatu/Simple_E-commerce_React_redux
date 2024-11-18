import { useEffect } from "react"
export const useTitle = (title:any) => {

  useEffect(() => {
    document.title = `${title} | Shopping Cart`
  },[title])

  return null
}
