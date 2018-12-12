import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBarOther from '@material-ui/core/AppBar';
import AppBar from '../AppBar'
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux'

import { currentProvider } from '../../reducers/currentProvider'
import { fetchProvider, setServiceQtyRemaining, setServiceStatus, setProviderMessage } from '../../actions'


const styles = theme => ({
    // appBar: {
    //     position: 'relative',
    // },
    outerGrid: {
        marginTop: '80px',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 20,
        marginBottom: theme.spacing.unit * 20,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 20,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

class LiveUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            status: "",
            quantity: 0
        }
        // set initial state
        // no local state?

        // bind functions
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        // console.log("Will mount")
        const id = this.props.match.params.id
        this.props.fetchProvider(id)
        console.log("id is setting to", id)
    }

    componentDidMount() {
        // console.log("mounted")


    }

    componentDidUpdate(prevProps) {
        if (this.props.currentProvider.update_message != prevProps.currentProvider.update_message) {
            this.setState({
                message: this.props.currentProvider.update_message
            })
        } if (this.props.currentProvider.services !== prevProps.currentProvider.services) {
            this.props.currentProvider.services.map(service => {
                this.setState({
                    [`P${this.props.currentProvider.id}-S${service.id}-status`]: service.status,
                    [`P${this.props.currentProvider.id}-S${service.id}-quantity`]: service.qty_remaining
                })
            })
        }

    }

    handleOnChange(e, serviceId) {
        // console.log('e handleChange', e.target.id)
        e.preventDefault()
        // const change = (e.target.id == "add") ? 1 : -1
        if (e.target.id == "add" || e.target.id == "subtract") {
            const change = (e.target.id == "add") ? 1 : -1
            // this.setState({
            //     [e.target.name]: this.state[e.target.name] + change
            // })
            // .then((params) => {
            //     console.log('from handle on change stateset', params)
            this.props.setServiceQtyRemaining(this.props.currentProvider.id, serviceId, this.state[e.target.name] + change)

            // })
        }
        else {

            this.setState({
                [e.target.name]: e.target.value,

                //status: e.target.value //this is the hack
            })
        }
    }

    handleSubmit(e, serviceId) {
        e.preventDefault()
        // console.log('e handleSubmit', e.target.id)
        this.props.setProviderMessage(this.props.currentProvider.id, this.state.message)
        // console.log("E is for ekkies and that's good enough for me:", e.target)
        if (serviceId != undefined) {
            // console.log("the status is ",this.state.status)
            const dataKey = `P${this.props.currentProvider.id}-S${serviceId}-status`
            const dataQty = `P${this.props.currentProvider.id}-S${serviceId}-quantity`
            // console.log(`Test status key is:${dataKey}`)
            // console.log("data in state[dataKey] is ", this.state[dataKey])
            this.props.setServiceStatus(this.props.currentProvider.id, serviceId, this.state[dataKey])
            this.props.setServiceQtyRemaining(this.props.currentProvider.id, serviceId, this.state[dataQty])
        }
    }


    // function FormStyle(props) {
    render() {
        // console.log("this is the provider", this.props.providers[0])

        let services = []
        console.log("showing provider of", this.props.currentProvider)

        let currentProvider = this.props.currentProvider

        if (currentProvider && currentProvider.services) {
            console.log("showing services of", currentProvider.services)
            services = currentProvider.services.map((service, i) => {

                return (
                    <div key={"serviceUpdate" + i}>
                        <Typography variant="h6" gutterBottom>
                            Service Name: {service.name} {service.id}
                        </Typography>

                        <div id="service_qty">
                            <Typography variant="subheading" gutterBottom>
                                Total Quantity: {service.qty_default}, Remaining: {service.qty_remaining}
                            </Typography>

                            <form onSubmit={(e) => { this.handleSubmit(e, service.id) }}>
                                <span name={`P${currentProvider.id}-S${service.id}-quantity`} onChange={this.handleOnChange} value={this.state[`P${currentProvider.id}-S${service.id}-quantity`]} > {this.state[`P${currentProvider.id}-S${service.id}-quantity`]} </span>
                                <button id="add" onClick={(e) => { this.handleOnChange(e, service.id) }} name={`P${currentProvider.id}-S${service.id}-quantity`}> + </button>
                                <button id="subtract" onClick={(e) => { this.handleOnChange(e, service.id) }} name={`P${currentProvider.id}-S${service.id}-quantity`}> - </button>
                            </form>
                        </div>

                        <div id='service_status'>

                            <Typography variant="h6" gutterBottom>
                                Current Service Status: {service.status}
                            </Typography>

                            <form onSubmit={(e) => { this.handleSubmit(e, service.id) }}>

                                <Typography variant="subheading" gutterBottom>
                                    Set New Service Status:
                            </Typography>
                                <input type='text' name={`P${currentProvider.id}-S${service.id}-status`} onChange={this.handleOnChange} value={this.state[`P${currentProvider.id}-S${service.id}-status`]} />
                                <Button type="submit">Set New Status</Button>
                            </form>

                        </div>

                    </div>
                )
            });
        }

        const { classes } = this.props;
        return (

            <React.Fragment>
                <CssBaseline />
                {/* <AppBarOther position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            SUP: Update Me!
          </Typography>
                    </Toolbar>
                </AppBarOther> */}


                <AppBar />

                <Grid container spacing={8} className={classes.outerGrid}>
                    <Grid container alignItems="center" justify="center">
                        <Paper >
                            <Typography variant="h4" gutterBottom>
                                {currentProvider.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Change the Provider Message here:
                    </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type='text' id='set_provider_message'
                                        name='message'
                                        onChange={this.handleOnChange}
                                        value={this.state.message} />
                                    <Button>Submit Message</Button>

                                </Grid>

                                <Grid item xs={12}>
                                    {services}
                                    {/* <Typography variant="h6" gutterBottom>
                                Service Name: {service.name} {service.id}
                            </Typography>
                            <TextField
                                type='text' id='set_provider_message'
                                name='message'
                                onChange={this.handleOnChange}
                                value={this.state.message} />
                            <Button>Submit Message</Button> */}
                                </Grid>
                                {/* <Grid item xs={12}>
                            <TextField
                                type='text' id='set_provider_message'
                                name='message'
                                onChange={this.handleOnChange}
                                value={this.state.message} />
                            <Button>Submit Message</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type='text' id='set_provider_message'
                                name='message'
                                onChange={this.handleOnChange}
                                value={this.state.message} />
                            <Button>Submit Message</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type='text' id='set_provider_message'
                                name='message'
                                onChange={this.handleOnChange}
                                value={this.state.message} />
                            <Button>Submit Message</Button>
                        </Grid> */}
                                <Grid item xs={12}>
                                    {/* <Button
                                variant="contained"
                                color="primary"
                            >
                                Submit
                    </Button> */}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid >
            </React.Fragment>
        );

    }
}

const mapStateToProps = ({ providers, currentProvider }) => {
    return {
        currentProvider: currentProvider.currentProvider,
        providers: providers.providers
        // currentProvider: providers.providers.find( provider => provider.id == currentProvider.currentProvider.id ) ///
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvider: (id) => {
            return dispatch(fetchProvider(id))
        },
        setProviderMessage: (id, message) => {
            return dispatch(setProviderMessage(id, message))
        },
        setServiceStatus: (providerId, serviceId, status) => {
            return dispatch(setServiceStatus(providerId, serviceId, status))
        },
        setServiceQtyRemaining: (providerId, serviceId, quantity) => {
            return dispatch(setServiceQtyRemaining(providerId, serviceId, quantity))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LiveUpdate));