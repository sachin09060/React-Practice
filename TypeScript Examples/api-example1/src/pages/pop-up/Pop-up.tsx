// import React, { useEffect } from "react";
// import "./Pop-up.css";
// import Button from "../../components/Button";

// const PopUp = () => {
//   useEffect(() => {
//     handleShow();
//   }, []);
//   const handleShow = () => {
//     const testPopup = window.open(
//       "",
//       "",
//       ""
//     );

//     if (
//       !testPopup ||
//       testPopup.closed ||
//       typeof testPopup.closed === "undefined"
//     ) {
//       alert("Popup was blocked by the browser 1.");
//       testPopup?.close();
//       return;
//     }
//     else {
//       const popup = window.open(
//         "/api/popup",
//         "_blank",
//         "width=600,height=500,left=450,top=180,resizable,noopener,noreferrer"
//       );

//       if (!popup ||
//         popup.closed ||
//         typeof popup.closed === "undefined"
//     ) {
//         alert("Popup was blocked by the browser 2.");
//       }
//       else {
//         popup.focus();
//       }
//     }
//   };

//   return (
//     <div className="popup-container">
//       <Button onClick={handleShow} label="Open popup" />
//     </div>
//   );
// };

// export default PopUp;

import React, { useEffect } from "react";
import "./Pop-up.css";
import Button from "../../components/Button";

const PopUp = () => {
  useEffect(() => {
    handleShow();
  }, []);
  const handleShow = () => {
    const testPopup = window.open(
      "/api/popup",
      "_blank",
      "width=600,height=500,left=450,top=180,resizable,noopener,noreferrer"
    );

    if (
      !testPopup ||
      testPopup.closed ||
      typeof testPopup.closed === "undefined"
    ) {
      testPopup?.close();
      return;
    } else {
      testPopup.close();
    }
  };

  return (
    <div className="popup-container">
      {/* <Button onClick={handleShow} label="Open popup" /> */}
    </div>
  );
};

export default PopUp;
