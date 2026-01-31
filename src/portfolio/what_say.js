import { useState } from "react";

function Client() {
  // array ديال clients
  const clients = [
            {
                    img: "client1.jpg",
                    satisfaction: "95%",
                    message: "Safouane is a highly skilled full stack developer. He delivered a high-quality product with great attention to detail. We recommend him without hesitation for any complex web project.",
                    name: "Steve Prosser",
                    city: "Barcelona"
            },
            {
                    img: "client2.avif",
                    satisfaction: "90%",
                    message: "Working with Safouane has been a real pleasure. He perfectly masters both front-end and back-end, making development smooth. He communicates clearly and responds quickly to all our questions.",
                    name: "Mary Johnson",
                    city: "London"
            },
            {
                    img: "client3.png",
                    satisfaction: "92%",
                    message: "Safouane has demonstrated exceptional professionalism. He quickly understands needs and provides effective solutions. His work truly improved our project and met all deadlines.",
                    name: "John Smith",
                    city: "New York"
            }

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
          <div name="rv" id="wl" className="welcome">
            <p>Review clients</p>
          </div>
          <h1>What client says About Safouane</h1>
        </div>
        <p id="desc_cl">
          Helping you understand client satisfaction and trust in our services.
        </p>
      </div>

      <div className="what_say_body">
        <div className="image_client">
          <img src={`${process.env.PUBLIC_URL}/${client.img}`} alt={client.name} />
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
