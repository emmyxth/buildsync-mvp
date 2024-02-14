import * as React from "react";
import Header from "./Header";
import HeroList, { HeroListItem } from "./HeroList";
import TextInsertion from "./TextInsertion";
import ChatScreen from "./ChatScreen";
import BuildingCodeScreen from "./BuildingCodeScreen";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";

interface AppProps {
  // title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ height: '50vh', width: '100%', maxWidth: '600px', margin: 'auto' }}>
        <BuildingCodeScreen />
      </div>
      <div style={{ height: '50vh', width: '100%', maxWidth: '600px', margin: 'auto', overflowY: 'auto', paddingBottom: '10%' }}>
        <ChatScreen />
      </div>
    </div>
  );
};

export default App;
