import React from 'react'

function Faq() {
    return (
        <>
            <section id="faq" className="faq">
                <div className="faq-container container">
                    <div className="faq-container-heading">
                        <div className="faq-container-heading-box">
                            <h3>FAQ</h3>
                            <h1>Any Questions? Answered</h1>
                            <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered
                                alteration in some form.</p>
                        </div>
                    </div>
                    <div className="faq-container-items">
                        <div className="left-side-items">
                            <div className="items-container">
                                <div className="visible-items" onClick={() => {
                                    let targetIcon = document.getElementById("iconBackground1");
                                    let targetHidden = document.getElementById("hiddenitems1");
                                    if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
                                        targetHidden.classList.replace("hidden-items", "display-items");
                                    } else {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
                                        targetHidden.classList.replace("display-items", "hidden-items");
                                    }
                                }}>
                                    <div className="icon-bg" id="iconBackground1">
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="visible-items-text">
                                        <h2>How to use TailGrids?</h2>
                                    </div>
                                </div>
                                <div className="hidden-items" id="hiddenitems1">
                                    <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
                                        research & creation of your monthly content marketing strategy that we do before
                                        writing your first blog post, Ipsum available.</p>
                                </div>
                            </div>

                            <div className="items-container">
                                <div className="visible-items" onClick={() => {
                                    let targetIcon = document.getElementById("iconBackground2");
                                    let targetHidden = document.getElementById("hiddenitems2");
                                    if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
                                        targetHidden.classList.replace("hidden-items", "display-items");
                                    } else {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
                                        targetHidden.classList.replace("display-items", "hidden-items");
                                    }
                                }}>
                                    <div className="icon-bg" id="iconBackground2">
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="visible-items-text">
                                        <h2>How to download icons from LineIcons?</h2>
                                    </div>
                                </div>
                                <div className="hidden-items" id="hiddenitems2">
                                    <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
                                        research & creation of your monthly content marketing strategy that we do before
                                        writing your first blog post, Ipsum available.</p>
                                </div>
                            </div>

                            <div className="items-container">
                                <div className="visible-items" onClick={() => {
                                    let targetIcon = document.getElementById("iconBackground3");
                                    let targetHidden = document.getElementById("hiddenitems3");
                                    if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
                                        targetHidden.classList.replace("hidden-items", "display-items");
                                    } else {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
                                        targetHidden.classList.replace("display-items", "hidden-items");
                                    }
                                }}>
                                    <div className="icon-bg" id="iconBackground3">
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="visible-items-text">
                                        <h2>Is GrayGrids part of UIdeck?</h2>
                                    </div>
                                </div>
                                <div className="hidden-items" id="hiddenitems3">
                                    <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
                                        research & creation of your monthly content marketing strategy that we do before
                                        writing your first blog post, Ipsum available.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-items">
                            <div className="items-container">
                                <div className="visible-items" onClick={() => {
                                    let targetIcon = document.getElementById("iconBackground4");
                                    let targetHidden = document.getElementById("hiddenitems4");
                                    if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
                                        targetHidden.classList.replace("hidden-items", "display-items");
                                    } else {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
                                        targetHidden.classList.replace("display-items", "hidden-items");
                                    }
                                }}>
                                    <div className="icon-bg" id="iconBackground4">
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="visible-items-text">
                                        <h2>How to use TailGrids?</h2>
                                    </div>
                                </div>
                                <div className="hidden-items" id="hiddenitems4">
                                    <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
                                        research & creation of your monthly content marketing strategy that we do before
                                        writing your first blog post, Ipsum available.</p>
                                </div>
                            </div>

                            <div className="items-container">
                                <div className="visible-items" onClick={() => {
                                    let targetIcon = document.getElementById("iconBackground5");
                                    let targetHidden = document.getElementById("hiddenitems5");
                                    if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
                                        targetHidden.classList.replace("hidden-items", "display-items");
                                    } else {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
                                        targetHidden.classList.replace("display-items", "hidden-items");
                                    }
                                }}>
                                    <div className="icon-bg" id="iconBackground5">
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="visible-items-text">
                                        <h2>How to download icons from LineIcons?</h2>
                                    </div>
                                </div>
                                <div className="hidden-items" id="hiddenitems5">
                                    <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
                                        research & creation of your monthly content marketing strategy that we do before
                                        writing your first blog post, Ipsum available.</p>
                                </div>
                            </div>

                            <div className="items-container">
                                <div className="visible-items" onClick={() => {
                                    let targetIcon = document.getElementById("iconBackground6");
                                    let targetHidden = document.getElementById("hiddenitems6");
                                    if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
                                        targetHidden.classList.replace("hidden-items", "display-items");
                                    } else {
                                        targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
                                        targetHidden.classList.replace("display-items", "hidden-items");
                                    }
                                }}>
                                    <div className="icon-bg" id="iconBackground6">
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="visible-items-text">
                                        <h2>Is GrayGrids part of UIdeck?</h2>
                                    </div>
                                </div>
                                <div className="hidden-items" id="hiddenitems6">
                                    <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
                                        research & creation of your monthly content marketing strategy that we do before
                                        writing your first blog post, Ipsum available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq