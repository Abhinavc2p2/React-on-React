import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        if (!currency) return;

        fetch(`https://v6.exchangerate-api.com/v6/23b99ca7e4be2a04a47dbcf1/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates))  // Correcting the API response structure
            .catch((error) => console.log("Error fetching currency data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
