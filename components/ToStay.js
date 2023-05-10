import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToStay() {
  return (
    <section className="toStay">
      <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-12">
        <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Stay in ATL</h1>
        <p className="mb-14 col-span-12 md:col-span-8 md:col-start-3 text-center">Guests are highly encouraged to book hotel reservations as soon as possible. <br />Room blocks have been reserved for guests at a discounted rate. Click the respective links below to secure an ATL stay.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-0 md:gap-16 items-center container">
        <div className="col-span-12 md:col-span-4 mb-16">
          <Image
            src="/st-regis-front.jpg"
            alt="St Regis"
            width={500}
            height={500}
          />
        </div>
        <section className="col-span-12 md:col-span-2 mb-16">
          <h1 className="text-xl mb-4"><a href="https://www.marriott.com/en-us/hotels/atlxr-the-st-regis-atlanta/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target='_blank'>The St. Regis</a></h1>
          <p className="mb-2">A Luxurious, Regal Hotel - A Marriott Property</p>
          <p>The location of the wedding celebration, guests are highly encouraged to stay at this landmark hotel. Top-ranked The St. Regis Atlanta towers over Buckhead, a city dubbed &apos;The Beverly Hills of the South&apos;. Its impressive European-style architecture, fine custom furnishings and décor, top of the line amenities and impeccable first-class service set a new standard for luxury in Atlanta.</p>
          <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1678224045654&key=GRP&app=resvlink" target='_blank' className="my-4 flex items-center">Reserve the block rate &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        </section>
        <section className="container justify-center grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16">
          <section className="col-span-12 md:col-span-6">
            <Image
              src="/thompson.jpg"
              alt="The Thompson"
              width={608}
              height={370}
            />

            <h1 className="text-xl mt-6 mb-4"><a href="https://www.hyatt.com/thompson-hotels/en-US/atlth-thompson-atlanta-buckhead/?src=corp_lclb_gmb_seo_atlth" target='_blank'>The Thompson</a></h1>
            <p className="mb-2">An Urban, Boutique Hotel - A Hyatt Property</p>
            <p>Design meets urban luxury at this boutique Buckhead hotel. Thompson Buckhead is an urban retreat that seamlessly blends modern innovation and influential design. Take in a new view of the Atlanta skyline at the rooftop pool deck, outfitted with private cabanas, mingle over cocktails in our jewel box lobby bar, and indulge in classic Italian-American cuisine from a James Beard nominated chef.</p>
            <a href="https://www.hyatt.com/en-US/group-booking/ATLTH/G-HID0" target='_blank' className="my-4 flex items-center">Reserve the block rate &nbsp; <HiOutlineChevronRight /></a>         
          </section>
          <section className="col-span-12 md:col-span-6">
            <Image
              src="/kympton.jpg"
              alt="The Kympton Sylvan"
              width={608}
              height={370}
            />
            <h1 className="text-xl mt-6 mb-4"><a href="https://www.thesylvanhotel.com/?&utm_source=Google%20My%20Business&utm_medium=organic&utm_campaign=GMB&utm_term=the%20sylvan" target='_blank'>The Kimpton Sylvan</a></h1>
            <p className="mb-2">A Mid-Century, Chic Hotel - An IHG Property</p>
            <p>An unexpected oasis tucked away in Atlanta’s posh Buckhead area. Mid-century style and modern-chic design cavort effortlessly throughout the space, from the supper club-style restaurant to the cheeky rooftop bar. Outside, nearly 5,000 square feet of gardens lure you with hidden nooks, plus a sparkling pool. Here, just steps from high-style shopping, dining, galleries and nightlife, Georgia hospitality is warm and estive all at once.</p>
            <a href="https://www.kimptonhotels.com/redirect?path=asearch&brandCode=KI&localeCode=en&regionCode=1&hotelCode=ATLKM&checkInDate=14&checkInMonthYear=022024&checkOutDate=18&checkOutMonthYear=022024&rateCode=6CBARC&_PMID=99801505&GPC=SEN&cn=no&viewfullsite=true" target='_blank' className="my-4 flex items-center">Reserve the block rate &nbsp; <HiOutlineChevronRight /></a>
          </section>
        </section>
    </section>
  )
}
