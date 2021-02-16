import React from "react";
import AsyncSelect from 'react-select';

const ContentsFilter = ({ data, getContentFiltered }) => {
    let [contents, setContents] = React.useState(data);
    React.useEffect(() => { setContents({ data }) }, [data]);

    let generos = [];
    let allGeneros = [];
    const newAllGeneros = [];
    const myObj = {};

    contents?.data?.map((content) => {
        generos = content.genero.split("/");
        allGeneros = allGeneros.concat(generos);
    });

    const toUpper = (res) => { 
        return res.toUpperCase().trim();
    };
    
    allGeneros = allGeneros?.map(toUpper);

    allGeneros?.map(el => {
        if (!(el in myObj)) {
            myObj[el] = true
            newAllGeneros.push({"value": el, "label": el})
        }
    })  

    const handleClick = (value) => {
        getContentFiltered(value.value);
    }

    return (
        <>
            <AsyncSelect onChange={(value) => handleClick(value)} options={newAllGeneros} />
        </>
    );
}

export default ContentsFilter;