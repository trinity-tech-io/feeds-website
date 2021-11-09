import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    demo: {
        height: "500px",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    name: {
        margin: "5px 10px 5px 0",
        color: "#a067ff",
        display: "inline-block",
        fontWeight: "bold"
    },
    description: {
        fontSize: "12px",
        margin: "0 0 5px",
    },
    address: {
        fontSize: "13px",
    },
}));

function Primary(props) {
    const classes = useStyles();
    return (
        <>
            <span className={classes.name}>{props.name}</span>
            <Link href={props.twitter} target="_blank">
                <IconButton  aria-label="Twitter" color="secondary">
                    <TwitterIcon fontSize="small" />
                </IconButton>
            </Link>
            <p className={classes.description}>{props.description}</p>
        </>
    )
}

function Secondary(props) {
    const classes = useStyles();
    return (
        <span className={classes.address}>{props.address}</span>
    )
}

export default function WhiteList() {
    const classes = useStyles();
    const [whitelist, setWhitelist] = React.useState([]);

    React.useEffect(() => {
        fetch('https://assist.trinity-feeds.app/pasar/api/v1/whitelist')
            .then(response => response.json())
            .then(data => setWhitelist(data.data));
    }, [])

    return (
        <div className={classes.demo}>
            <List dense={false}>
                {whitelist.map((item, index) => (
                    <div>
                        <ListItem key={index} style={{margin: "0 5px"}}>
                            <ListItemAvatar>
                                <Avatar src={`https://ipfs.trinity-feeds.app/ipfs/${item.avatar}`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Primary name={item.name} description={item.description}
                                                  twitter={item.social[1].twitter} website={item.social[0].website}/>}
                                secondary={<Secondary address={item.address} />}
                            />
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    );
}
