import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function WeekendEvents() {
  return (
    <section className="weekendEvents">
      <section className="container justify-center items-center grid grid-cols-12">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">Weekend Events in ATL</h1>
      </section>
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
      <section className="grid grid-cols-6 gap-16 items-center container">
        <div className="col-span-4">
          <Image
            src="/st-regis.jpg"
            alt="St Regis"
            width={500}
            height={500}
          />
        </div>
        <section className="col-span-2">
          <h1 className="text-xl mb-2">The Celebration & After Party</h1>
          <p className="mb-2">Eighty-Eight, W Paces Ferry Rd NW, <br />Atlanta, GA 30305</p>
          <p>Luxurious, Regal Hotel - A Marriott Property. Top-ranked The St. Regis Atlanta towers over Buckhead, one of the most prestigious addresses in Atlanta. Its impressive European-style architecture, fine custom furnishings and décor, top of the line amenities and impeccable first-class service set a new standard for luxury in Atlanta. Discover an unrivaled 5-star experience at the  AAA Five Diamond hotel located in -imagined guest rooms and suites. Experience the resort-style Pool Piazza and indulge in exquisite hotel dining, including a timeless Afternoon Tea at the Astor Court.</p>
        </section>
      </section>
    </section>
  )
}