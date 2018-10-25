import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        marginTop: 75,
        minWidth: 275,
        maxWidth: 400,
        textAlign: 'center',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    nextButton: {
        marginLeft: 100,
    },
    input: {
        margin: 10,
    },
    button: {

    }
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
                        <br />
                        <img src={this.props.festival.image} height="200" />

                    </Typography>
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
                            <br />
                            <Button onClick={() => this.props.deleteFestival(this.props.festival.id)}>Delete Festival</Button>
                        </div>
                            : 
                            null
                    }
                    <Typography color="textSecondary" variant="h5">
                        Happens {moment(this.props.festival.date, "YYYYMMDD").fromNow()}
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