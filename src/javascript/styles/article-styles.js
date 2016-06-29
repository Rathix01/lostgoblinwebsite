const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	pageContainer: {
		width: '100%',
		boxSizing: "border-box",
		paddingTop: "60px",
		background: "#3F3432",
		position: "relative",

		':before': {
	        content: '" "',
	    }
	},
	container: {
		width: '100%',
		boxSizing: "border-box",
		minHeight: '400px',
		marginTop: "40px",
		background: "#3F3432",
		position: "relative",
		zIndex: "1",
		padding: "0px 20px",

		':before': {
	        content: '" "',
	    }
	},
	textContainer: {
		width: "100%",
		color: "#F68F21",
		margin: "0px auto",
		maxWidth: "1200px",
		fontFamily: '"Roboto"',
		fontSize: "18px",
	},
	header: {
		width: "100%",
		color: "#F68F21",
		height: "70px",
		margin: "0px auto",
		maxWidth: "1200px",
		fontFamily: '"Architects Daughter"',
		fontSize: "26px",
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
	},
	backToList: {
		height: "40px",
		width: "100%",
		maxWidth: "1200px",
		margin: "-130px auto 0px",
		position:"relative",
		zIndex: "2",
	}
})

module.exports = {
	pageContainer: css( styles.pageContainer ),
	container: css( styles.container ),
	textContainer: css( styles.textContainer ),
	header: css( styles.header ),
	games: css( styles.games ),
	image: css( styles.image ),
	backToList: css( styles.backToList ),
}