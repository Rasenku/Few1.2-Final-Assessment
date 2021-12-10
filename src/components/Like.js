import React, { useState } from 'react';
import './styles/Like.css';

function Like(props) {
    const [totalLikes, setTotalLikes] = useState(0);

    const incrementLikes = () => {
        setTotalLikes(totalLikes + 1);
    }

    const decrementLikes = () => {
        if (totalLikes > 0) {
            setTotalLikes(totalLikes - 1);
        }
    }

    return (
        <div className="totalLikes">
            <button onClick={incrementLikes}>Upvote!</button>
            <p>{totalLikes}</p>
            <button onClick={decrementLikes}>Downvote!</button>
        </div>
    );
}

export default Like;