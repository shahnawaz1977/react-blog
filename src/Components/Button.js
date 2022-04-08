import React from "react";
import PropTypes from 'prop-types';
const Button = ({label, styleClass, onClick}) => (
    <button className={`btn ${styleClass}`}>{label}</button>
)

Button.propTypes = {
    label: PropTypes.string.isRequired,
    styleClass:PropTypes.string,
    onClick: PropTypes.func
}
Button.defaultProps ={
    styleClass: 'btn-primary'
}
export default Button;