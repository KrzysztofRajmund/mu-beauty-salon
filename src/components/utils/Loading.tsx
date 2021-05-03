import React, { useState } from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";


const Loading: React.FC = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <BeatLoader
                loading={loading}
                size={20} />
        </div>
    )
}

export default Loading;