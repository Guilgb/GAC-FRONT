import PlusIcon from "../../assets/icons/plusIcon.svg";
import UploadIcon from "../../assets/icons/uploadIcon.svg";
import SearchIcon from "../../assets/icons/searchIcon.svg";

export function handleIcon(iconName:string) {
    switch (iconName) {
        case "plus":
            return PlusIcon
        case "upload":
            return UploadIcon
        case "search":
            return SearchIcon
    }
}