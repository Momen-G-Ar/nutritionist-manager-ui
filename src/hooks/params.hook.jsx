import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {
    const [params, setParams] = useSearchParams();

    const myParams = useMemo(() => {
        const search = params.get('search') || '';
        return { search };
    }, [params]);

    /**
     * To change the params of the URLSearchParams
     * @param {String} name 
     * @param {String} value 
     */
    const setParam = (name, value) => {
        const newParams = new URLSearchParams(params);
        newParams.delete(name);

        if (Array.isArray(value)) {
            value.forEach((item) => newParams.append(name, item));
        } else {
            if (value.trim() !== '')
                newParams.set(name, value.trim());
        }
        setParams(newParams);

    };
    return { myParams, setParam };
};

export default useParams;