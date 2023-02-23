import {userSelector} from 'react-redux'
import { useSelector } from 'react-redux/es/exports';

const Home =() =>{
    const {user} = useSelector((state) => ({...state}));
    return <div className ="container-fluid h1 p-5 text-center">This is Home Page {JSON.stringify(user)}
    </div>
};
export default Home ;