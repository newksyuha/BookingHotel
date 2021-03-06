import React from "react";

class MenuItem extends React.Component {
  render() {
    const name = this.props.name;
    const url = this.props.url;
    return (
      <a
        href={url}
        className="text-white text-lg leading-6 font-medium hover:text-opacity-50 focus:outline-none transition ease-in-out duration-150"
      >
        {name}
      </a>
    );
  }
}

export default MenuItem;
