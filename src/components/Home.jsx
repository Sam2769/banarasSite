import React from "react";
import Video from "./Video";
import Page2 from "./Page2";
import Page1 from "./Page1";
const Home = () => {
  const facts = [
    {
      id: 1,
      title: "The most ancient surviving city",
      desc: "It is believed that this holy city is one of the oldest living cities in the world. In fact, it is believed that this place was once the home of Lord Shiva and Goddess Parvati. This connection of this city with eternity doesn’t end here; for it is believed that the person who inhales his final breath here, actually attains salvation.",
    },

    {
      id: 2,
      title: "The epicenter of sciences",
      desc: "Being the land where the founder of natural sciences, Maharishi Patanjali, took his first steps, this town has been at the helm of the germination of scientific knowledge.It is hardly an enigma that the ancient holistic healing sciences such as Yoga and other traditional forms have their roots in this city.",
    },
    {
      id: 3,
      title: "A major trading center",
      desc: "Not only is Varanasi the spiritual capital of the nation, it is also a leading trading center as a great amount of trade is done here. The intricate silver and gold brocades and the famous Banarasi silk are the major items that this city is known for.",
    },
    {
      id: 4,
      title: "A hub of rich literature",
      desc: "An interesting fact about Varanasi is that a number of famous literary geniuses such as Munshi Prem Chand and Tulsi Das hail from this city.",
    },
  ];
  return (
    <>
      <Page1 />
      <Page2 />
    </>
  );
};

export default Home;
