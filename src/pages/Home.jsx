import React  from "react";
import {Link} from "react-router-dom";
import Header from "../components/Headers/Header";
const Home = () => {
    return (
        <div>
         <Header/>
        <main>
         <h1>Welcome to Vivekanand College!</h1>

         <p><strong>Vivekanand College</strong>is a premier educational institution dedicated to fostering academic excellence,innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
         </p>
         <p> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
         <h2>Why Choose Vivekanad College?</h2>
         <ul>
           <li><strong>**Legacy of Excellence** </strong> Decades of commitment to quality education</li>
           <li><strong>**Experienced Faculty** </strong> Learn from renowned experts and passionate educators.</li>
           <li><strong>**Modern Faculties** </strong> Well-equipped labs, expansive library, and comfortable campus.</li>
           <li><strong>**Holistic Development** </strong> Focus on co-curricular activities, sports, and community service.</li>
           <li><strong>**Strong Placements** </strong> Excellent career opportunities with leading companies</li>
         </ul>
         <div>
             <p> Ready to start your journey with us?</p>
             <button>Apply now</button>
         </div>
         </main>
         </div>
      
    );
};

export default Home;