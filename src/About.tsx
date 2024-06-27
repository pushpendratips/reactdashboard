import {useContext} from 'react'
import ContextService from './ContextService';
const About = () => {
const context = useContext(ContextService);
return (
<>
<h2 style={{color:"red"}}>{context.name.fname}</h2>
</>
)}
export default About