/**
 * Componente Card para exibir mensagens de aviso, título e uma ação de botão com navegação.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.warning - Mensagem de aviso ou alerta.
 * @param {string} props.title - Título do card.
 * @param {string} props.menssage - Mensagem complementar.
 * @param {string} props.textButton - Texto do botão para ação.
 * @param {string} props.linkForButton - Rota para navegação ao clicar no botão.
 * @returns {JSX.Element} Elemento React do componente Card.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import Paragraph from "../atoms/Paragraph";
import PrimaryButton from "../atoms/PrimaryButton";
import Title from "../atoms/Title";

// CORRETO: desestruturando um objeto, não um array
export default function Card({ warning, title, menssage, textButton, linkForButton }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-backgroundSecondary-light px-4">
      <div className="flex items-center flex-col justify-center bg-backgroundPrimary-light 
        shadow-cardLight rounded-2xl p-8 max-w-md w-full text-center gap-[24px]">

        <Title>
          {title}
        </Title>

        <Paragraph>
          {warning}
        </Paragraph>

        <Paragraph>
          {menssage}
        </Paragraph>

        <PrimaryButton onClick={() => navigate(linkForButton)}>
          {textButton}
        </PrimaryButton>
      </div>
    </div>
  );
}
