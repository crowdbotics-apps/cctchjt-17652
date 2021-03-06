import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList56320Navigator from '../features/ArticleList56320/navigator';
import ArticleList56319Navigator from '../features/ArticleList56319/navigator';
import ArticleList56318Navigator from '../features/ArticleList56318/navigator';
import ArticleList56301Navigator from '../features/ArticleList56301/navigator';
import ArticleList56300Navigator from '../features/ArticleList56300/navigator';
import ArticleList56299Navigator from '../features/ArticleList56299/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList56320: { screen: ArticleList56320Navigator },
ArticleList56319: { screen: ArticleList56319Navigator },
ArticleList56318: { screen: ArticleList56318Navigator },
ArticleList56301: { screen: ArticleList56301Navigator },
ArticleList56300: { screen: ArticleList56300Navigator },
ArticleList56299: { screen: ArticleList56299Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
