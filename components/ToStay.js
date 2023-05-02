import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToStay() {
  return (
    <section className="toStay">
      <section className="container justify-center items-center grid grid-cols-12">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">Stay in ATL</h1>
        <p className="mb-14 col-span-6">Guests are highly encouraged to secure hotel reservations as soon as possible to secure the 
    discounted room rate using the respective link</p>
      </section>
      <section className="grid grid-cols-6 gap-16 items-center container">
        <div className="col-span-4 mb-16">
          <Image
            src="/st-regis-front.jpg"
            alt="St Regis"
            width={500}
            height={500}
          />
        </div>
        <section className="col-span-2 mb-16">
          <h1 className="text-xl mb-2">The St. Regis Atlanta</h1>
          <p>Luxurious, Regal Hotel - A Marriott Property. Top-ranked The St. Regis Atlanta towers over Buckhead, one of the most prestigious addresses in Atlanta. Its impressive European-style architecture, fine custom furnishings and décor, top of the line amenities and impeccable first-class service set a new standard for luxury in Atlanta. Discover an unrivaled 5-star experience at the  AAA Five Diamond hotel located in -imagined guest rooms and suites. Experience the resort-style Pool Piazza and indulge in exquisite hotel dining, including a timeless Afternoon Tea at the Astor Court. Punctuated by impeccable 5-star service from its St. Regis Butlers and typified by the storied rituals for which the brand is known the world over, this rare treasure welcomes hotel guests to delight in exceptional experiences morning, noon and night in Buckhead, Atlanta.</p>
          <a href="#" className="my-4 flex items-center">Reserve hotel room block &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        </section>
        <section className="container justify-center grid grid-cols-12 gap-16">
          <section className="col-span-6">
            <Image
              src="/thompson.jpg"
              alt="The Thompson"
              width={500}
              height={500}
            />

            <h1 className="text-xl mt-6 mb-2">The Thompson</h1>
            <p>Design meets urban luxury at our boutique Buckhead hotel - A Hyatt property. An enviable address in one of Atlanta&lsquo;s most desirable neighborhoods - Buckhead is known for its luxury shopping boutiques, lively nightclubs, and trendy eateries. Thompson Buckhead is an urban retreat that seamlessly blends modern innovation and influential design. Take in a new view of the Atlanta skyline at the rooftop pool deck, outfitted with private cabanas, mingle over cocktails in our jewel box lobby bar, and indulge in classic Italian-American fare at Dirty Rascal.</p>
            <a href="#" className="my-4 flex items-center">Reserve hotel room block &nbsp; <HiOutlineChevronRight /></a>         
          </section>
          <section className="col-span-6">
            <Image
              src="/kympton.jpg"
              alt="The Kympton Sylvan"
              width={608}
              height={372}
            />
            <h1 className="text-xl mt-6 mb-2">The Kimpton Sylvan</h1>
            <p>Mid-Century Hotel - An IHG Property. Welcome to Kimpton Sylvan Hotel, an unexpected oasis tucked away in Atlanta’s Buckhead area, aka “The Beverly Hills of the South.” We’ve transformed a sprawling 1950s residential building into a boutique enclave. Mid-century style and modern-chic design cavort effortlessly throughout the space, from the supper club-style restaurant to the cheeky rooftop bar (voted one of Esquire&lsquo;s Best Bars in America in 2022). Outside, nearly 5,000 square feet of gardens lure you with hidden nooks, plus a sparkling pool. Here, just steps from high-style shopping, dining, galleries and nightlife, Georgia hospitality is warm and estive all at once.</p>
            <a href="#" className="my-4 flex items-center">Reserve hotel room block &nbsp; <HiOutlineChevronRight /></a>
          </section>
        </section>
    </section>
  )
}
