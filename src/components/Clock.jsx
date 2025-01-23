import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect (() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(intervalID);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return (
        <div>
            <p>
                Horloge : {hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
            </p>
        </div>
    );
};

export default Clock;