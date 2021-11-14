import React from "react";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import { queryCLient } from "../modules/cache/queryCLient";
import { NavBar } from "../component";

const NavbarContainer = () => {
  const data = queryCLient.getQueryData<Definitions.User>(
    CACHE_KEYS.UserData.USER_DATA
  );
  return (
      <NavBar img={data?.avatar || ""} />
    
  );
};

export default NavbarContainer;
