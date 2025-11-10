import PlanCard from "./PlanCard";
import { plan1,plan2,plan3 } from "../../assets";

const cardsData = [
  {
    image:plan1,
    title: "Alaska: Westminster to Greenwich River Thames",
    price: 35,
    reviews: 584,
  },
  {
    image: plan2,
    title: "Alaska: Westminster to Greenwich River Thames",
    price: 35,
    reviews: 584,
  },
  {
    image: plan3,
    title: "Alaska: Westminster to Greenwich River Thames",
    price: 35,
    reviews: 584,
  },
];

export default function PlansWrapper() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {cardsData.map((card, index) => (
          <PlanCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
