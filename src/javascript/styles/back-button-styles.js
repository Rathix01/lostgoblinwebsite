const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		background: "url(images/close-2.png) no-repeat center top",
		width: "45px",
		height: "37px",
		position: "absolute",
		top: "5px",
		right: "5px",
		cursor: "pointer",

		":hover": {
			marginTop: "-1px",
			filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
		},

		":active": {
			marginTop: "1px",
			filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
		},
	},
	clickArea: {
		height: "100%",
		width: "100%",
	}
})

module.exports = {
	container: css( styles.container ),
	clickArea: css( styles.clickArea )
}