import React, { Fragment, useState } from "react";
import useSWR from "swr";
import Router from "next/router";

import ContentsAPI from "../../lib/api/contents";
import storage from "../../lib/utils/storage";

const ContentsCreate = () => {
    const { data: currentUser } = useSWR("user", storage);
    const [datos, setDatos] = useState({
        titulo: '',
        sinopsis: '',
        genero: '',
        duracion: '',
        imagen: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        await ContentsAPI.create(datos, currentUser?.token).then((res) => {
            console.log(res);
            //Router.push(`/`);
        });
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    return (
        <>
            <Fragment>
                <form className="row" onSubmit={handleSubmit}>
                    <label>Titulo</label>
                    <input type="text" name="titulo" placeholder="Titulo" required onChange={handleInputChange} /><br/>

                    <label>Genero</label>
                    <input type="text" name="genero" placeholder="Genero" required onChange={handleInputChange} /><br/>

                    <label>Duración</label>
                    <input type="text" name="duracion" placeholder="Duración" required onChange={handleInputChange} /><br/>

                    <label>Sinopsis</label>
                    <textarea name="sinopsis" placeholder="Sinopsis" required onChange={handleInputChange}></textarea><br/>

                    <label>Imagen</label>
                    <input name="imagen" placeholder="Imagen" required onChange={handleInputChange} /><br/>

                    <button>Send</button>
                </form>
            </Fragment>
        </>
    );
}

export default ContentsCreate;