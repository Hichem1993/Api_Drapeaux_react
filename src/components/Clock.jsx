import { useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return (
        <div>
            <p>
                Horloge : {hours} : {minutes} : {seconds}
            </p>
        </div>
    );
};

export default Clock;