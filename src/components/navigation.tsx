interface NavigationProps {
  UlStyles: string
  Texto: string
}

export default function Navigation({UlStyles, Texto}: NavigationProps ) {
  return (
    <ul className={UlStyles}>
      <li className={Texto}>
        <a href="#serviços">Serviços</a>
      </li>
      <li className={Texto}>
        <a href="#diferencial">Nosso Diferencial</a>
      </li>
      <li className={Texto}>
        <a href="#clientes">Nossos Clientes</a>
      </li>
      <li className={Texto}>
        <a href="#equipe">A Equipe</a>
      </li>
      <li className={Texto}>
        <a href="#contratacao">Modelo de Contratação</a>
      </li>
      <li className={Texto}>
        <a href="#contato">Contato</a>
      </li>
    </ul>
  );
}
