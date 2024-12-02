import homeIcon from "../../assets/icons/home-icon.svg";
import activitiesIcon from "../../assets/icons/activitiesIcon.svg";
import profileIcon from "../../assets/icons/profileIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import Evaluation from "../../assets/icons/checkList.svg";
import Manager from "../../assets/icons/computer-icon.svg";

export function getIcon(iconName: string) {
  switch (iconName) {
    case "dashboard":
      return homeIcon;
    case "activities":
      return activitiesIcon;
    case "profile":
      return profileIcon;
    case "logout":
      return logoutIcon;
    case "evaluation":
      return Evaluation;
    case "management":
      return Manager;
    default:
      return homeIcon;
  }
}
