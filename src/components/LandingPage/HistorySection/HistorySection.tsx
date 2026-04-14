import HistoryCard from "./HistoryCard";
import Container from "@/components/layouts/Container.tsx";

const HistorySection = () => {
  return (
    <section>
      <HistoryCard
        historyClassName="flex items-center bg-secondary-color"
        historyTitle="Origins & Identity"
        historyDescription="For centuries, long before modern borders were drawn, the Tharu people have called the dense forests and fertile plains of the Terai our home. We are not merely inhabitants but intrinsic custodians of this land..."
        historyImage="/assets/images/history/history-one.svg"
        historyButtonClass="bg-primary-color max-w-[176]"
        historyContentClass="max-w-[536px] ps-[35px]"
      />
      <HistoryCard
        historyClassName="flex flex-row-reverse justify-between items-center bg-primary-color"
        historyTitle="Heritage & Resilience"
        historyDescription="From our unique art and festivals to our deep ecological knowledge, our heritage is a living testament to resilience. We've preserved our language, traditions, and community spirit through generations..."
        historyImage="/assets/images/history/history-two.svg"
        historyButtonClass="bg-secondary-color max-w-[176]"
        historyContentClass="max-w-[496px]"
      />
    </section>
  );
};

export default HistorySection;
