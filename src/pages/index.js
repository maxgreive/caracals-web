import * as React from "react";
import Video from "../components/Video";

const IndexPage = () => {
  return (
    <main>
      <section className="bg-gray-900">
        <Video />
        <div className="md:container h-screen w-full mx-auto px-4">
        </div>
      </section>
      <section>
        <div className="md:container h-screen w-full mx-auto px-4"></div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
