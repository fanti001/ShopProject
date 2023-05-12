
const Blocker = (props) => {




   return (
      <>
         <div className={`${props.active ? "blocker--active" : "blocker--hide"}`} onClick={props.hideBlocker}></div>
      </>
   );
}

export default Blocker;