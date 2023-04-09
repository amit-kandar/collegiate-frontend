import React,{useEffect} from 'react'

function Features() {
    useEffect(() => {
        for (let index = 1; index <= 4; index++) {
            let card = document.getElementById(`card${index}`);
            let box = document.getElementById(`innerbox${index}`);

            card.addEventListener("mouseover", () => {
                box.style.transform = "rotate(45deg)";
            });
            card.addEventListener("mouseout", () => {
                box.style.transform = "rotate(25deg)";
            });
        }
    })

    return (
        <>
            <section id="features" className="features container">
                <div className="features-heading">
                    <div className="features-heading-container">
                        <h3>Features</h3>
                        <h1>Main Features Of Play</h1>
                        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered
                            alteration in some form.</p>
                    </div>
                </div>

                <div className="features-items">
                    <div className="features-items-container">
                        <div className="features-items-card" id="card1">
                            <div className="icon-container">
                                <span className="box" id="innerbox1"></span>
                                <i className="uil uil-gift"></i>
                            </div>
                            <div className="features-details-container">
                                <h3>Free and Open-Source</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                        <div className="features-items-card" id="card2">
                            <div className="icon-container">
                                <span className="box" id="innerbox2"></span>
                                <i className="uil uil-expand-arrows" style={{ transform: "rotate(45deg)" }}></i>
                            </div>
                            <div className="features-details-container">
                                <h3>Multipurpose Template</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                        <div className="features-items-card" id="card3">
                            <div className="icon-container">
                                <span className="box" id="innerbox3"></span>
                                <i className="uil uil-apps"></i>
                            </div>
                            <div className="features-details-container">
                                <h3>High-quality Design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                        <div className="features-items-card" id="card4">
                            <div className="icon-container">
                                <span className="box" id="innerbox4"></span>
                                <i className="uil uil-layer-group"></i>
                            </div>
                            <div className="features-details-container">
                                <h3>All Essential Elements</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features