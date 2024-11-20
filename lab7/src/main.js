function start() {
  class Bookmark extends React.Component {
    constructor(props) {
      super(props);
      console.log("Component created");
    }
    static propTypes = {
      description: PropTypes.number
    };
    title = this.props.title;
    titleStyle = {
      color: "red"
    };
    render() {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", {
        style: this.titleStyle
      }, this.title), /*#__PURE__*/React.createElement("a", {
        href: this.props.href
      }, " ", this.props.description, " "), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          this.title = this.title + "---MUDOU!";
          this.setState({});
        }
      }, "Click me"));
    }
  }
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Highest Level Heading"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Bookmark, {
    title: "First item, with second level heading",
    href: "https://www.ualg.pt",
    description: "UAlg web page"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    title: "Second item, with second level heading",
    href: "https://www.ceot.ualg.pt/research-groups/networking-iot",
    description: "CEOT web page"
  }))), document.getElementById("mainContainer"));
}
