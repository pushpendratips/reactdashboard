import { createContext } from "react";
import { UserInterface} from "./UserInterface";
const ContextService = createContext<UserInterface>({
name:{fname: "", lname: ""}});
export default ContextService;