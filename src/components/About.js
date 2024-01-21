// // About.js
// import React from 'react';
// import '../css/About.css'; // Import the CSS file for styling
// import aboutData from '../json/About.json'; // Import the JSON file

// const About = () => {
//   const { sectionIntro, aboutContent } = aboutData;

//   return (
//     <section id="about">
//       <div className="row section-intro">
//         <div className="col-twelve">
//           <h5>{sectionIntro.title}</h5>
//           <h1>{sectionIntro.subtitle}</h1>
//           <div className="intro-info">
//             <img src={sectionIntro.introInfo.image} alt="Profile Picture" />
//             <p className="lead">{sectionIntro.introInfo.lead}</p>
//           </div>
//         </div>
//       </div>
//       <div className="row about-content">
//         <div className="col-six tab-full">
//           <h3>{aboutContent.profile.title}</h3>
//           <p>{aboutContent.profile.content}</p>
//           <ul className="info-list">
//             {aboutContent.infoList.map(item => (
//               <li key={item.label}>
//                 <strong>{item.label}:</strong>
//                 <span>{item.value}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// About.js
import React from 'react';
import '../css/About.css'; // Import the CSS file for styling
import aboutData from '../json/About.json'; // Import the JSON file
import Temp from '../passport.jpg'


const About = () => {
  const { sectionIntro, aboutContent } = aboutData;

  return (
    <section id="about">
      <div id="about-container">

      <div className="row section-intro">
        <div className="col-twelve">
          <h1>{sectionIntro.title}</h1>
          <h2>{sectionIntro.subtitle}</h2>
          <div className="intro-info">
            {/* <img src={Temp} alt="Profile Picture" /> */}
            {/* <img src={sectionIntro.introInfo.image} alt="Profile Picture" /> */}
            {/* <img src={require("../passport.jpg")} alt="Profile Picture" /> */}
            {/* <img src ={data?.sectionIntro.introInfo.image} alt="profile" />
             */}
              <img src={require(`../${sectionIntro.introInfo.image}`)} alt="profile" />


            <p className="lead">{sectionIntro.introInfo.lead}</p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full">
          <h2>{aboutContent.profile.title}</h2>
          <p>{aboutContent.profile.content}</p>
          <ul className="info-list">
            {aboutContent.infoList.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>


        <div className="row about skills">
          <h2 className="title2">Professional Skills</h2>
          {aboutContent.skills.map((skill, index) => (
            <div className="box" key={index}>
              <h4>{skill.name}</h4>
              <div className="percentage">
                <div style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
        
      </div>
    </section>
  );
};

export default About;

