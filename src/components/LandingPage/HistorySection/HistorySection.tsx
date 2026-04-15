import HistoryCard from "./HistoryCard";

const HISTORY_CARDS = [
  {
    title: "Origins & Identity",
    description:
      "For centuries, long before modern borders were drawn, the Tharu people have called the dense forests and fertile plains of the Terai our home. We are not merely inhabitants but intrinsic custodians of this land...",
    image: "/assets/images/history/history-one.svg",
    frameImage: "/assets/images/history/frame.png",
    isReversed: false,
  },
  {
    title: "Heritage & Resilience",
    description:
      "From our unique art and festivals to our deep ecological knowledge, our heritage is a living testament to resilience. We've preserved our language, traditions, and community spirit through generations...",
    image: "/assets/images/history/history-two.svg",
    frameImage: "/assets/images/history/frame-two.png",
    theme: "secondary",
    isReversed: true,
  },
];

const HistorySection = () => {
  return (
    <section>
      {HISTORY_CARDS.map((item, index) => {
        return (
          <HistoryCard
            key={index}
            isReversed={item.isReversed}
            theme={item.theme}
            historyTitle={item.title}
            historyDescription={item.description}
            historyImage={item.image}
            frameImage={item.frameImage}
          />
        );
      })}
    </section>
  );
};

export default HistorySection;
