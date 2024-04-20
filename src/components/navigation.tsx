import { MouseEventHandler } from "react";

interface NavigationProps {
  UlStyles: string;
  Texto: string;
  Exit?: MouseEventHandler<HTMLLIElement>;
}

export default function Navigation({UlStyles, Texto, Exit}: NavigationProps ) {
  return (
    <ul className={UlStyles}>
      <li onClick={Exit} className={Texto}>
        <a href="#serviços">Serviços</a>
      </li>
      <li onClick={Exit} className={Texto}>
        <a href="#differential">Nosso Diferencial</a>
      </li>
      <li onClick={Exit} className={Texto}>
        <a href="#customers">Nossos Clientes</a>
      </li>
      <li onClick={Exit} className={Texto}>
        <a href="#Team">A Equipe</a>
      </li>
      <li onClick={Exit} className={Texto}>
        <a href="#Contract">Modelo de Contratação</a>
      </li>
      <li onClick={Exit} className={Texto}>
        <a href="#contato">Contato</a>
      </li>
    </ul>
  );
}
