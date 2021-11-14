import React, { PropsWithChildren } from "react";
import NavbarContainer from "../../containers/NavbarContainer";

const PageWrapper = ({ children }: PropsWithChildren<{}>) => (
  <div>
    <NavbarContainer />
    {children}
  </div>
);
export default PageWrapper;
