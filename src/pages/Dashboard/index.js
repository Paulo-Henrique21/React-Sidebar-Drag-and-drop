import Dnd from '../../components/Dnd'
import './style.css'

function Dashboard (){
    return(
        <>
        <div className="dashboard">
         
            <h1>Dashboard</h1>
            
            <br/>
            <div className='drag-and-drop'><Dnd/></div>
            

        </div>
        </>
        
    )
}

export default Dashboard