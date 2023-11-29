import { motion } from "framer-motion"
import { useState } from "react"

function NavLink ({week, setWeek, SetDisplaying}) {

    let titles = ["Home","Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8","Week 9","Week 10","Week 11"]
    const [hover,setHover] = useState([false,false,false,false,false,false,false,false,false,false,false,false])

    return (
        <>
            {titles.map(function (title,index) {
                return oneLink(title,index,week, setWeek, SetDisplaying, hover, setHover)
            }) }
        </>
    )
}

function oneLink (title,index,week, setWeek, SetDisplaying,hover,setHover) {
    return <li><motion.a 
    onClick={() => {setWeek(index); SetDisplaying([false,false,false,false,false])}} 
    key={index + title[index]}
    onMouseOver={() => setTrue(index,hover,setHover)}
    onMouseLeave={() => setFalse(index,hover,setHover)}
    animate={color(week,hover,index)}>
        {title}
        </motion.a></li>
}

function setTrue(index,hover,setHover) {
    let temparr = [...hover]
    temparr[index] = true
    setHover(temparr)
    //console.log("hovering")
}

function setFalse(index,hover,setHover) {
    let temparr = [...hover]
    temparr[index] = false
    setHover(temparr)
    //console.log("not hovering")
}

function color (week, hover, index) {
    if (hover[index]) {
        return {backgroundColor: "rgb(51, 182, 110)"}
    }
    else if (week == index) {
        return {backgroundColor: "rgb(109, 243, 149)"}
    }
    else {
        return {backgroundColor: "rgb(95, 189, 122)"}
    }
}

export default NavLink