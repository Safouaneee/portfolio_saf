import { useState } from "react";

function Client() {
  // array ديال clients
  const clients = [
    {
      img: "client1.jpg",
      satisfaction: "95%",
      message: "Safouane est un développeur full stack très compétentIl a livré un produit de haute qualité avec une grande attention aux détails.Nous le recommandons sans hésitation pour tout projet web complexe",
      name: "Steve Prosser",
      city: "Barcelona"
    },
    {
      img: "client2.avif",
      satisfaction: "90%",
      message: "Travailler avec Safouane a été un réel plaisir.Il maîtrise parfaitement le front-end et le back-end, ce qui rend le développement fluide.Il communique clairement et répond rapidement à toutes nos questions.",
      name: "Mary Johnson",
      city: "London"
    },
    {
      img: "client3.avif",
      satisfaction: "92%",
      message: "Safouane a démontré un professionnalisme exceptionnel.Il comprend rapidement les besoins et propose des solutions efficaces.Son travail a vraiment amélioré notre projet et respecté les délais.",
      name: "John Smith",
      city: "New York"
    },   
  ];

  // state ديال pagination
  const [current, setCurrent] = useState(0);

  const nextClient = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const client = clients[current];

  return (
    <section id="what_client_say">
      <div className="what_say_header">
        <div className="title_client">
          <div id="wl" className="welcome">
            <p>WELCOME TO SOCIALZY</p>
          </div>
          <h1>What client says About Safouane</h1>
        </div>
        <p id="desc_cl">
          Helping you understand client satisfaction and trust in our services.
        </p>
      </div>

      <div className="what_say_body">
        <div className="image_client">
          <img src={client.img} alt={client.name} />
        </div>

        <div className="level_satitsfaction">
          <p>Client satisfaction built on trust and results.</p>
          <i className="ri-bar-chart-2-line"></i>
          <div className="purs">
            <h1>{client.satisfaction}</h1>
            <img src="https://framerusercontent.com/images/taLgEerljqYOl7tKUYDR9aUhO8.svg?width=54&height=63" alt="" />
          </div>
        </div>

        <div className="message">
          <div className="msg">
            <i className="ri-double-quotes-r"></i>
            <p>{client.message}</p>
          </div>

          <div className="info_client">
            <h3>{client.name}</h3>
            <p>{client.city}</p>
          </div>

          {/* pagination */}
         <div className="pagination">
                <button onClick={prevClient}>
                    <i class="ri-arrow-left-circle-fill"></i>
                </button>

                <button onClick={nextClient}>
                   <i class="ri-arrow-right-circle-fill"></i>
                </button>
</div>

        </div>
      </div>
    </section>
  );
}

export default Client;
