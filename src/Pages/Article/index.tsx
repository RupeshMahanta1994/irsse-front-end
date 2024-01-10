import { BlogPostForm } from "../../Components";

const index = () => {
  return (
    <div>
      index
      <BlogPostForm />
      <div>
        <div className="blog-post">
          <h1>Enhancing Railway Safety with Tunnel Communication Systems</h1>

          <section className="introduction">
            <p>
              In the realm of railway infrastructure, safety and effective
              communication are paramount. Recognizing the unique challenges
              posed by tunnels of varying lengths, the Indian Railways has
              proposed an Integrated Tunnel Communication System. Spearheaded by
              experts like Dilip Kumar Singh, Executive Director/Telecom, and
              Rajnish Kumar Raman, Sr. Section Engineer/Design (Telecom), this
              initiative aims to ensure seamless communication within tunnels,
              enhancing safety and operational efficiency.
            </p>
          </section>

          <section className="purpose-and-application">
            <h2>1. Purpose and Application</h2>
            <p>
              The Tunnel Communication System addresses the need for extended
              radio signals inside tunnels. With categories based on tunnel
              lengths, the system accommodates communication requirements during
              maintenance, constructional blocks, and emergencies. It covers
              communication between staff, drivers, guards, station masters, and
              control centers.
            </p>
          </section>

          <section className="components">
            <h2>2. Components of the Tunnel Communication System</h2>
            <ul>
              <li>
                <strong>Master Unit:</strong> Used in tunnels exceeding 500
                meters, it converts signals from RF to light for fiber-fed
                repeaters.
              </li>
              {/* Include other components as list items */}
            </ul>
          </section>

          {/* Repeat similar sections for Additional Communication Systems, Implementation Schemes, Advantages, and Conclusion */}

          <section className="conclusion">
            <h2>7. Conclusion</h2>
            <p>
              The Tunnel Communication System is poised to revolutionize railway
              communication, ensuring the safety of railway personnel and
              passengers alike. With its comprehensive approach and
              state-of-the-art components, this system is set to become an
              integral part of the Indian Railways' commitment to safety and
              efficiency.
            </p>
            <p>
              <em>
                Authors: Shri Dilip Kumar Singh (Executive Director/Telecom,
                RDSO, LKO) and Shri Rajnish Kumar Raman (Sr. Section
                Engineer/Design (Telecom), RDSO, LKO).
              </em>
            </p>
            <p>
              <em>
                Disclaimer: The views expressed in this blog post are those of
                the authors and do not necessarily reflect the official policy
                or position of any railway authority.
              </em>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default index;
