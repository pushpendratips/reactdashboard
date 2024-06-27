import {useContext} from 'react'
import ContextService from './ContextService';
const Home = () => {
const context = useContext(ContextService);
return (
<>
<h2 style={{color:"red"}}>{context.name.fname}</h2>
<h2 style={{color:"red"}}>{context.name.lname}</h2>
</>
)}
export default Home