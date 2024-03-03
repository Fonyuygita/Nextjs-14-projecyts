"use client"
import React, {useState} from 'react'
import {Data} from "./activityData"
import CategoryButton from './CategoryButton'
import Activity from '@/components/activity/Activity'
import SectionHeader from '@/components/sectionHeader/sectionHeader'
import styles from "./activity.module.css"

const ActivityPage=()=>{

    const [activities, setActivities]=useState(Data)
    // console.log(activities);

    const searchCategory=Data.map((item)=>(
        item.title
       
    ))
    console.log(searchCategory)
const uniqueCategory=["all", ...new Set(searchCategory)];
console.log(uniqueCategory);

// Function to filter our categories
const filterProjectHandler=(category)=>{
    if(category==="all") {
        setActivities(Data)
return;
    }


    const filterProject=Data.filter(project=> project.category===category);
    setActivities(filterProject)
   
}

    return(
        <section className={styles.section}>   
         <SectionHeader title="My activities" description="Go ahead and filter my reent activities"/>
    <div className="container">
    <CategoryButton categories={uniqueCategory} filterProjectProp={filterProjectHandler}/>
    <Activity activities={activities}/>
    </div>
    </section>

    )
}

export default ActivityPage