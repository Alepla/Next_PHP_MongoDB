import React, { Fragment, useState, useReducer } from "react";
import Router from "next/router";
import useSWR from "swr";
import styled from "@emotion/styled";

import ContentsAPI from "../../lib/api/contents";
import storage from "../../lib/utils/storage";
import editorReducer from "../../lib/utils/editorReducer";

const ContentsDetails = ({ content: initialContent }) => {
    const initialState = {
        id: initialContent._id,
        titulo: initialContent.titulo,
        sinopsis: initialContent.sinopsis,
        genero: initialContent.genero,
        image: initialContent.image,
        duracion: initialContent.duracion
    }

    const [update, setUpdate] = useState(false);
    const [content, dispatch] = useReducer(editorReducer, initialState);
    const { data: currentUser } = useSWR("user", storage);

    const ContentButton = styled("button")`  
        cursor: pointer;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.65rem;
        font-weight: bold;
        letter-spacing: 0.025rem;
        text-transform: uppercase;
        color: white;
        background-color: black;
        border: none;
    `;

    const ButtonsContainer = styled("div")`
        display: flex;
        flex-flow: row wrap;
    `;

    const showUpdateForm = async (e) => {
        e.preventDefault();
        setUpdate(true);
    }

    const hideUpdateForm = async (e) => {
        e.preventDefault();
        setUpdate(false);
    }

    const handleDelete = async (id) => {
        const result = window.confirm("Do you really want to delete it?");
        if (!result) return;
    
        await ContentsAPI.delete(id, currentUser?.token).then((res) => {
            Router.push(`/`);
        });
    };

    const handleTitulo = (e) => 
        dispatch({ type: "SET_TITULO", text: e.target.value });
    const handleGenero = (e) => 
        dispatch({ type: "SET_GENERO", text: e.target.value });  
    const handleDuracion = (e) => 
        dispatch({ type: "SET_DURACION", text: e.target.value });
    const handleSinopsis = (e) => 
        dispatch({ type: "SET_SINOPSIS", text: e.target.value });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await ContentsAPI.update(content, initialState.id, currentUser?.token).then((res) => {
            console.log(res);
            //Router.push(`/`);
        });
    }

    return (
        <div>
            <ButtonsContainer>
                {
                    !update?
                        <p><ContentButton onClick={(e) => showUpdateForm(e)}>Update</ContentButton></p>
                    :
                        <p><ContentButton onClick={(e) => hideUpdateForm(e)}>Cancel</ContentButton></p>
                }
                <p><ContentButton onClick={() => handleDelete(initialState.id)}>Delete</ContentButton></p>
            </ButtonsContainer>
            {
                update?
                    <Fragment>
                        <form className="row" onSubmit={handleSubmit}>
                            <label>Titulo</label>
                            <input type="text" name="titulo" placeholder="titulo" required value={content.titulo} onChange={handleTitulo} /><br/>

                            <label>Genero</label>
                            <input type="text" name="genero" placeholder="genero" required value={content.genero} onChange={handleGenero} /><br/>

                            <label>Duración</label>
                            <input type="text" name="duracion" placeholder="duracion" required value={content.duracion} onChange={handleDuracion} /><br/>

                            <label>Sinopsis</label>
                            <textarea name="sinopsis" placeholder="sinopsis" required value={content.sinopsis} onChange={handleSinopsis}></textarea><br/>

                            <button>Send</button>
                        </form>
                    </Fragment>
                :
                    <div>
                        <h1>{content.titulo}</h1>
                        <img src={content.image} />
                        <p>{content.sinopsis}</p>
                        <p>{content.genero} - {content.duracion}</p>
                    </div>
            }
        </div>
    );
}

ContentsDetails.getInitialProps = async (id) => {
    const content = await ContentsAPI.get(id.query.pid);
    return { content: content.data };
};

export default ContentsDetails;