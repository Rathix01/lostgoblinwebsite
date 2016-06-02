const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '40px',
		height: '40px',
		boxSizing: "border-box",
		position: "absolute",
		top: "30px",
		right: "15px",
		cursor: 'pointer',

		'@media (min-width: 850px)': {
            display: "none"
        }
	},
	innerContainer: {
		opacity: "1",
	},
	hamburgerBar: {
		position: "absolute",
		height: "5px",
		background: "#fff",
		width: "100%",
		opacity: "1",
		borderRadius: "5px",
	},
	bar1: {
		top: "3px"
	},
	bar2: {
		top: "16px"
	},
	bar3: {
		top: "29px"
	}
})

module.exports = {
	container: css( styles.container ),
	innerContainer: css( styles.innerContainer ),
	bar1: css( styles.hamburgerBar, styles.bar1 ),
	bar2: css( styles.hamburgerBar, styles.bar2 ),
	bar3: css( styles.hamburgerBar, styles.bar3 ),
}