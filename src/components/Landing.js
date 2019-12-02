import React, { Component } from 'react'
import Homepage1 from './Homepage1'
import Homepage2 from './Homepage2'
import TopProjects from './CRUD/Projects/TopProject/TopProject';

class Landing extends Component {

    render() {
        
        return (
          
            <div>
                <Homepage1/>
                <TopProjects/>
            </div>
        )
    }
}

export default Landing