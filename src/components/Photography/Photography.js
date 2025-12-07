import React, { useState } from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import "./Photography.css";

function Photography() {
  const [open, setOpen] = useState(false);

    return (
      <>
        <div className="mainPhoto">
            <main className="main">
      <section className="projects-grid fadeInUp">
        <article className="project-tile project-1" tabindex="0">
        <Link to="/saginaw" >
          <img src="images/Photography/Saginaw/Saginaw-Cover.jpg" alt="Saginaw" />
          <div className="overlay">
            <div>
              <div id="p1title" className="title">Project 1</div>
              <div className="subtitle">Saginaw</div>
            </div>
          </div>
          </Link>
        </article>
        
        
        <article className="project-tile project-2" tabindex="0">
        <Link to="/detroit" >
          <img src="images/Photography/Detroit/Detroit-Cover.jpg" alt="Detroit" />
          <div className="overlay">
            <div>
              <div id="p2title" className="title">Project 2</div>
              <div className="subtitle">Detroit</div>
            </div>
          </div>
          </Link>
        </article>
        
        
        <article className="project-tile project-3" tabindex="0">
        <Link to="/houston">
          <img src="images/Photography/Houston/Houston-Cover.jpeg" alt="Houston" />
          <div class="overlay">
            <div>
              <div id="p3title" className="title">Project 3</div>
              <div class="subtitle">Houston</div>
            </div>
          </div>
          </Link>
        </article>
        
       
        <article className="project-tile project-4" tabindex="0">
        <Link to="/san-francisco">
          <img src="images/Photography/SanFrancisco/San-Francisco-Cover.jpeg" alt="San Francisco" />
          <div className="overlay">
            <div>
              <div id="p4title" className="title">Project 4</div>
              <div className="subtitle">San Francisco</div>
            </div>
          </div>
          </Link>
        </article>
        
      </section>
      <aside className="sidebar fadeInUp">
        <div>
          <h3>Sugene Mulpuri</h3>
          <p>989-385-1983</p>
          <p><a href="mailto:sugenemulpuri9@gmail.com" className="formEmailLinkColor">sugenemulpuri9@gmail.com</a></p>
        </div>
        <form className="contact-form" onSubmit={(e) => {
    e.preventDefault();
    setOpen(true);
  }}>
          <h4>Contact Me</h4>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your name" tabindex="0"/>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your email" tabindex="0"/>
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your message" tabindex="0"></textarea>
          <button type="submit" onClick={() => setOpen(true)}>Send Message</button>
        </form>
      </aside>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
<div className="modalDiv">
  Your Form Has Been Submitted
</div>
</Modal>

    </main>
  
        </div>
        </>
    )
}
//This page is expanded on my assignment 3 page, with the contact form featuring a gradient and a modal popup upon submission. Each project goes to an image gallery of original photos taken at each location, and has a hover effect to caption each location before clicking.


export default Photography;