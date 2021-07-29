import React from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
const App = () => {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/Signup'>Register</Link>
                        </li>
                        <li>
                            <Link to='/Login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path='/Login'><Login/></Route>
                <Route path='/Signup'><Signup/></Route>
            </Switch>
            </>
    )
}
 
export default App