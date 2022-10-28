import Card from "./Card";
import Pic from "../Assets/cardimage1.webp"
import Pic2 from "../Assets/cardimage2.webp"
import Pic3 from "../Assets/cardimage3.jpeg"

const Cards = () => {
    return (
      <div className="row px-md-5 align-content-md-center">
        <div className="col ">
          <Card
            title="First Card"
            dis="This is the First card and Discriptin is loaded via props and  resuing the card template to make different cards"
            logo={Pic}
          />
        </div>
        <div className="col">
          <Card
            title="Second Card"
            dis="This is the second card and Discriptin is loaded via props and  resuing the card template to make different cards"
            logo={Pic2}
          />
        </div>
        <div className="col">
          <Card
            title="Third Card"
            dis="This is the Third card and Discriptin is loaded via props and  resuing the card template to make different cards"
            logo={Pic3}
          />
        </div>
      </div>
    );
}

export default Cards



        