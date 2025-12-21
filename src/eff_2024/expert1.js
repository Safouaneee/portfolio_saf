import expertsData from './expert_data.js';
import Expert from './expert.js';
function Experts1() {
  return (
    <div>
      <ul >
        {expertsData.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </div>
  );
}

export default Experts1;