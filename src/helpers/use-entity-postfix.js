import { useContext, useEffect, useState } from "react";
import ClientResolverContext from "../context/client-resolver-context";
import entities from "../enums/entities";
import { FSA_POSTFIX } from "./constants";

export const useEntityPostfix = () => {
  const { currentEntity } = useContext(ClientResolverContext);

  const [sitePostfix, setSitePostfix] = useState("");
  const [isCySEC, setIsCySEC] = useState(null);

  useEffect(() => {
    setIsCySEC(currentEntity === entities.CYSEC);
    setSitePostfix(currentEntity === entities.FSA ? FSA_POSTFIX : "");
    setIsCySEC(false);
    setSitePostfix(FSA_POSTFIX);
  }, [currentEntity]);

  return {
    sitePostfix,
    isCySEC,
  };
};
