import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';


const styles = {
    card: {
        marginTop: 75,
        minWidth: 275,
        maxWidth: 400,
        maxHeight: 600,
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
    countDown: {
        textAlign: 'center',
        color: 'CornflowerBlue',
        margin: 10,
    },
    icon: {
        margin: 2,
        fontSize: 32,
        textAlign: 'right',
    },
    buttons: {
        width: 400,
        margin: 'auto',
    },
    button: {
        margin: 15,
    },
};

class FestivalItem extends Component {

    componentDidMount() {

    }

    render() {

        const { classes } = this.props;

        return (
            <Card className={classes.card} >
                <CardContent>
                    <Typography variant="h3" gutterBottom>
                        {this.props.festival.name}
                        <br />
                    </Typography>
                    <Typography className={classes.countDown} color="textSecondary" variant="h6">
                        Happening {moment(this.props.festival.date, "YYYYMMDD").fromNow()}
                    </Typography>
                    <Typography>
                        <br />
                        <img src={this.props.festival.image} height="200" alt="Music festival" />
                    </Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary" variant="h5">
                        {moment(this.props.festival.date).format('M-DD-YYYY')}
                        <br />
                        {this.props.festival.address}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        this.props.id === 1 ?
                            <div className={classes.buttons}>
                                <Button className={classes.button} size="large" variant="outlined" color="primary" onClick={() => this.props.respondToFestival(this.props.festival)}>RSVP</Button>
                                <Button className={classes.button} size="large" variant="outlined" onClick={() => this.props.reviewFestival(this.props.festival)}>Review</Button>
                                {/* <Button className={classes.button} size="large" variant="outlined" color="secondary" onClick={() => this.props.deleteFestival(this.props.festival.id)}>Delete</Button> */}
                                <br />
                                <ConfirmDelete  
                                    deleteFestival={this.props.deleteFestival}
                                    festival={this.props.festival}
                                />
                            </div>
                            :
                            <div className={classes.buttons}>
                                <Button size="large" variant="outlined" color="primary" onClick={() => this.props.respondToFestival(this.props.festival)}>RSVP</Button>
                            </div>
                    }
                </CardActions>
                <br />
                <br />  
            </Card>
        );
    }
}

FestivalItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FestivalItem);