import { Link } from "react-router-dom"

function Home_pr_fr(){

    return(
        <div>
            <nav className="navbar">
        <h2>Freelance Pro</h2>
        <Link to={"/projets"}>
            <button className="btn-nav">Accéder à l'application</button>
        </Link>
    </nav>

    <section className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Gérez vos Projets Freelance comme un Pro</h1>
            <p className="hero-subtitle">
                La plateforme tout-en-un pour gérer vos clients, suivre vos projets, 
                respecter vos deadlines et maximiser votre productivité en tant que freelance.
            </p>
            <Link to={"/projets"}>
                <button className="btn-hero">Commencer Maintenant</button>
            </Link>
        </div>
    </section>

    <section className="features">
        <h2 className="section-title">Fonctionnalités Puissantes</h2>
        <p className="section-subtitle">Tout ce dont vous avez besoin pour gérer vos projets freelance efficacement</p>
        
        <div className="features-grid">
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Gestion de Projets</h3>
                <p className="feature-description">
                    Créez, modifiez et suivez tous vos projets en un seul endroit. 
                    Organisez vos tâches par statut et priorité pour ne rien oublier.
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">Gestion des Clients</h3>
                <p className="feature-description">
                    Maintenez une base de données complète de vos clients avec toutes 
                    les informations importantes à portée de main.
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3 className="feature-title">Suivi du Budget</h3>
                <p className="feature-description">
                    Gérez vos budgets projet par projet et gardez un œil sur 
                    votre rentabilité en temps réel.
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3 className="feature-title">Deadlines & Priorités</h3>
                <p className="feature-description">
                    Définissez des deadlines claires et priorisez vos projets pour 
                    respecter tous vos engagements clients.
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3 className="feature-title">Statuts en Temps Réel</h3>
                <p className="feature-description">
                    Suivez l'évolution de vos projets du devis à la livraison avec 
                    des statuts clairs et personnalisables.
                </p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">Interface Moderne</h3>
                <p className="feature-description">
                    Profitez d'une interface intuitive et élégante conçue pour 
                    une expérience utilisateur exceptionnelle.
                </p>
            </div>
        </div>
    </section>

    <section className="team">
        <h2 className="section-title">Notre Équipe</h2>
        <p className="section-subtitle">Les développeurs passionnés derrière Freelance Pro</p>
        
        <div className="team-grid">
            <div className="team-card">
                <div className="team-avatar">SM</div>
                <h3 className="team-name">Safouane Moulid</h3>
                <p className="team-role">Développeur Full Stack</p>
            </div>

            <div className="team-card">
                <div className="team-avatar">LB</div>
                <h3 className="team-name">Lamsegem Badr</h3>
                <p className="team-role">Développeur Full Stack</p>
            </div>
        </div>
    </section>

    <section className="cta">
        <div className="cta-content">
            <h2 className="cta-title">Prêt à Transformer Votre Activité Freelance ?</h2>
            <p className="cta-subtitle">
                Rejoignez des centaines de freelances qui gèrent leurs projets avec succès
            </p>
            <Link to={"/projets"}>
                <button className="btn-cta">Commencer Gratuitement</button>
            </Link>
        </div>
    </section>
        </div>
    )

}export default Home_pr_fr