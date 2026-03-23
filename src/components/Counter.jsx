import { connect } from "react-redux";
import {inc, dec, rnd} from "../actions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">
                DEC
            </button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">
                INC
            </button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">
                RND
            </button>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value,
//     };
// };

// // const mapDispatchToProps = (dispatch) => {
// //     return bindActionCreators(actions, dispatch);
// // };

// export default connect(mapStateToProps, actions)(Counter); // Это значит, что connect будет запущен, он выполнит какой-то функционал, который мы ему передадим и после этого этот функционал будет применен к компоненту Counter. Как итог всей этой конструкции мы получим другой компонент который будет обёрнут в дополнительный функционал который мы ему дадим.

//Функция connect получает несколько функций который будут настраивать наш компонент

export default Counter;
