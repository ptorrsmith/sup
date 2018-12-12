import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import indigo from '@material-ui/core/colors/indigo'
// import Markdown from './Markdown';


import AppBar from '../AppBar'

// import { theBackground, grid_container, profile_header, profole_body } from '../../../public/style'

import { setCurrentProvider, fetchProvider } from "../../actions";

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  headerCard: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 3,
  },
  headerCardContent: {
    padding: `${theme.spacing.unit * 2}px`,
    paddingTop: `${theme.spacing.unit * 10}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 1,
  },
  card: {
    display: 'flex',
    marginBottom: 1
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    // height: 160,
    width: '100%'
  },
  media: {
    // height: 140,
    height: 480
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[300],
    marginBottom: theme.spacing.unit * 2,
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  updateMessageBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[300],
    marginBottom: theme.spacing.unit * 2,
  },
  updateMessageSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 4,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});


class NewProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // console.log("willMount")
  }

  componentDidMount() {
    // console.log("didMount")

    const id = this.props.match.params.id;
    // get the provider from global redux state'
    // console.log("NewProfile cDU id ", id)
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);

    // const id = this.props.match.params.id;
    // // get the provider from global redux state'
    // console.log("NewProfile cDM id ", id)
    // const currentProvider =
    //   this.props.providers.length > 0 &&
    //   this.props.providers.find(provider => provider.id == id);
    // currentProvider && this.props.setCurrentProvider(currentProvider);

    // get the provider from global redux state'
    // console.log("XXXX-id", id)
    // console.log("DM XXXXXX-providers ", this.props.providers)
    // console.log("XXXXXX-props ", this.props)
    // console.log("XXXX-currentProvider", this.props.provider)
  }

  componentDidUpdate() {

    const id = this.props.match.params.id;
    // get the provider from global redux state'
    // console.log("NewProfile cDU id ", id)
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);

    // console.log("didUpdate")
    // const id = this.props.match.params.id;
    // // get the provider from global redux state'
    // console.log("NewProfile cDU id ", id)
    // const currentProvider =
    //   this.props.providers.length > 0 &&
    //   this.props.providers.find(provider => provider.id == id);
    // currentProvider && this.props.setCurrentProvider(currentProvider);
  }

  render() {
    let aProvider = this.props.provider;
    // console.log("NewProfile aProvider = ", aProvider)

    let liveProvider = this.props.providers.find(
      item => item.id == aProvider.id
    );
    if (liveProvider) {
      aProvider = liveProvider;
    }

    if (!aProvider) {
      aProvider = {
        id: 1,
        name: "Temp default provider",
        description: "Somthing isnt quite lining up",
        address: "??????",
        phone: "(04) ...---...",
        update_message: "not really functional",
        lat: -41.300598,
        long: 174.774082,
        email: "BlameBarry@Garry.com",
        website_url: "http://ComputerSaysNo.org.nz/",
        hours: "Open: until something changes",
        services: []
      };
    }

    // let services = [];
    // if (aProvider.services) {
    //   services = aProvider.services.map(() => { });
    // }

    // let providerServices = [1, 2, 99] // for render

    // console.log("b4 Making services aprovider ", aProvider)

    // if (aProvider.services) {
    //   console.log("Making services")
    //   providerServices = aProvider.services.map((service, i) => {
    //     return (<div className="profile-service" key="service-${i}">

    //       <p key={service.id}><span>Service Name: </span>{service.name}</p>
    //       {/* The service type ID span below needs work, and might need touching up when more IDs are added.. */}
    //       {service.service_type_id < 3 ? <p key={service.id}><span>{service.unit} Remaining: </span>{service.qty_remaining}</p> : ""}
    //       <p key={service.id}><span>Service Status: </span>{service.status}</p>

    //     </div>)
    //   })
    //   console.log("providerServices ::::: ", providerServices)
    // }

    const { classes } = this.props;



    const sections = [
      'Technology',
      'Design',
      'Culture',
      'Business',
      'Politics',
      'Opinion',
      'Science',
      'Health',
      'Style',
      'Travel',
    ];

    const featuredPosts = [
      {
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
    ];

    // const posts = [post1, post2, post3];

    const archives = [
      'March 2020',
      'February 2020',
      'January 2020',
      'December 2019',
      'November 2019',
      'October 2019',
      'September 2019',
      'August 2019',
      'July 2019',
      'June 2019',
      'May 2019',
      'April 2019',
    ];

    const social = ['GitHub', 'Twitter', 'Facebook'];






    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar />
        <div className={classes.layout}>
          {/* <Toolbar className={classes.toolbarMain}>
            <Button size="small">Subscribe</Button>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Blog
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Sign up
            </Button>
          </Toolbar> */}
          {/* <Toolbar variant="dense" className={classes.toolbarSecondary}>
            <Typography color="inherit" noWrap>
              Home
              </Typography>
            <Typography color="inherit" noWrap>
              Admin
              </Typography>
            ))}
          </Toolbar> */}
          <main>
            {/* Main featured post */}
            {/* <Paper className={classes.mainFeaturedPost}>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      {aProvider.name}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      {aProvider.address}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      {aProvider.phone}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper> */}
            {/* End main featured post */}


            <Card className={classes.headerCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={aProvider.image_url}
                  title={'front image for ' + aProvider.name} />
                <CardContent>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {aProvider.name}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {aProvider.address}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {aProvider.phone}
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>


            <Grid container spacing={50}>
              <Grid item xs={12} md={4}>
                <Paper elevation={2} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    Hours
                  </Typography>
                  <Typography>
                    {aProvider.hours}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={50}>
              <Grid item xs={12} md={4}>
                <Paper elevation={2} className={classes.updateMessageBox}>
                  <Typography variant="h6" gutterBottom>
                    Message
                    </Typography>
                  <Typography>
                    {aProvider.update_message}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>



            {/* Sub featured posts */}
            <Grid container spacing={40} className={classes.cardGrid}>
              {aProvider.services && aProvider.services.map(service => (
                <Grid item key={service.id} xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {service.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {service.status}
                      </Typography>
                      {service.unit && service.unit != '' &&
                        <Typography variant="subtitle1" paragraph>
                          {service.qty_remaining} {service.unit} remaining:
                        </Typography>
                      }
                    </CardContent>
                    {/* <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                        title="Image title"
                      />
                    </Hidden> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* End sub featured posts */}
          </main>
        </div>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            'sup - Hihi 2018
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Proudly brought to you by Bobbi, James, Ruby, Brandon and Pete
          </Typography>
          <Typography variant="subtitle4" align="center" color="textSecondary" component="p">
            and Cathy, Sungmii, Joan, Taz, Kelly, Ollie
          </Typography>
          <Typography variant="subtitle6" align="center" color="textSecondary" component="p">
            and Ross, Cliff, Robbie, Kelly, Engie, Ming, Rohan, Josh, Annie, and lots more
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    )












    // console.log("Classes:::::::", classes)

    // return (
    // <React.Fragment>
    //   <CssBaseline />

    //   <AppBar />
    //   <div>
    //     <img src={aProvider.image_url} />
    //   </div>
    //   <Grid container spacing={2} className={classes.outerGrid}>
    //     <Grid container alignItems="center" justify="center">
    //       <Paper >
    //         <Typography variant="h4" gutterBottom>
    //           {aProvider.name ? aProvider.name : ""}
    //         </Typography>
    //         <Typography variant="h5" gutterBottom>{aProvider.address ? aProvider.address : ""}</Typography>
    //         <Typography variant="h5" gutterBottom>{aProvider.phone ? aProvider.phone : ""}</Typography>

    //         <Typography variant="h6" gutterBottom>
    //           Web: {aProvider.website_url ? (
    //             <a href={aProvider.website_url}>{aProvider.name}</a>
    //           ) : (
    //               ""
    //             )}
    //         </Typography>
    //         <Grid container spacing={24}>
    //           <Grid item xs={12} sm={6}>
    //             Hours:{" "}
    //             {aProvider.hours
    //               ? aProvider.hours
    //                 .split("<br>")
    //                 .map((item, i) => <p key={"time" + i}>{item}</p>)
    //               : ""}
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             {aProvider.update_message ? aProvider.update_message : ""}
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             {aProvider.description
    //               ? aProvider.description
    //                 .split("<br>")
    //                 .map((item, i) => <p key={"desc" + i}>{item}</p>)
    //               : ""}
    //           </Grid>
    //         </Grid>

    //         <h4>Services Offered</h4>
    //         {
    //           // console.log("ps>>>>>", providerServices)
    //           // {providerServices}
    //           aProvider.services && aProvider.services.map(service => {
    //             return (<div className="profile-service">

    //               <p key={service.id}><span>Service Name: </span>{service.name}</p>
    //               {/* The service type ID span below needs work, and might need touching up when more IDs are added.. */}
    //               {service.service_type_id < 3 ? <p key={service.id}><span>{service.unit} Remaining: </span>{service.qty_remaining}</p> : ""}
    //               <p key={service.id}><span>Service Status: </span>{service.status}</p>

    //             </div>)
    //           })
    //         }
    //         <Link to={`/admin/providers/${aProvider.id}`}>Edit</Link>
    //         <br />
    //         <Link to={`/liveupdate/${aProvider.id}`}>LiveUpdate</Link>
    //       </Paper>
    //     </Grid>
    //   </Grid >
    // </React.Fragment >
    // )


  }

}

const mapStateToProps = state => {
  return {
    provider: state.currentProvider.currentProvider,
    providers: state.providers.providers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProvider: params => {
      return dispatch(fetchProvider(params));
    },
    setCurrentProvider: params => {
      return dispatch(setCurrentProvider(params));
    }
  };
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProfile));
