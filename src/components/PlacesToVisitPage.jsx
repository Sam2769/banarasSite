import React from "react";
import LeftimgComp from "./LeftimgComp";
import RightimgComp from "./RightimgComp";
const PlacesToVisitPage = () => {
  const data = {
    locations: [
      {
        title: "Mani Mandir",
        desc: "The Mani Mandir was first constructed in the 1940s, but the temple we can witness now has been renovated since then. The beginning of the temple was actually over the shrine of Dharm Samrat Swami Karpatri Maharaj. The heritage begins with the coronation of Lord Rama, which originally happened in Ayodhya. But the Mani Mandir in Varanasi was created as a court of Lord Rama as an ode to the lords and a place of worship for the same.",
        link: "https://www.google.com/maps/dir/Varanasi+Cantt,+Varanasi,+Uttar+Pradesh/Shri+Mani+Mandir,+Durgakund,+Jawahar+Nagar+Colony,+Bhelupur,+Varanasi,+Uttar+Pradesh/@25.3114942,82.9625177,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x398e2dbfc355d889:0xaa55a9ef2b061b79!2m2!1d82.9658309!2d25.329059!1m5!1m1!1s0x398e31f7eaad7261:0x3e786a55e695e312!2m2!1d82.9978493!2d25.2915932?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        title: "Mansingh Observatory",
        desc: "The Observatory is protected under Ancient Monuments and Archaeological Sites and Remains Act, 1958, and managed by the ASI. Since 1987 at different phases and at different scale renovation and preservations were performed. In the year 2000 by a grant of Rs one million Department of Tourism, U.P. has renovated and repaired this historical building to an extent. But this phase of renovation is insufficient and the work is not satisfactory. In 1988 the Irrigation Department of Uttar Pradesh has re-built and repaired the ghat.",
        link: "https://www.google.com/maps/dir/Varanasi+Cantt,+Varanasi,+Uttar+Pradesh/Man+Singh+Observatory,+Observatory,+Man+%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0+ghat,+Dashashwamedh+Ghat+Road,+Observatory,+Man+mandir,+Godowlia,+Varanasi,+Uttar+Pradesh/@25.3270336,82.9676065,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x398e2dbfc355d889:0xaa55a9ef2b061b79!2m2!1d82.9658309!2d25.329059!1m5!1m1!1s0x398e31e1df95c1b1:0x9ec01ced08a43789!2m2!1d83.0107742!2d25.3076358?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        title: "Sarnath",
        desc: "Sarnath is a major Buddhist pilgrimage site located about 10 km northeast of Varanasi , the headquarters of Varanasi district in the Indian state of Uttar Pradesh . After attaining enlightenment, Lord Buddha gave his first sermon here, which is called 'Dharma chakra Praartan' and which was the beginning of the propagation of Buddhism. This place is one of the four major pilgrimages of Buddhism (the other three are: Lumbini , Bodh Gaya and Kushinagar ). Along with this, Sarnath also has importance. It is called 'Singhpur' in Jain texts Uttar Pradesh in Statistics ,",
        link: "https://www.google.com/maps/dir/Varanasi+Cantt,+Varanasi,+Uttar+Pradesh/Sarnath+Buddhist+Temple,+Sarnath+Station+Road,+Pandeypur,+Sarnath,+Varanasi,+Uttar+Pradesh/@25.3533518,82.9553732,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x398e2dbfc355d889:0xaa55a9ef2b061b79!2m2!1d82.9658309!2d25.329059!1m5!1m1!1s0x398e2ef218c9932f:0xac888dac8b6a7f03!2m2!1d83.0266304!2d25.3806784?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        title: "Sarvaveda Mandir",
        desc: "Swarved Mahamandir is a charitable meditation centre built in Varanasi and inaugurated by Indian Prime Minister Narendra Modi and with its seven storey claims to be the biggest meditation centre in the World. The centre is built with an estimated cost of Rs 1000 crores and has a seating capacity of 20,000 people at a time. Around 3137 verses of Swarveda are carved on the walls of the mahamandir which is covered with Makarana Marble.",
        link: "https://www.google.com/maps/dir/Varanasi+Cantt,+Varanasi,+Uttar+Pradesh/Swarved+Mahamandir+Dham,+Varanasi,+Uttar+Pradesh/@25.3651647,82.9774815,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x398e2dbfc355d889:0xaa55a9ef2b061b79!2m2!1d82.9658309!2d25.329059!1m5!1m1!1s0x398e2f52ba149759:0xf05f98c9d598847e!2m2!1d83.0691712!2d25.4039357?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  };

  return (
    <>
      <div>
        {data.locations.map((location, index) =>
          index % 2 === 0 ? (
            <LeftimgComp
              key={index}
              title={location.title}
              desc={location.desc}
              link = {location.link}
            />
          ) : (
            <RightimgComp
              key={index}
              title={location.title}
              desc={location.desc}
               link = {location.link}
            />
          )
        )}
      </div>
    </>
  );
};

export default PlacesToVisitPage;
