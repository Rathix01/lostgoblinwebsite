const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		position: "relative",
		opacity: "1",
	}
})

module.exports = {
	container: css( styles.container )
}