/* import { Responsive, WidthProvider } from "react-grid-layout";
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dnd() {
  const layouts = [
    { i: "1", x: 0, y: 1, w: 10, h: 2, static: false },
    { i: "2", x: 1, y: 2, w: 10, h: 2, },
    { i: "3", x: 4, y: 0, w: 10, h: 2 }
  ]; 
  
    return (
      <ResponsiveGridLayout
      className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveGridLayout>
    );
  } */


import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import Analytics from "../Analytics";
//import CandleTest from "../Graficos/CandleTest";

//import TopBar from "./TopBar";
//import Widget from "./Widget";

const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 5, h: 6},
    { i: "b", x: 0, y: 0, w: 25, h: 22,  minH: 10, minW: 4 },
    { i: "c", x: 180, y: 1, w: 25, h: 22,  minH: 10, minW: 4 },
    { i: "d", x: 0, y: 4, w: 2, h: 4 }
  ]
};
function Dnd({ size: { width } }) {
  
 

  return (
    <>
      {/* <TopBar
        onLayoutSave={onLayoutSave}
        items={items}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        originalItems={originalItems}
      /> */}
      <ResponsiveGridLayout
        className="layout"
        style={{padding: "0px"}}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 8, xs: 480, xxs: 0 }}
        cols={{ lg: 50, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={10}
        width={width}
        
      >
        {/*<div key="a"> 
        
          <div className="bloco" 
        style={{
        width: "100%", 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        }}>
          <h1>Teste</h1>
          <div style={{backgroundColor: "blue",width: "100%", 
        height: "100%",}}><CandleTest/></div>
          <div style={{backgroundColor: "red",width: "100%", 
        height: "100%",}}><CandleTest/></div> 

        </div> 
        </div> */}
        <div key="c"><Analytics/></div>
        <div key="b"><Analytics/></div>
        

        
    
      </ResponsiveGridLayout>
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Dnd);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}


