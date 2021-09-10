import React from "react";
import FeedsCard from "../components/FeedsCard";
import WindowsMac from "../components/WindowsMac";
import PiLinux from "../components/PiLinux";
import ServiceIntro from "../components/ServiceIntro";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import StorageIcon from "@material-ui/icons/Storage";

const cardInfos = [
  {
    id: "guideIntro",
    avatarimg: <MenuBookIcon />,
    title: `Feeds Service`,
    username: `@Feeds-guide`,
    descrs: [
      `In order to upgrade from Basic Account to Publisher Account, you have to install Feeds Service!✨
      Check the installation guide below for more details.`,
    ],
    content: <ServiceIntro />,
  },
  {
    id: "guideWM",
    avatarimg: <DesktopWindowsIcon />,
    title: `Windows/Mac`,
    username: `@guide-windows-mac`,
    descrs: [``],
    content: <WindowsMac />,
  },
  {
    id: "guidePL",
    avatarimg: <StorageIcon />,
    title: `Raspberry Pi/Linux`,
    username: `@guide-raspberry-pi-linux`,
    descrs: [``],
    content: <PiLinux />,
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
          />
        </div>
      ))}
    </div>
  );
}
