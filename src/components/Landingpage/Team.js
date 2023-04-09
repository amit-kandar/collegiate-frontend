import React from 'react'

function Team() {
    return (
        <>
            <section id="team" className="team">
                <div className="team-container container">
                    <div className="team-container-header">
                        <div className="team-container-header-items">
                            <h3>Our Team</h3>
                            <h1>Meet Our Team</h1>
                            <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered
                                alteration in some form.</p>
                        </div>
                    </div>
                    <div className="team-container-details">
                        <div className="team-cards-container">
                            <div className="teams-card">
                                <div className="team-member-img-container-bg"></div>
                                <div className="team-member-img-container">
                                    <img src={require("./images/member-1.png")} alt="Team member icon" />
                                </div>
                                <div className="team-member-details-container">
                                    <h2>Adveen Desuza</h2>
                                    <span>UI Designer</span>
                                </div>
                                <div className="team-member-contacts">
                                    <div className="facebook">
                                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    </div>
                                    <div className="twitter">
                                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="instagram">
                                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="teams-card">
                                <div className="team-member-img-container-bg"></div>
                                <div className="team-member-img-container">
                                    <img src={require("./images/member-2.png")} alt="Team member icon" />
                                </div>
                                <div className="team-member-details-container">
                                    <h2>Adveen Desuza</h2>
                                    <span>UI Designer</span>
                                </div>
                                <div className="team-member-contacts">
                                    <div className="facebook">
                                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    </div>
                                    <div className="twitter">
                                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="instagram">
                                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="teams-card">
                                <div className="team-member-img-container-bg"></div>
                                <div className="team-member-img-container">
                                    <img src={require("./images/member-3.png")} alt="Team member icon" />
                                </div>
                                <div className="team-member-details-container">
                                    <h2>Adveen Desuza</h2>
                                    <span>UI Designer</span>
                                </div>
                                <div className="team-member-contacts">
                                    <div className="facebook">
                                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    </div>
                                    <div className="twitter">
                                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="instagram">
                                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="teams-card">
                                <div className="team-member-img-container-bg"></div>
                                <div className="team-member-img-container">
                                    <img src={require("./images/member-4.png")} alt="Team member icon" />
                                </div>
                                <div className="team-member-details-container">
                                    <h2>Adveen Desuza</h2>
                                    <span>UI Designer</span>
                                </div>
                                <div className="team-member-contacts">
                                    <div className="facebook">
                                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    </div>
                                    <div className="twitter">
                                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="instagram">
                                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team