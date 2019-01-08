import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    count: state
  });
  
  const mapDispatchToProps = dispatch => ({
    onSwitch: () => dispatch({ type: "ADD" }), 
    onRemove: () => dispatch({ type: "REMOVE"}),
    onAdd10: () => dispatch({ type: "ADD10"}),
    onRemove10: () => dispatch({ type: "REMOVE10"}),
    onReset: () => dispatch({ type: "RESET"}),

  });

  const CountComponent = ({ count, onSwitch, onRemove, onAdd10, onRemove10, onReset}) => (
    <div>
      <p>{count}</p>
      <button onClick={onSwitch}>ADD </button>
      <button onClick={onRemove}>REMOVE </button>
      <button onClick={onAdd10}>ADD 10</button>
      <button onClick={onRemove10}>REMOVE 10</button>
      <button onClick={onReset}>RESET</button>

    </div>

    
  );
 




export default connect (mapStateToProps, mapDispatchToProps)(CountComponent);