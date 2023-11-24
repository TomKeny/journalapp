export function NavLink ({week, setWeek}) {

    return (
        <>
            <li><a onClick={() => setWeek(0)} id={week == 0 ? "active":"inactive"}>Home</a></li>
            <li><a onClick={() => setWeek(1)} id={week == 1 ? "active":"inactive"}>Week 1</a></li>
            <li><a onClick={() => setWeek(2)} id={week == 2 ? "active":"inactive"}>Week 2</a></li>
            <li><a onClick={() => setWeek(3)} id={week == 3 ? "active":"inactive"}>Week 3</a></li>
            <li><a onClick={() => setWeek(4)} id={week == 4 ? "active":"inactive"}>Week 4</a></li>
            <li><a onClick={() => setWeek(5)} id={week == 5 ? "active":"inactive"}>Week 5</a></li>
            <li><a onClick={() => setWeek(6)} id={week == 6 ? "active":"inactive"}>Week 6</a></li>
            <li><a onClick={() => setWeek(7)} id={week == 7 ? "active":"inactive"}>Week 7</a></li>
            <li><a onClick={() => setWeek(8)} id={week == 8 ? "active":"inactive"}>Week 8</a></li>
            <li><a onClick={() => setWeek(9)} id={week == 9 ? "active":"inactive"}>Week 9</a></li>
            <li><a onClick={() => setWeek(10)} id={week == 10 ? "active":"inactive"}>Week 10</a></li>
            <li><a onClick={() => setWeek(11)} id={week == 11 ? "active":"inactive"}>Week 11</a></li>
        </>
    )
}