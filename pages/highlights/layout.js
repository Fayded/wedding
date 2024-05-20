export default function Layout({children}) {
  return (
    <>
      <main>
        <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-12 mb-5 md:mb-0">
            <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Photo Highlights</h1>
            <div>{children}</div>
        </section>
      </main>
    </>
  )
}