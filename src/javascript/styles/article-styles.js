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
		padding: "5px 0px",
	},
	textImage: {
		display: "block",
		maxWidth: "100%",
		height: "auto",
		margin: "auto",
		padding: "20px 0px",
		background: "#3F3432",
		position: "relative"
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
	subHeader: {
		width: "100%",
		color: "#F68F21",
		height: "60px",
		margin: "0px auto",
		maxWidth: "1200px",
		fontFamily: '"Architects Daughter"',
		fontSize: "22px",
		marginTop: "40px"
	},
	link: {
		color: "#F68F21",

		':visited': {
			color: "#F68F21"
		}
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
	},
	imageContainer: {
		margin: "0px auto",
		maxWidth: "100%",
		width: "1200px"
	}
})

module.exports = {
	pageContainer: css( styles.pageContainer ),
	container: css( styles.container ),
	textContainer: css( styles.textContainer ),
	textImage: css( styles.textImage ),
	header: css( styles.header ),
	subHeader: css( styles.subHeader ),
	link: css( styles.link ),
	games: css( styles.games ),
	image: css( styles.image ),
	backToList: css( styles.backToList ),
	imageContainer: css( styles.imageContainer )
}