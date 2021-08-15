import React from "react";
import FeedsCard from "../components/FeedsCard";
import CodeIcon from "@material-ui/icons/Code";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

const cardInfos = [
  {
    id: "Disclaimer",
    avatarimg: <CodeIcon />,
    title: `Feeds NFT Disclaimer`,
    username: `@Feeds-dev`,
    descrs: [""],
    content: <NFTList />,
  },
];

export default function DisclaimerNFT() {
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

const useStyles = makeStyles((theme) => ({
  media: {
    width: "50%",
    height: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(2),
  },
}));

function NFTList() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5">
        The Feeds team is not liable for any losses resulting from using
        services provided by Feeds Pasar (and its suppliers), including but not
        limited to direct, indirect, incidental, punitive, and incurred losses:
      </Typography>
      <List>
        <ListItem>
          1. User errors, such as password loss, illegal transactions, personal
          information leakage, or incorrect address inputs, and more;
        </ListItem>
        <ListItem>2. Data loss, damage, or server failure;</ListItem>
        <ListItem>3. Loss caused by business interruption;</ListItem>
        <ListItem>
          4. Vulnerabilities or any type of program problems such as wallets and
          smart contracts, and any other functional problems related to the
          blockchain or encrypted assets such as forks and technical node
          problems;
        </ListItem>
        <ListItem>
          5. Any unauthorized third party activities, including but not limited
          to the use of viruses, phishing, brute force, or other attack methods
          on services or encrypted assets;
        </ListItem>
        <ListItem>
          6. Losses caused by the use of the services of this platform include,
          but are not limited to, legal issues, contract liability issues,
          economic issues, etc.;
        </ListItem>
        <ListItem>
          7. Any indirect, special, or incidental loss or damage caused by
          infringement (including negligence), breach of contract or any other
          reason, regardless of whether such losses or damages can be reasonably
          foreseen by the Feeds team, and regardless of whether the Feeds team
          has been notified of the possibilities of such losses or damages in
          advance.
        </ListItem>
        <ListItem>
          8. Any other losses related to the services provided by the Feeds
          Parser platform that are not caused by the Feeds team;
        </ListItem>
        <ListItem>
          9. The Feeds team does not make any explicit or implied guarantees for
          the use of the services of the Feeds Parser platform, including but
          not limited to: the applicability of the services provided by this
          platform, errors or omissions, continuity, accuracy, reliability, and
          applicability to a particular use. In addition, the Feeds team does
          not make any promises or guarantees regarding the validity, accuracy,
          correctness, reliability, quality, stability, completeness, or
          timeliness of the technology and information relating to the services
          provided by the Feeds Parser platform. Using the services provided by
          this platform is a personal choice taken by users at their own risk.
          The Feeds team does not make any explicit or implied guarantees
          regarding the market, value, or price of digital assets. Please be
          aware that the digital asset market is unstable, and the market can
          fluctuate or collapse at any time. Trading digital assets is a
          personal choice users take at their own risk, and users should be able
          to bear any potential losses independently.
        </ListItem>
      </List>
      <Typography variant="h5">
        The Feeds team does not provide any evaluation or comments as to whether
        the services provided by Feeds Pasar (and its suppliers) comply with the
        laws and regulations or relevant policy requirements of any particular
        jurisdiction. It is strongly recommended that users strictly abide by
        the laws of their respective jurisdictions.
      </Typography>
    </div>
  );
}
