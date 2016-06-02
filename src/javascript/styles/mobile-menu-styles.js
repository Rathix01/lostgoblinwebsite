const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		boxSizing: "border-box",
		height: '300px',
		minWidth: "300px",
		width: "100%",
		zIndex: "2",
		top: "-300px",
		background: "#000",
		margin: "0px auto",
	}
})

module.exports = {
	container: css( styles.container )
}