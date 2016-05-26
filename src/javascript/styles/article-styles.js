const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		minHeight: '400px',
		paddingTop: "60px",

		':before': {
	        content: '" "',
	    }
	},
	header: {
		background: "url(images/dev-blog-line.png) no-repeat center bottom",
		width: "100%",
		color: "#F68F21",
		height: "70px",
		margin: "0px auto",
		maxWidth: "1200px",
		fontFamily: '"Architects Daughter"',
	},
	games: {
		margin: "0px auto",
		maxWidth: "1200px",
		display: "flex",
		flexDirection: "column"
	},
	image: {
		flexGrow: "1",
		cursor: "pointer"
	}
})

module.exports = {
	container: css( styles.container ),
	header: css( styles.header ),
	games: css( styles.games ),
	image: css( styles.image ),
}