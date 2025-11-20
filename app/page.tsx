import { redirect } from "next/navigation";



export default function app() {
  return(
    redirect("./login")
  )
}