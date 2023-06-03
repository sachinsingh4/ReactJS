import logo from "./logo.svg";
import "./App.css";
//Use this import when we export default i.e only one file is exported
//import User from "./User";

//Use this for import two or more export file...
import { User, User2 } from "./FunctionComponent";
import User3 from "./ClassComponent";
import ClickEvent from "./ClickEvent";
import State from "./State";
import Stateclass from "./StateClassComponet";
import PropsComponent from "./State";
import PropsClass from "./PropsClass";
import InputBox from "./InputBox";
import HideAndShow from "./HideAndShow";
import ConstructorClass from "./ConstructorClass";
import ComponentDidUpdate from "./ComponentDicUpdate";
import User4 from "./ComponenWillUnmount";
import HooksInFunctional from "./HooksInFunctional";
import FunctionalComponentDemo from "./FunctionalComponentDemo";
import Array1 from "./Array";
import Axios1 from "./Axios";
import NestedArray from "./NestedArray";
import ReuseComponentParent from "./ReuseComponentParent";
import PureComponentParent from "./PureComponetParent";
import UseMemo from "./UseMemo";
import ForwardrefParent from "./ForwardrefParent";
import Route1 from "./Route";
function App() {
  return (
    <div className="App">
      {/*<h1>Hello World</h1>
      <User />
      <ClickEvent />
      <State />
      <Stateclass />
      <User3 />*/}
      {/*<User /> <User2 />  we can call any number of time this User component*/}
      {/* <PropsComponent
        name={"Sachin Singh"}
        email={"Sachin@gmail.com"}
        other={{ add: "nashik", mobile: 9091 }}
      /> 
       {/*Passing props here name = 'Hello Sachin' ... Here you can see we can pass multiple values
      from components that is called as props*/}
      {/*<PropsClass />
      <InputBox />
      <HideAndShow />
      <ConstructorClass name={"Hello Sachin"} />
        <ComponentDidUpdate />
        <User4 />
        <HooksInFunctional />
        <FunctionalComponentDemo />
        <Axios1 />
        <Array1 />
        <NestedArray />
        <ReuseComponentParent />
        <PureComponentParent />
         <UseMemo />
         <ForwardrefParent />*/}
      <Route1 />
    </div>
  );
}

export default App;
