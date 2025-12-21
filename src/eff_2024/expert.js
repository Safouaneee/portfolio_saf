import Evenements from "./evenement";

function Expert({ expert }) {
  return (
    <li >
      <h3>{expert.nom_complet}</h3>
      <Evenements evenements={expert.Evenements} />
    </li>
  );
}

export default Expert;
