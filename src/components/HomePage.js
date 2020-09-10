// import React, { Component } from "react";

// import { Route, Link } from "react-router-dom";

// export default class HomePage extends Component {
//   render() {
//     let params = new URLSearchParams(this.props.location.search);

//     return (
//       <React.Fragment>
//         {/* <Link to={`${this.props.match.url}/edit`}>Edit Profile</Link> */}
//         <Link to={{ pathname: this.props.match.url, search: "?login=true" }}>
//           Login
//         </Link>
//         <Link to={{ pathname: this.props.match.url, search: "?login=false" }}>
//           Login false
//         </Link>

//         {params.get("login")}
//         <button
//           onClick={() => {
//             this.props.history.push(
//               // this.props.location.pathname
//               {
//                 pathname: this.props.location.pathname,
//                 search: "?query=abc",
//               }
//             );
//           }}
//         >
//           Button
//         </button>
//       </React.Fragment>
//     );
//   }
// }

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = (props) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    // console.log(location.state.detail); // result: 'some_value'
  }, [location]);

  return (
    <React.Fragment>
      <div>vishnu</div>
      <button
        onClick={() => {
          props.history.push(
            // this.props.location.pathname
            {
              pathname: props.location.pathname,
              search: "?query=abc",
            }
          );
        }}
      >
        Button
      </button>
    </React.Fragment>
  );
};

export default HomePage;
