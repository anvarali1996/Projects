// import React from 'react';
// import Logo from '../assets/TestLogo@2x.png';
// import '../style/Navbar.css';
// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <a className="navbar-brand" href="#"><img src={Logo} alt="" width={210}/></a>
//       {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon">dsds</span>
//       </button> */}
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Overwiev</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Pasients</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Schedule</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Message</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Transaction</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import Logo from '../assets/TestLogo@2x.png';
// // import BellIcon from '../assets/bell-icon.png';
// // import SettingsIcon from '../assets/settings-icon.png';
// import DoctorImage from '../assets/doctor-image.png';
// import OverviewIcon from '../assets/Overview.png';
// import PatientsIcon from '../assets/Pacients.png';
// import ScheduleIcon from '../assets/calennav.png';
// import MessageIcon from '../assets/Message.png';
// import TransactionIcon from '../assets/Transition.png';
// import Familydoc from '../assets/settings_FILL0_wght300_GRAD0_opsz24.svg';
// import Familydoc2 from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg';
// import "../font.css";
// import '../style/Navbar.css';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" width={210} /></a>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#"><img src={OverviewIcon} alt="Overview" className="icon" /> Overview</a>
//           </li>
//           <li className="nav-item navSpecial">
//             <a className="nav-link" href="#"><img src={PatientsIcon} alt="Patients" className="iconSpacial" /> Patients</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#"><img src={ScheduleIcon} alt="Schedule" className="icon" /> Schedule</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#"><img src={MessageIcon} alt="Message" className="icon" /> Message</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#"><img src={TransactionIcon} alt="Transaction" className="icon" /> Transaction</a>
//           </li>
//         </ul>
//         <ul className="navbar-now ml-auto">
//           <li className="nav-item">
//             {/* <a className="nav-link" href="#"><img src={BellIcon} alt="Bell" className="icon" /></a> */}
//           </li>
//           <li className="nav-item">
//             {/* <a className="nav-link" href="#"><img src={SettingsIcon} alt="Settings" className="icon" /></a> */}
//           </li>
//           <li className="nav-item navv-doc">
//              <div className="doctor-info">
//                 <img src={DoctorImage} alt="Dr. Jose Simons" className="doctor-image" />
//                 <div className="doctor-details">
//                   <p className="doctor-name">Dr. Jose Simmons</p>
//                   <p className="doctor-title">General Practitioner</p>
//                 </div>
//                 <div className="vertical-line"></div>
//                 <div className="doctor-icons">
//                   <img src={Familydoc} width={19} alt="tools1" />
//                   <img src={Familydoc2} width={4} alt="tools2" />
//                 </div>
//               </div>
//             {/* <div className="doctor-info">
//               <img src={DoctorImage} alt="Dr. Jose Simons" className="doctor-image" />
//               <div className="doctor-details">
//                 <p className="doctor-name">Dr. Jose Simmons</p>
//                 <p className="doctor-title">General Practitioner</p>
//                 <img src={Familydoc} width={19} alt="tools1" />
//                 <img src={Familydoc2} width={4} alt="tools2" />
//               </div>
//             </div> */}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// ========================///////////////////=============================

import React from 'react';
import Logo from '../assets/TestLogo@2x.png';
import OverviewIcon from '../assets/Overview.png';
import PatientsIcon from '../assets/Pacients.png';
import ScheduleIcon from '../assets/calennav.png';
import MessageIcon from '../assets/Message.png';
import TransactionIcon from '../assets/Transition.png';
import DoctorImage from '../assets/doctor-image.png';
import Familydoc from '../assets/settings_FILL0_wght300_GRAD0_opsz24.svg';
import Familydoc2 from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg';
import "../font.css";
import '../style/Navvbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#"><img src={Logo} alt="Logo" width={210} /></a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-item">
          <a href="#"><img src={OverviewIcon} alt="Overview" className="icon" /> Overview</a>
        </div>
        <div className="navbar-item navSpecial">
          <a href="#"><img src={PatientsIcon} alt="Patients" className="iconSpacial" style={{width: "24px", height: "17px"}}/> Patients</a>
        </div>
        <div className="navbar-item">
          <a href="#"><img src={ScheduleIcon} alt="Schedule" className="icon" style={{width: '15px', height: '17px'}}/> Schedule</a>
        </div>
        <div className="navbar-item">
          <a href="#"><img src={MessageIcon} alt="Message" className="icon" style={{width: '19px', height: '17px'}}/> Message</a>
        </div>
        <div className="navbar-item">
          <a href="#"><img src={TransactionIcon} alt="Transaction" className="icon" style={{width: "22px;", height: '17px'}}/> Transaction</a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="doctor-info">
          <img src={DoctorImage} alt="Dr. Jose Simons" className="doctor-image" />
          <div className="doctor-details">
            <p className="doctor-name">Dr. Jose Simmons</p>
            <p className="doctor-title">General Practitioner</p>
          </div>
          <div className="vertical-line"></div>
          <div className="doctor-icons">
            <img src={Familydoc} width={19} alt="tools1" style={{margin:"0px 12px"}} />
            <img src={Familydoc2} width={4} alt="tools2" style={{marginRight: "12px"}}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
