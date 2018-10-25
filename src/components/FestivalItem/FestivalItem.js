import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


const styles = {
    card: {
        marginTop: 75,
        minWidth: 275,
        maxWidth: 400,
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
        margin: 10,
        fontSize: 32,
        float: 'right',
    },
};

class FestivalItem extends Component {

    componentDidMount() {

    }

    render() {

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
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
                        <img src={this.props.festival.image} height="200" />
                    </Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary" variant="h5">
                        {moment(this.props.festival.date).format('M-DD-YYYY')}
                        <br />
                        {this.props.festival.address}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        this.props.id === 1 ?
                            <>
                                <Button onClick={() => this.props.respondToFestival(this.props.festival)}>RSVP</Button>
                                <Button onClick={() => this.props.reviewFestival(this.props.festival)}>Review</Button>
                            </>
                            :
                            <span><Button onClick={() => this.props.respondToFestival(this.props.festival)}>RSVP</Button></span>
                    }
                </CardActions>
                <CardActions>
                    {
                        this.props.id === 1 ?
                            <div>
                                <Button onClick={() => this.props.deleteFestival(this.props.festival.id)}><DeleteRoundedIcon className={classes.icon} /></Button>
                            </div>
                            :
                            null
                    }
                    <Typography className={classes.countDown} color="textSecondary" variant="h6">

                    </Typography>
                </CardActions>

            </Card>
        );
    }
}

FestivalItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FestivalItem);