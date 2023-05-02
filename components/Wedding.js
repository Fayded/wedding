import React from 'react'
import Image from 'next/image'

export default function Wedding() {
  return (
    <section className="wedding">
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-6 mb-16">
          <Image
            src="/church.jpg"
            alt="Christ the King"
            width={500}
            height={500}
          />
          <h1 className="text-xl mt-6 mb-2">The Ceremony</h1>
          <p>Gowns and Tuxes</p>
          <p>6:00pm Ceremony at Cathedral of Christ the King.</p>
        </section>
        <section className="col-span-6 mb-16">
          <Image
            src="/kympton.jpg"
            alt="The Kympton Sylvan"
            width={608}
            height={372}
          />
          <h1 className="text-xl mt-6 mb-2">The Kimpton Sylvan</h1>
          <p>Mid-Century Hotel - An IHG Property. Welcome to Kimpton Sylvan Hotel, an unexpected oasis tucked away in Atlanta&lsquo;s Buckhead area, aka &lsquo;The Beverly Hills of the South.&rsquo; We&lsquo;ve transformed a sprawling 1950s residential building into a boutique enclave. Mid-century style and modern-chic design cavort effortlessly throughout the space, from the supper club-style restaurant to the cheeky rooftop bar (voted one of Esquire&lsquo;s Best Bars in America in 2022). Outside, nearly 5,000 square feet of gardens lure you with hidden nooks, plus a sparkling pool. Here, just steps from high-style shopping, dining, galleries and nightlife, Georgia hospitality is warm and estive all at once.</p>
        </section>
      </section>
    </section>
  )
}
