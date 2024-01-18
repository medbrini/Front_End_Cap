import React from 'react';
import BasicLayout from "View/components/BasicLayout"; // Importez BasicLayout
import curved6 from "assets/images/curved-images/curved14.jpg";


const Layout = ({ children }) => {
  return (
    <BasicLayout  image={curved6}>
      <div style={{ display: 'flex'}}>
        <div className="child-contain" style={{ flex: 1 , position: 'center' }}>
          {children}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Layout;
