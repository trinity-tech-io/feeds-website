import React from "react";
import FeedsCard from "../components/FeedsCard";
import WindowsMac from "../components/WindowsMac";
import PiLinux from "../components/PiLinux";
import ServiceIntro from "../components/ServiceIntro";
import WifiIcon from "@material-ui/icons/Wifi";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import StorageIcon from "@material-ui/icons/Storage";

const cardInfos = [
  {
    id: "guideIntro",
    avatarimg: <WifiIcon />,
    title: `Feeds Service`,
    username: `@Feeds-guide`,
    descrs: [
      `In order to upgrade from Basic Account to Publisher Account, you have to install Feeds Service to unlock more features!✨
      Choose your preferred platform below.`,
    ],
    content: <ServiceIntro />,
    like: `34`,
    comment: `37`,
  },
  {
    id: "guideWM",
    avatarimg: <DesktopWindowsIcon />,
    title: `Windows/Mac`,
    username: `@guide-windows-mac`,
    descrs: [``],
    content: <WindowsMac />,
    like: `48`,
    comment: `38`,
  },
  {
    id: "guidePL",
    avatarimg: <StorageIcon />,
    title: `Raspberry Pi/Linux`,
    username: `@guide-raspberry-pi-linux`,
    descrs: [``],
    content: <PiLinux />,
    like: `342`,
    comment: `3`,
  },
];

export default function Guide() {
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
