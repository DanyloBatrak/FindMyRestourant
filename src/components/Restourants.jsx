import card1 from "./restourant_images/restourant1.jpg";
import card2 from "./restourant_images/restourant2.jpg";
import card3 from "./restourant_images/restourant3.jpg";
import card4 from "./restourant_images/restourant4.png";
import card5 from "./restourant_images/restourant5.jpg";
import card6 from "./restourant_images/restourant6.jpg";
import card7 from "./restourant_images/restourant7.jpg";
import card8 from "./restourant_images/restourant8.jpg";
import card9 from "./restourant_images/restourant9.jpg";
import card10 from "./restourant_images/restourant10.jpg";
import RestaurantCard from "./RestourantCard";
const Restourants = () => {
  return (
    <div className="restourant_container">
      <RestaurantCard
        image={card1}
        name="Quality Italian"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/3ScgAfJtsvWxBkGj9"
      />
      <RestaurantCard
        image={card2}
        name="Quality Bistro"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/JV85YPKJ5xiax8uQ7"
      />
      <RestaurantCard
        image={card3}
        name="Akdeniz Mediterranean Cuisine"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/wYZvNN5tr4naC8dG7"
      />
      <RestaurantCard
        image={card4}
        name="Bucatini"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/qg9SkJBdkCeL9Wk77"
      />
      <RestaurantCard
        image={card5}
        name="Jiang Nan NYC"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/hdako7FJTzuSk3tg7"
      />
      <RestaurantCard
        image={card6}
        name="Manhatta"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/MHLWRfCGNn7Y9ieA8"
      />
      <RestaurantCard
        image={card7}
        name="Latino Bites SunnySide"
        location="Queens, NY"
        link="https://maps.app.goo.gl/6r6kDoEkAE8hHSmd8"
      />
      <RestaurantCard
        image={card8}
        name="Bedford Gardens"
        location="Queens, NY"
        link="https://maps.app.goo.gl/c1URv3vKmC11zddZ9"
      />
      <RestaurantCard
        image={card9}
        name="Bernie’s"
        location="Queens, NY"
        link="https://maps.app.goo.gl/tL2eoUwsYHBLVoej9"
      />
      <RestaurantCard
        image={card10}
        name="Osteria Barocca"
        location="Manhattan, NY"
        link="https://maps.app.goo.gl/QN9devfKTkNXyRig8"
      />
    </div>
  );
};

export default Restourants;
