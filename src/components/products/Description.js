import axios from "axios";
import { useEffect } from "react";
import { urlMy } from "../api/api";
import { useState } from "react";

function Description() {

    const [description, setDescription] = useState([]);

    useEffect(() => {
        let productId = sessionStorage.getItem("productId");
        axios.get(urlMy + "Product").then(res => setDescription(res.data.filter(p => p.id == productId)[0]));
    }, []);

    return (
        <div>
            <h5 className="mt-5 mb-5 pt-2 pt-sm-5 pb-5" style={{lineHeight: "1.8", color: "black", opacity: "70%"}}>{description.descriptions}</h5>
        </div>
    );
}

export default Description;