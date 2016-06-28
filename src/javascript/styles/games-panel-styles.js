const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
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
		textIndent: "10px",
	},
	games: {
		margin: "0px auto",
		maxWidth: "1200px",
		display: "flex",
		flexDirection: "column",
		position: "relative",
	},
	image: {
		flexGrow: "1",
		width: "100%",
	},
	appStore: {
		background: "url(images/app-store.png) no-repeat center bottom",
		backgroundSize: "100% 100%",
		position: "absolute",
		bottom: "8px",
		right: "8px",
		width: "125px",
		height: "38px",
		cursor: "pointer",
	},
	playStore: {
		background: "url(images/play-store.png) no-repeat center bottom",
		backgroundSize: "100% 100%",
		position: "absolute",
		bottom: "8px",
		right: "135px",
		width: "125px",
		height: "38px",
		cursor: "pointer",
	},
})

module.exports = {
	container: css( styles.container ),
	header: css( styles.header ),
	games: css( styles.games ),
	image: css( styles.image ),
	appStore: css( styles.appStore ),
	playStore: css( styles.playStore ),
}