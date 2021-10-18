import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import {ListItemSecondaryAction} from "@material-ui/core";
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
        margin: "5px 0",
        color: "#a067ff"
    },
    description: {
        fontSize: "12px",
        margin: "0 0 5px",
        maxWidth: "380px"
    },
    address: {
        fontSize: "13px",
    },
    onHover: {
        "&:hover": {
            backgroundColor: "#368BFF",
            color: "#FFF",
        },
    },
}));

function Primary(props) {
    const classes = useStyles();
    return (
        <>
            <h4 className={classes.name}>{props.name}</h4>
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
        fetch('https://test.trinity-feeds.app/pasar/api/v1/whitelist')
            .then(response => response.json())
            .then(data => setWhitelist(data.data));
    }, [])

    return (
        <div className={classes.demo}>

            <List dense={false}>
                <Divider variant="fullWidth" component="li"/>
                {whitelist.map((item, index) => (
                    <div>
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar src={`https://ipfs.trinity-feeds.app/ipfs/${item.avatar}`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Primary name={item.name} description={item.description} />}
                                secondary={<Secondary address={item.address} />}
                            />
                            <ListItemSecondaryAction>
                                <Link href={item.social[1].twitter} target="_blank">
                                    <IconButton  aria-label="Twitter" color="primary" className={classes.onHover}>
                                        <TwitterIcon />
                                    </IconButton>
                                </Link>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant="fullWidth" component="li"/>
                    </div>
                ))}
            </List>
        </div>
    );
}
