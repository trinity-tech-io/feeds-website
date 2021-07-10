import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import FeedsService from "../components/FeedsService";
import Download from "../components/Download";
import Manual from "../components/Manual";
import FeedsCard from "../components/FeedsCard";
// import mobileimg from "../assets/feeds-onboarding.svg";
import mobileimg from "../assets/feeds-mobile-transparent.png";
import CodeIcon from "@material-ui/icons/Code";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ComputerIcon from "@material-ui/icons/Computer";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const cardInfos = [
  {
    id: "main",
    avatarimg: <CodeIcon />,
    title: `Feeds`,
    username: `@Feeds-dev`,
    descrs: [
      `Hi!👋 Welcome to Feeds, a decentralized social application where users remain in full
    control of their own data! Feeds is now available on elastOS, Android and iOS! #ownyourdata ❤️❤️`,
    ],
    content: <Banner img={mobileimg} />,
    like: `15`,
    comment: `3`,
  },
  {
    id: "features",
    avatarimg: <FlashOnIcon />,
    title: `Features`,
    username: `@Feeds-features`,
    descrs: [
      `So, why Feeds?🤔 Well, with all the ongoing privacy and data breach, there's gotta be a way to safeguard our data right?  
     Here's where Feeds come into place. You're the sole owner of your data🔒 and only 👉YOU👈can control them however you want.
     Feeds also cannot be censored❌🚫 by any authority.`,
    ],
    content: <Features />,
    like: `599`,
    comment: `15`,
  },
  {
    id: "feeds-service",
    avatarimg: <ComputerIcon />,
    title: `Feeds Service Node`,
    username: `@Feeds-service`,
    descrs: [
      `Wait a minute!🙈🙉🙊 Before you can start using Feeds on your mobile phone📱, you need Feeds Service in order to run a node for storing your data.
      Download the installer💻, run it and open ➡️localhost:10080 in the local browser to receive your Publisher Account QR code.`,
    ],
    content: <FeedsService />,
    like: `116`,
    comment: `6`,
  },
  {
    id: "app",
    avatarimg: <PhoneAndroidIcon />,
    title: `Mobile App`,
    username: `@Feeds-capsule`,
    descrs: [
      `Phew💦 Okay, the next step is the easiest part😎! Go ahead and download📲 the Feeds mobile app, sign in with your DID🆔 and 
    bind the Publisher Account QR code from Feeds Service.🗨️ That's it! You're good to go. Just follow the instructions from the app to get started!🚀🌕`,
    ],
    content: <Download />,
    like: `555`,
    comment: `2`,
  },
  {
    id: "manual",
    avatarimg: <MenuBookIcon />,
    title: `Manual`,
    username: `@Feeds-manual`,
    descrs: [
      `If you have any problem😕, feel free to browse the manual🔧 from the link below or you can join our Telegram channel and ask us there!🔥`,
    ],
    content: <Manual />,
    like: `85`,
    comment: `22`,
  },
];

export default function Home() {
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
            content={cardInfo.content}
            like={cardInfo.like}
            comment={cardInfo.comment}
          />
        </div>
      ))}
    </div>
  );
}
