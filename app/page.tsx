import { Suspense } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Installation from "@/components/installation"
import Commands from "@/components/commands"
import UsageExample from "@/components/usage-example"
import Configuration from "@/components/configuration"
import Releases from "@/components/releases"
import Loading from "@/components/loading"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Features />
      <Installation />
      <Commands />
      <UsageExample />
      <Configuration />
      <Suspense fallback={<Loading />}>
        <Releases />
      </Suspense>
    </div>
  )
}
