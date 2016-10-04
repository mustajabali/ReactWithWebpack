/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import {
  Step,
  Stepper,
  StepButton,
  StepContent,
  StepLabel,
} from 'material-ui/Stepper';

const styles = {
  container: {
  },
  contract: {
    margin: '0px 0px 0px 256px'
  },
  expand: {
    margin: '0px'
  },
  expandMore: {
    margin: '0px 10px 10px 0px'
  },
  rightIcon: {
    margin: '0px 20px 10px 0px'
  },
  rightLabel: {
    marginRight: '40px'
  },
  menuItem: {
    paddingTop: '10px'
  },
  subMenuItem: {
    paddingLeft: '10px'
  },
  projectOverview: {
    float: 'left',
    width: '60%'
  },
  mindmap: {
    float: 'right',
    width: '40%'
  },
  itemDesc: {
    fontSize: '12px'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class MenuSideBar extends Component {
  constructor(props, context) {
    super(props, context);
    //Main Category Item Clicked
    this.menuItemClicked = this.menuItemClicked.bind(this);
    //Sub Category Item Clicked
    this.subMenuItemClicked = this.subMenuItemClicked.bind(this);
    //Reset Icons to Not played Icon
    this.resetSubItemIcons = this.resetSubItemIcons.bind(this);
    //Toggling Menu Item
    this.toggleMenuItem1 = this.toggleMenuItem1.bind(this);
    //Icon of Main Category Item
    this.projectIcon = "expand_more";
    //Sub Item Icons
    this.itemIcon1 = "play_circle_outline";
    this.itemIcon2 = "play_circle_outline";
    this.itemIcon3 = "play_circle_outline";
    this.itemIcon4 = "check_circle";
    //STATE
    this.state = {
      //boolean for toggling state of menu
      showSubMenuItem1: false,
      //Menu Item Description
      itemDesc: "",
      //Playing Item Description
      playingItem: ""
    };
  }


  //Sending a callback to Main on item description change
  handleItemDescChange() {
    this.props.onItemDesc(
      this.state.itemDesc
    );
  }

    //Sending a callback to Main on playing item description change
  handleOnPlayingItemChange() {
    this.props.onPlayingItem(
      this.state.onPlayingItemDesc
    );
  }

  //menu Item is clicked
  menuItemClicked(itemId) {
    this.state.itemDesc = itemId+ " Description";
    this.handleItemDescChange();
  }

  //sub menu Item is clicked
  subMenuItemClicked(subItemId) {
    this.state.onPlayingItemDesc = subItemId+ " Playing";
    this.handleOnPlayingItemChange();
  }

  //Reset Icons to non-played
  resetSubItemIcons() {
    this.itemIcon1 = "play_circle_outline";
    this.itemIcon2 = "play_circle_outline";
    this.itemIcon3 = "play_circle_outline";
    this.itemIcon4 = "check_circle";
  }

  //Toggling Main Category Item to Expand more or less
  toggleMenuItem1 = () => {
    this.setState({showSubMenuItem1: !this.state.showSubMenuItem1});
    this.projectIcon = this.projectIcon === "expand_more" ? "expand_less" : "expand_more";
  }
  // Rendering the menu
  render() {
    const {stepIndex} = this.state;
    return (
      <div>
        <Drawer open={this.props.open}>
            <MenuItem
                primaryText = "Item1"
                onTouchTap ={() => this.menuItemClicked("Item1")}
                rightIcon = {
                  <span style = {styles.rightIcon}>
                    <IconButton onClick = {this.toggleMenuItem1}>
                        <FontIcon className="material-icons"> {this.projectIcon} </FontIcon>
                    </IconButton>
                  </span>
                }
                secondaryText= {
                  <span style={styles.rightLabel}>1/4</span>
                }
            />
            { this.state.showSubMenuItem1 ?
              <span>
                <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                  <Stepper
                    activeStep={stepIndex}
                    linear={false}
                    orientation="vertical"
                  >
                    <Step>
                      <StepButton
                        icon={<FontIcon className="material-icons"> {this.itemIcon1} </FontIcon>}
                        onTouchTap={
                          () => {
                            this.setState({stepIndex: 0});
                            this.resetSubItemIcons();
                            this.itemIcon1 = this.itemIcon1 == "play_circle_filled" ? "play_circle_outline" : "play_circle_filled";
                            this.subMenuItemClicked("SubItem1");
                          }
                        }>
                        Sub Item 1
                      </StepButton>
                      <StepContent>
                      </StepContent>
                    </Step>
                    <Step>
                      <StepButton
                        icon={<FontIcon className="material-icons"> {this.itemIcon2} </FontIcon>}
                        onTouchTap={
                          () => {
                            this.setState({stepIndex: 1});
                            this.resetSubItemIcons();
                            this.itemIcon2 = this.itemIcon2 == "play_circle_filled" ? "play_circle_outline" : "play_circle_filled";
                            this.subMenuItemClicked("SubItem2");
                          }
                        }>
                        Sub Item 2
                      </StepButton>
                      <StepContent>
                      </StepContent>
                    </Step>

                    <Step>
                      <StepButton
                        icon={<FontIcon className="material-icons"> {this.itemIcon3} </FontIcon>}
                         onTouchTap={
                           () => {
                             this.setState({stepIndex: 2});
                             this.resetSubItemIcons();
                             this.itemIcon3 = this.itemIcon3 == "play_circle_filled" ? "play_circle_outline" : "play_circle_filled";
                             this.subMenuItemClicked("SubItem3");
                           }
                         }>
                        Sub Item 3
                      </StepButton>
                      <StepContent>

                      </StepContent>
                    </Step>
                    <Step>
                      <StepButton
                        icon={<FontIcon className="material-icons"> {this.itemIcon4} </FontIcon>}
                         onTouchTap={
                           () => {
                             this.setState({stepIndex: 3});
                             this.resetSubItemIcons();
                             this.itemIcon4 = this.itemIcon4 == "check_circle" ? "play_circle_filled" : "check_circle";
                             this.subMenuItemClicked("SubItem4");
                           }
                         }>
                        Sub Item 4
                      </StepButton>
                      <StepContent>

                      </StepContent>
                    </Step>

                  </Stepper>
                </div>
              </span>
              : null }
              <Divider />
        </Drawer>
      </div>
    );
  }

}


//Class for Settings
class Settings extends Component {
  render() {
    return (
      <div>
        Settings
      </div>
    );
  }

}

//Main Component Having Menu and Settings
class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    //Method for Toggling the Menu
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    //Method for getting Playing Item Description
    this.handlePlayingItem = this.handlePlayingItem.bind(this);
    //Method for getting Item Description
    this.handleItemDesc = this.handleItemDesc.bind(this);

    //STATE
    this.state = {
      // drawer or menu is open or closed
      open: false,
      //Description of Menu Item Clicked
      itemDesc: "",
      //Description of Item Playing
      playingItem:  ""
      /*If Contents 0 then show Main Items,
      If Contents 1 then show Settings,
      */
      contents: 0;
    };
  }
  //Closing the Menu / Drawer
  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  //Opening the Menu / Drawer
  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  //Open the Drawer and Adjust the remaining space by contracting and expanding
  handleMenuToggle = () => {
    this.setState({open: !this.state.open});
    this.state.open ? (styles.container = styles.expand) : (styles.container = styles.contract);
  }

  //Set the description of the playing item
  handlePlayingItem(playingItem) {
    this.setState({playingItem: playingItem});
  }

  //Set the description of the main category item
  handleItemDesc(itemDesc) {
    this.setState({itemDesc: itemDesc});
  }

  //Render the Main Component
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
           title="Lectures Project"
           onLeftIconButtonTouchTap = {this.handleMenuToggle}
           iconElementRight={
             <IconMenu
               iconButtonElement={
                 <IconButton><MoreVertIcon /></IconButton>
               }
               targetOrigin={{horizontal: 'right', vertical: 'top'}}
               anchorOrigin={{horizontal: 'right', vertical: 'top'}}
             >
               <MenuItem primaryText="Settings" onTouchTap ={
                   () => {
                     console.log("Settings Menu Item Clicked");
                     this.setState({contents: 1});
                   }
                }
               />
             <MenuItem primaryText="Help" onTouchTap ={() => console.log("Help Menu Item Clicked") }  />
               <MenuItem primaryText="Sign out" onTouchTap ={() => console.log("Signout Menu Item Clicked") } />
             </IconMenu>
           }
          />
        <MenuSideBar open = {this.state.open} itemDesc = {this.state.itemDesc} playingItem = {this.state.playingItem} onItemDesc = {this.handleItemDesc} onPlayingItem = {this.handlePlayingItem}/>
          <Settings />
          <div style={styles.projectOverview}>
            <h1>Project Overview </h1>
            <span style={styles.itemDesc}>{this.state.itemDesc}</span>
            <div>{this.state.playingItem}</div>
          </div>
          <div style={styles.mindmap}>
            <h1>Mind Map</h1>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
