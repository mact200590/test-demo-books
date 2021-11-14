import React, { PropsWithChildren } from "react";
import NavbarContainer from "../../container/NavbarContainer";

const PageWrapper = ({ children }: PropsWithChildren<{}>) => (
  <div>
    <NavbarContainer />
    {children}
  </div>
);
export default PageWrapper;
