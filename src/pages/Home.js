import React from "react";
import Banner from "../components/Banner";
import FeedsService from "../components/FeedsService";
import Download from "../components/Download";
import Manual from "../components/Manual";
import FeedsCard from "../components/FeedsCard";
import mobileimg from "../assets/feeds-onboarding.svg";
import CodeIcon from "@material-ui/icons/Code";
import ComputerIcon from "@material-ui/icons/Computer";
import GetAppIcon from "@material-ui/icons/GetApp";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const cardInfos = [
  {
    id: "main",
    avatarimg: <CodeIcon />,
    title: `Feeds`,
    username: `@Feeds-dev`,
    descr: `Hi!👋 Welcome to Feeds, a decentralized social application where users remain in full
    control of their own data! Feeds is now available on elastOS, Android and iOS! #ownyourdata ❤️❤️`,
    content: <Banner img={mobileimg} />,
    like: `15`,
    comment: `3`,
  },
  {
    id: "feeds-service",
    avatarimg: <ComputerIcon />,
    title: `Feeds Service`,
    username: `@Feeds-service`,
    descr: `Wait a minute!🙈🙉🙊 Before you can start using Feeds on your mobile phone📱, you need Feeds Service in order to run a node for storing your data.
      Download the installer💻, run it and open ➡️localhost:10080 in your local browser to receive your Publisher Account QR code.`,
    content: <FeedsService />,
    like: `116`,
    comment: `6`,
  },
  {
    id: "download",
    avatarimg: <GetAppIcon />,
    title: `Download`,
    username: `@Feeds-capsule`,
    descr: `Phew💦 Okay, the next step is the easiest part😎! Go ahead and download📲 the Feeds app and 
    bind your Publisher Account with the QR code.🗨️ That's it! You're good to go. Just follow the instructions from the app to get started!🚀🌕`,
    content: <Download />,
    like: `555`,
    comment: `2`,
  },
  {
    id: "manual",
    avatarimg: <MenuBookIcon />,
    title: `Manual`,
    username: `@Feeds-manual`,
    descr: `If you have any problem, feel free to browse the manual from the link below or you can join our Telegram channel and ask us there!🔥`,
    content: <Manual />,
    like: `85`,
    comment: `22`,
  },
];

export default function Home() {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      {cardInfos.map((cardInfo, index) => (
        <FeedsCard
          key={index}
          id={cardInfo.id}
          avatarimg={cardInfo.avatarimg}
          title={cardInfo.title}
          username={cardInfo.username}
          descr={cardInfo.descr}
          content={cardInfo.content}
          like={cardInfo.like}
          comment={cardInfo.comment}
        />
      ))}
    </div>
  );
}
