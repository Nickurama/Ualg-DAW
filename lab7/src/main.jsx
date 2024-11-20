function start() {
	class Bookmark extends React.Component {
		constructor(props) {
			super(props);
			console.log("Component created");
		}
		static propTypes = { description : PropTypes.number };
		title = this.props.title;
		titleStyle = { color : "red" }
		render() {
			return (<li>
				<h2 style={this.titleStyle}>{this.title}</h2>
				<a href={this.props.href}> {this.props.description} </a>
				<button onClick={() => {
					this.title = this.title + "---MUDOU!";
					this.setState({});
				}}>
				Click me
				</button>
			</li>);
		}
	}
	ReactDOM.render(
		<div>
			<h1>Highest Level Heading</h1>
			<ul>
				<Bookmark title={"First item, with second level heading"}
					href={"https://www.ualg.pt"}
					description={"UAlg web page"}
				/>
				<Bookmark title={"Second item, with second level heading"}
					href={"https://www.ceot.ualg.pt/research-groups/networking-iot"}
					description={"CEOT web page"}
				/>
			</ul>
		</div>,
		document.getElementById("mainContainer")
	);
}
