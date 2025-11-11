import React from 'react'
import PlanCard from '../home/PlanCard';
import { plan1,plan2,plan3 } from '../../assets';

function PopularPackages() {
    const cardsData = [
      {
        id:1,
        image:plan1,
        title: "Alaska: Westminster to Greenwich River Thames",
        price: 35,
        reviews: 584,
      },
      {
        id:2,
        image: plan2,
        title: "Alaska: Westminster to Greenwich River Thames",
        price: 35,
        reviews: 584,
      },
      {
        id:3,
        image: plan3,
        title: "Alaska: Westminster to Greenwich River Thames",
        price: 35,
        reviews: 584,
      },
      {
        id:4,
        image:plan1,
        title: "Alaska: Westminster to Greenwich River Thames",
        price: 35,
        reviews: 584,
      },
       {
        id:5,
        image: plan2,
        title: "Alaska: Westminster to Greenwich River Thames",
        price: 35,
        reviews: 584,
      },
       {
        id:6,
        image: plan3,
        title: "Alaska: Westminster to Greenwich River Thames",
        price: 35,
        reviews: 584,
      }
    ];
  return (
    <div className='lg:px-20 py-10 px-6'>

        <div>
          <p className="text-lg text-[#1A1A1A] font-bold font-[Quattrocento]">Popular Packages</p>
          <h2 className="font-[Mulish] text-2xl md:text-3xl lg:text-[52px] capitalize drop-shadow-sm drop-shadow-[#FFFFFF66] font-bold text-[#1C2B38] leading-tight">
         Popular Packages<br className="hidden sm:block" /> for you
          </h2>
        </div>
         <section className="w-full flex justify-center py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {cardsData.map((card) => (
                  <PlanCard key={card.id} {...card} />
                ))}
              </div>
            </section>


      
    </div>
  )
}

export default PopularPackages
