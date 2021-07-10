import React from "react";
import FeedsCard from "../components/FeedsCard";
import ImageIcon from "@material-ui/icons/Image";
import mobileimg from "../assets/feeds-pasar.gif";

const cardInfos = [
  {
    id: "pasar",
    avatarimg: <ImageIcon />,
    title: `Feeds Pasar`,
    username: `@Feeds-pasar`,
    descrs: [`NFT is now available in Feeds!`],
  },
];

export default function Pasar() {
  return (
    <div>
      {cardInfos.map((cardInfo, index) => (
        <div data-aos="fade-up" data-aos-duration="1000">
          <FeedsCard
            key={index}
            id={cardInfo.id}
            avatarimg={cardInfo.avatarimg}
            title={cardInfo.title}
            username={cardInfo.username}
            descrs={cardInfo.descrs}
          />
        </div>
      ))}
    </div>
  );
}
